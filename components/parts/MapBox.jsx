import { useState } from "react";
import Map from "react-map-gl";
import MapTopMenu from "./MapTopMenu";

function MapBox() {
  const [viewState, setViewState] = useState({
    longitude: -122.4,
    latitude: 37.8,
    zoom: 14,
  });

  return (
    <section className="w-full h-screen z-0 ">
      <Map
        {...viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        mapStyle="mapbox://styles/erika00g/cl1e7ojtv001f14mhb7bpu5q5"
        mapboxAccessToken={process.env.mapbox_key}
        style={{ width: "100%", height: "100%" }}
      >
      
      </Map>
    </section>
  );
}

export default MapBox;
