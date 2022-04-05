import React from "react";
import Map, { Popup } from "react-map-gl";

const CustomPopup = ({ data, setSelectedLocation }) => {
  return (
    data && (<Popup
      onClose={() => setSelectedLocation(null)}
      closeOnClick={false}
      longitude={data.long}
      latitude={data.lat}
    >
      {data.name}
    </Popup>)
  );
};

export default CustomPopup;
