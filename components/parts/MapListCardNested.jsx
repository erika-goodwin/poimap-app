import { useState, useRef, useEffect } from "react";

function MapListCardNested({ item }) {
  // console.log("MapListCardNested // item ", item);
  const [showingList, setShowingList] = useState(false);
  return (
    <>
      <div className="">
        <div className="w-auto mt-2 ml-10 p-1 items-center border border-cream-yellow rounded-md">
          <div className="w-full p-2 pl-5">
            <h2
              onClick={() => setShowingList(true)}
              className="font-confortaa text-lg font-semibold"
            >
              {item.name}
            </h2>
            <p className="font-lato"> Adress: {item.address}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MapListCardNested;
