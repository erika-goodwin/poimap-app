import { useState, useRef, useEffect } from "react";
import MapListNestedCard from "./MapListNestedCard";

function MapListListCard({ item }) {
  // console.log("MapListCardNested // item ", item);
  const [showingList, setShowingList] = useState(false);
  return (
    <>
      {/* cursor-pointer */}
      <div className="p-2 mb-2  ">

        {item?.list.map((item) => (
          <MapListNestedCard item={item} key={item.name} />
        ))}
      </div>
    </>
  );
}

export default MapListListCard;
