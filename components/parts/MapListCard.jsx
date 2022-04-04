import { useState, useRef, useEffect } from "react";

import MapListCardNested from "./MapListCardNested";

function MapListCard({ item }) {
  // console.log("MapListCard // item ", item);
  const [showingNestedList, setShowingNestedList] = useState(false);
  const [pickedNestedList, setPickedNestedList] = useState("");
  return (
    <div className="p-2 cursor-pointer ">
      <div
        onClick={() => setShowingNestedList(!showingNestedList)}
        className=" flex border border-cream-yellow rounded-md hover:shadow-md transition duration-200 ease-out"
      >
        <div className="w-full mb-2 p-1 flex items-center ">
          <div className="mr-2 ml-2 p-1">icon</div>
          <div className="w-full p-2">
            <h2 className="font-confortaa text-lg font-semibold">
              {item.title}
            </h2>
            <p className="font-lato">{item.list.length} pins, Location</p>
          </div>
        </div>
        {showingNestedList ? (
          <button className="w-10 text-2xl pr-3">&#x2227;</button>
        ) : (
          <button className="w-10 text-2xl pr-3">&#x2228;</button>
        )}
      </div>
      {showingNestedList &&
        item.list.map((item) => (
          <MapListCardNested item={item} key={item.name} />
        ))}
    </div>
  );
}

export default MapListCard;
