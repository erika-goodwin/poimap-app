
import { useState, useRef } from "react";

import { useOnClickOutside } from "../../../../tool/useOnClickOutside";
import MapListCard from "./MapListCard";

function MapList({ dataList }) {
  const [showingAllList, setShowingAllList] = useState(false);

  const node = useRef();
  useOnClickOutside(node, () => setShowingAllList(false));

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
