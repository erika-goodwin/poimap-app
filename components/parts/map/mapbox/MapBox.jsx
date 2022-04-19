import { useState, useCallback, useRef, useEffect, useContext } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import getCenterOfBounds from "geolib/es/getCenterOfBounds";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import Geocoder from "react-map-gl-geocoder";
// import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import "mapbox-gl/dist/mapbox-gl.css";
import Pin from "./Pin";

import SearchPin from "./SearchPin";
import ClickedPin from "./ClickedPin";

// import { _MapContext } from "@globalfishingwatch/react-map-gl";

function MapBox({ dataList, setDataList, setShowList }) {
  const [selectedPin, setSelectedPin] = useState(null);
  const [searchedResult, setSearchedResult] = useState({});
  const [clickedPin, setClickedPin] = useState({});
  const [showPopup, setShowPopup] = useState(true);

  const [input] = useState("");
  const coordinates = [];
  const pinList = [];

  const geocoderContainerRef = useRef();
  const mapRef = useRef();

  // const context = useContext(_MapContext);

  const list = (dataList) =>
    dataList?.map((result) => {
      const color = result.color;
      const title = result.title;
      result.list?.map((result) => {
        coordinates.push({
          longitude: result.long,
          latitude: result.lat,
        });
        pinList.push({
          name: result.name,
          address: result.address,
          lat: result.lat,
          long: result.long,
          color: color,
          title: title,
        });
      });
    });

  dataList && list(dataList);

  const center = getCenterOfBounds(coordinates);
  const [viewState, setViewState] = useState({
    longitude: center.longitude,
    latitude: center.latitude,
    zoom: 11,
  });

  const handleViewportChange = useCallback(
    (newViewport) => setViewState(newViewport),
    []
  );

  const handleGeocoderViewportChange = useCallback(
    (newViewport) => {
      const geocoderDefaultOverrides = { transitionDuration: 1000 };

      return handleViewportChange({
        ...newViewport,
        ...geocoderDefaultOverrides,
      });
    },
    [handleViewportChange]
  );

  const handleSearchedData = (res) => {
    const data = res.result;
    const coordinates = {
      longitude: data.geometry.coordinates[0],
      latitude: data.geometry.coordinates[1],
    };
    const placeNameAddress = data.place_name;

    const addressArray = placeNameAddress.split(",");
    const name = addressArray.shift();
    const address = addressArray.toString();

    setSearchedResult({
      coordinates,
      placeNameAddress,
      name,
      address,
    });
    setClickedPin({});
    setShowPopup(false);
  };

  const handleClick = (map) => {
    map.stopPropagation();

    const clickedCoordinates = {
      longitude: map.lngLat[0],
      latitude: map.lngLat[1],
    };

    if (JSON.stringify(clickedPin) == "{}") {
      setClickedPin(clickedCoordinates);
      setShowPopup(true);
    } else {
      if (showPopup) {
        return null;

        // HERE, Need something manage to move the pin when it is empty
      } else {
        setClickedPin(clickedCoordinates);
        setShowPopup(true);
      }
    }
  };

  const updateDataState = (data) => {
    const lestOfObj = dataList.filter((item) => item.title !== data.title);
    const oneObj = dataList.filter((item) => item.title == data.title);
    const listToAdd = oneObj[0].list;
    const addingData = data.data;

    listToAdd.push(addingData);
    lestOfObj.push(listToAdd);

    setDataList(lestOfObj);
    setClickedPin({});

    setShowList(true);
  };

  return (
    <div className="w-full h-screen z-0 ">
      <div
        ref={geocoderContainerRef}
        // style={{ position: "absolute", top: 200, left: 20, zIndex: 1 }}
      />
      <Map
        ref={mapRef}
        {...viewState}
        mapStyle="mapbox://styles/erika00g/cl1e7ojtv001f14mhb7bpu5q5"
        mapboxApiAccessToken={process.env.mapbox_key}
        // style={{ position: "absolute", width: "100%", height: "100%" }}
        width="100%"
        height="100%"
        onViewportChange={handleViewportChange}
        onClick={handleClick}
      >
        {searchedResult.coordinates && (
          <SearchPin
            searchedResult={searchedResult}
            dataList={dataList}
            updateData={updateData}
          />
        )}
        {JSON.stringify(clickedPin) !== "{}" && (
          <ClickedPin
            clickedPin={clickedPin}
            dataList={dataList}
            setDataList={setDataList}
            updateDataState={updateDataState}
            showPopup={showPopup}
            setShowPopup={setShowPopup}
          />
        )}

        {pinList.map((pin, index) => (
          <Pin
            pin={pin}
            key={index}
            selectedPin={selectedPin}
            setSelectedPin={setSelectedPin}
          />
        ))}
      </Map>
      <Geocoder
        mapRef={mapRef}
        onViewportChange={handleGeocoderViewportChange}
        mapboxApiAccessToken={process.env.mapbox_key}
        position="top-left"
        // style={{ position: "absolute", top: '150px !important'}}
        inputValue={input}
        onResult={(res) => handleSearchedData(res)}
      />
    </div>
  );
}
export default MapBox;
