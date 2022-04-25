import { useState, useCallback, useRef, useEffect } from "react";
import { Marker, Popup } from "react-map-gl";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiTwotoneCheckCircle } from "react-icons/ai";

function Pin({ pin, selectedPin, setSelectedPin, clickedPin }) {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (JSON.stringify(clickedPin) !== "{}") {
      setShowPopup(false);
    }
  }, [clickedPin]);

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
          <div className="p-2 z-40">
            <div className="">
              <h3 className="font-confortaa text-md font-semibold pb-2">
                {pin.name}
              </h3>
              <div className="flex items-center">
                <AiTwotoneCheckCircle
                  className={`text-${pin.color}-400 mr-3`}
                />
                <p className="font-confortaa text-xs"> {pin.title}</p>
              </div>
            </div>
          </div>
        </Popup>
      )}
    </>
  );
}

export default Pin;
