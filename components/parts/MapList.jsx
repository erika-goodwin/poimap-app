import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import MapListCard from "./MapListCard";
import { useOnClickOutside } from "../../tool/useOnClickOutside";

function MapList({ dataList }) {
  const [showingAllList, setShowingAllList] = useState(false);
  // console.log("MapList // data ", dataList);

  const node = useRef();
  useOnClickOutside(node, () => setShowingAllList(false));

  useEffect(() => {
    // console.log("showingAllList: ", showingAllList);
  });

  return (
    <div className="bg-transparent p-4 absolute bottom-3 w-full">
      <div className="bg-white rounded-3xl p-2 font-confortaa">
        <div>
          <h2 className="p-5 font-lato font-medium text-2xl">PIO List</h2>
        </div>

        {showingAllList ? (
          dataList?.map((item) => {
            return <MapListCard key={item._id} item={item} />;
          })
        ) : (
          <>
            <MapListCard item={dataList[0]} />
          </>
        )}

        <button
          onClick={() => {
            setShowingAllList(!showingAllList);
          }}
          className="w-full text-center my-2"
        >
          {showingAllList ? "Show less" : " Show more"}
        </button>
      </div>
    </div>
  );
}

export default MapList;
