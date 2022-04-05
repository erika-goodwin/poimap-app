import { useState, useMemo, Fragment, useEffect } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import MapTopMenu from "./MapTopMenu";
import getCenter from "geolib/es/getCenter";
import getCenterOfBounds from "geolib/es/getCenterOfBounds";

function MapBox({ dataList }) {
  const [selectedLocation, setSelectedLocation] = useState({});
  console.log("selectedLocation", selectedLocation);
  useEffect(() => console.log(selectedLocation), [selectedLocation]);

  const coordinates = [];
  const pinList = [];
  const list = dataList.map((result) => {
    result.list.map((result) => {
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

  const markers = useMemo(
    () =>
      pinList.map((result) => (
        <Fragment key={result.name}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetTop={-10}
          >
            <p
              role="img"
              onClick={() => {
                setSelectedLocation(result);
              }}
              className="text-2xl cursor-pointer animate-bounce"
              aria-label="push-pin"
            >
              📍
            </p>
          </Marker>

          {selectedLocation.name === result.name && (
            <Popup
              // onClose={() => setSelectedLocation({})}
              longitude={result.long}
              latitude={result.lat}
            >
              {result.name}
            </Popup>
          )}
        </Fragment>
      )),
    [pinList]
  );

  return (
    <section className="w-full h-screen z-0 ">
      <Map
        {...viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        mapStyle="mapbox://styles/erika00g/cl1e7ojtv001f14mhb7bpu5q5"
        mapboxAccessToken={process.env.mapbox_key}
        style={{ width: "100%", height: "100%" }}
      >
        {pinList.map((result) => (
          <div key={result.name} className="?">
            {markers}
          </div>
        ))}
       
      </Map>
    </section>
  );
}

export default MapBox;
