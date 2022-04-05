import { useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import getCenterOfBounds from "geolib/es/getCenterOfBounds";

function Pin({ pin, selectedPin, setSelectedPin }) {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <Marker
        longitude={pin.long}
        latitude={pin.lat}
        offsetTop={-10}
        onClick={() => {
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

  return (
    <div className="w-full h-screen z-0 ">
      <Map
        {...viewState}
        mapStyle="mapbox://styles/erika00g/cl1e7ojtv001f14mhb7bpu5q5"
        mapboxAccessToken={process.env.mapbox_key}
        style={{ width: "100%", height: "100%" }}
        onMove={(evt) => setViewState(evt.viewState)}
      >
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
