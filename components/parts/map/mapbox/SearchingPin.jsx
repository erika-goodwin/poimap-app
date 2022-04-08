import { useState, useCallback, useRef, useEffect } from "react";
import { Marker, Popup } from "react-map-gl";

function SearchingPin({ data }) {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <Marker
        longitude={data.longitude}
        latitude={data.latitude}
        offsetTop={-10}
        onClick={(e) => {
          e.preventDefault;
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

      {showPopup && (
        <Popup
          longitude={data.longitude}
          closeOnClick={false}
          latitude={data.latitude}
          offset={20}
          anchor="bottom"
          onClose={() => setShowPopup(false)}
        >
          {data.name}
        </Popup>
      )}
    </>
  );
}

export default SearchingPin;
