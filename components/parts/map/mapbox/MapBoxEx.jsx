import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import React, { useState, useRef, useCallback } from "react";
import ReactMapGL from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";

// Please be a decent human and don't abuse my Mapbox API token.
// If you fork this sandbox, replace my API token with your own.
// Ways to set Mapbox token: https://uber.github.io/react-map-gl/#/Documentation/getting-started/about-mapbox-tokens

function MapBoxex({ dataList }) {
  const [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });
  const mapRef = useRef();
  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  );

  // if you are happy with Geocoder default settings, you can just use handleViewportChange directly
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

  return (
    <div className="w-full h-screen z-20">
      <ReactMapGL
        ref={mapRef}
        {...viewport}
        mapStyle="mapbox://styles/erika00g/cl1e7ojtv001f14mhb7bpu5q5"
        mapboxApiAccessToken={process.env.mapbox_key}
        style={{ position: "absolute", width: "100%", height: "100%" }}
        width="100%"
        height="100%"
        onViewportChange={handleViewportChange}
     
      >
        <Geocoder
          mapRef={mapRef}
          onViewportChange={handleGeocoderViewportChange}
          mapboxApiAccessToken={process.env.mapbox_key}
          position="top-left"
          style={{ position: "absolute", top: "50px" }}
        />
      </ReactMapGL>
    </div>
  );
}

export default MapBoxex;
