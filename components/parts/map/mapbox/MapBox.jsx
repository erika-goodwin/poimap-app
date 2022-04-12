import { useState, useCallback, useRef, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import getCenterOfBounds from "geolib/es/getCenterOfBounds";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import Geocoder from "react-map-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import "mapbox-gl/dist/mapbox-gl.css";
import Pin from "./Pin";


import SearchPin from "./SearchPin";

function MapBox({ dataList }) {
  const [selectedPin, setSelectedPin] = useState(null);
  const [searchedResult, setSearchedResult] = useState({});

  const [selectedList, setSelectedList] = useState({});

  const [input] = useState("");
  const coordinates = [];
  const pinList = [];

  const geocoderContainerRef = useRef();
  const mapRef = useRef();

  const list = dataList?.map((result) => {
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
      });
    });
  });

  const center = getCenterOfBounds(coordinates);
  const [viewState, setViewState] = useState({
    longitude: center.longitude,
    latitude: center.latitude,
    zoom: 11,
  });

  // //react-map-gl-geocoder ===============================
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
  };

  return (
    <div className="w-full h-screen z-0 ">
      <div
        ref={geocoderContainerRef}
        // style={{ position: "absolute", top: 200, left: 20, zIndex: 1 }}
      />
      <ReactMapGL
        ref={mapRef}
        {...viewState}
        mapStyle="mapbox://styles/erika00g/cl1e7ojtv001f14mhb7bpu5q5"
        mapboxApiAccessToken={process.env.mapbox_key}
        // style={{ position: "absolute", width: "100%", height: "100%" }}
        width="100%"
        height="100%"
        onViewportChange={handleViewportChange}
      >
        <Geocoder
          mapRef={mapRef}
          onViewportChange={handleGeocoderViewportChange}
          mapboxApiAccessToken={process.env.mapbox_key}
          position="top-left"
          // style={{ position: "absolute", top: '150px !important'}}
          inputValue={input}
          onResult={(res) => handleSearchedData(res)}
        />
        {searchedResult.coordinates && (
         <SearchPin searchedResult={searchedResult} dataList={dataList} />
        )}

        {pinList.map((pin, index) => (
          <Pin
            pin={pin}
            key={index}
            selectedPin={selectedPin}
            setSelectedPin={setSelectedPin}
          />
        ))}
      </ReactMapGL>
    </div>
  );
}
export default MapBox;
