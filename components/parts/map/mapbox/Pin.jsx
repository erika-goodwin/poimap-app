import { useState, useCallback, useRef, useEffect } from "react";
import { Marker, Popup } from "react-map-gl";

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

export default Pin;
