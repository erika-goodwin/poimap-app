import { useState, useCallback, useRef, useEffect } from "react";
import { Marker, Popup } from "react-map-gl";
import { FaMapMarkerAlt } from "react-icons/fa";

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
        <FaMapMarkerAlt
          className={`text-3xl cursor-pointer hover:animate-bounce  text-${pin.color}-400`}
        />
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
