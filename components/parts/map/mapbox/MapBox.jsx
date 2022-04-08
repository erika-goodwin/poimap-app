import { useState, useCallback, useRef } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import getCenterOfBounds from "geolib/es/getCenterOfBounds";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import Geocoder from "react-map-gl-geocoder";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"
import { useEffect } from "react/cjs/react.development";

function Pin({ pin, selectedPin, setSelectedPin }) {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <Marker
        longitude={pin.long}
        latitude={pin.lat}
        offsetTop={-10}
        onClick={(e) => {
          e.preventDefault;
          setSelectedPin(pin);
          setShowPopup(true);
        }}
      >
        <p
          role="img"
          className="text-2xl cursor-pointer animate-bounce"
          aria-label="push-pin"
        >
          📍
        </p>
      </Marker>

      {showPopup && selectedPin?.name === pin.name && (
        <Popup
          longitude={pin.long}
          closeOnClick={false}
          latitude={pin.lat}
          offset={20}
          anchor="bottom"
          onClose={() => setShowPopup(false)}
        >
          {pin.name}
        </Popup>
      )}
    </>
  );
}

function MapBox({ dataList }) {
  const [selectedPin, setSelectedPin] = useState(null);
  const [searchedResult, setSearchedResult] = useState({});
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
    const placeCategory = data.properties.category?.text;

    const placeNeighborhood = data.context[0].text;
    const placePostCord = data.context[1].text;
    const placeCityName = data.context[2].text;
    const placeAreaName = data.context[3].text;
    const placeProvince = data.context[4].text;
    const placeCountry = data.context[5].text;

    setSearchedResult({
      coordinates,
      placeCategory,
      placeNameAddress,
      placeNeighborhood,
      placePostCord,
      placePostCord,
      placeCityName,
      placeAreaName,
      placeProvince,
      placeCountry,
    });
  };

  useEffect(() => {
    if (searchedResult !== {}) {
      console.log("searchedResult,", searchedResult);
    }
  }, [searchedResult]);

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
        {/* react-map-gl-geocoder ============================= */}
        <Geocoder
          mapRef={mapRef}
          onViewportChange={handleGeocoderViewportChange}
          mapboxApiAccessToken={process.env.mapbox_key}
          position="top-left"
          // style={{ position: "absolute", top: '150px !important'}}
          onResult={(res) => {
            handleSearchedData(res);
          }}
      
        />
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
