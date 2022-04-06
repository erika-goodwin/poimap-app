import { useState, useCallback, useRef } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import getCenterOfBounds from "geolib/es/getCenterOfBounds";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import Geocoder from "react-map-gl-geocoder";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"

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
  const coordinates = [];
  const pinList = [];

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

  //react-map-gl-geocoder ===============================
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
  //react-map-gl-geocoder =============================

  //@mapbox/mapbox-gl-geocoder =============================
  // mapboxgl.accessToken = process.env.mapbox_key;
  // const map = new mapboxgl.Map({
  //   container: "map",
  //   style: "mapbox://styles/erika00g/cl1e7ojtv001f14mhb7bpu5q5",
  //   center: [center.longitude, center.latitude],
  //   zoom: 11,
  // });
  // const geocoder = new MapboxGeocoder({
  //   accessToken: process.env.mapbox_key,
  //   mapboxgl: mapboxgl,
  // });
  // map.addControl(geocoder);
  //@mapbox/mapbox-gl-geocoder =============================

  return (
    <div className="w-full h-screen z-0 ">
      {/* @mapbox/mapbox-gl-geocoder ============================= */}
      {/* <div id="map"></div> */}
      {/* @mapbox/mapbox-gl-geocoder ============================= */}
      <Map
        ref={mapRef}
        {...viewState}
        mapStyle="mapbox://styles/erika00g/cl1e7ojtv001f14mhb7bpu5q5"
        mapboxAccessToken={process.env.mapbox_key}
        style={{ width: "100%", height: "100%" }}
        // onMove={(evt) => setViewState(evt.viewState)}
        onMove={handleViewportChange}
      >
        {/* react-map-gl-geocoder ============================= */}
        <Geocoder
          mapRef={mapRef}
          onMove={handleGeocoderViewportChange}
          mapboxAccessToken={process.env.mapbox_key}
          // position="top-left"
        />
        {/* react-map-gl-geocoder ============================= */}
        {pinList.map((pin, index) => (
          <Pin
            pin={pin}
            key={index}
            selectedPin={selectedPin}
            setSelectedPin={setSelectedPin}
          />
        ))}
      </Map>
    </div>
  );
}
export default MapBox;
