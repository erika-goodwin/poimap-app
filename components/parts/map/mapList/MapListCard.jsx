import { useState, useRef } from "react";

import MapListCardNested from "./MapListListCard";

function MapListCard({ item, setClickedList }) {
  // console.log("MapListCard // item ", item);
  const [showingNestedList, setShowingNestedList] = useState(false);
  const [pickedNestedList, setPickedNestedList] = useState("");

  return (
    <div className="p-2 cursor-pointer ">
      <div
        onClick={() => setClickedList(item)}
        className=" flex border border-cream-yellow rounded-md hover:shadow-md transition duration-200 ease-out"
      >
        <div className="w-full mb-2 p-1 flex items-center ">
          <div className="mr-2 ml-2 p-1">icon</div>
          <div className="w-full p-2">
            <h2 className="font-confortaa text-lg font-semibold">
              {item.title}
            </h2>
            <p className="font-lato">
              {item.list.length === 0 ? 0 : item.list.length} pins, Location
            </p>
          </div>
        </div>
        {item.list.length ? (
          showingNestedList ? (
            <button className="w-10 text-2xl pr-3">&#x2227;</button>
          ) : (
            <button className="w-10 text-2xl pr-3">&#x2228;</button>
          )
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default MapListCard;
