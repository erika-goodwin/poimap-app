import React, { useRef, useEffect, useState } from "react";

function MyMapComponent({ center, zoom }) {
  //   const ref = useRef();

  //   useEffect(() => {
  //     new window.google.maps.Map(ref.current, {
  //       center,
  //       zoom,
  //     });
  //   });

//   const ref = useRef(null);
//   const [map, setMap] = useState();

//   React.useEffect(() => {
//     if (ref.current && !map) {
//       setMap(new window.google.maps.Map(ref.current, {}));
//     }
//   }, [ref, map]);

  return <div ref={ref} id="map" />;
}

export default MyMapComponent;
