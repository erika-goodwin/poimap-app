import { useState, useMemo, Fragment } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import MapTopMenu from "./MapTopMenu";
import getCenter from "geolib/es/getCenter";
import getCenterOfBounds from "geolib/es/getCenterOfBounds";

import CustomPopup from "./CustomPopup";

function MapBox({ dataList }) {
  const [selectedLocation, setSelectedLocation] = useState(null);

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

  const closePopup = () => {
    setSelectedLocation(null)
  }

  const markers = useMemo(
    () =>
      pinList.map((result) => (
        <Fragment key={result.name}>
          <Marker
            // key={result.name}
            longitude={result.long}
            latitude={result.lat}
            // offsetLeft={-20}
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

        <CustomPopup data={selectedLocation} setSelectedLocation={setSelectedLocation} />
      </Map>
    </section>
  );
}

export default MapBox;
