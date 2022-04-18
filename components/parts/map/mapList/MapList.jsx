import { useState, useRef, useEffect } from "react";

import { useOnClickOutside } from "../../../../tool/useOnClickOutside";
import MapListCard from "./MapListCard";
import MapListListCard from "./MapListListCard";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

function MapList({ dataList, setDataList, setShowList }) {
  const [showingAllList, setShowingAllList] = useState(false);
  const [clickedList, setClickedList] = useState({});

  const node = useRef();
  useOnClickOutside(node, () => setShowingAllList(false));

  const handleDeleteFromData = (deleteId) => {
    const newData = dataList.filter((data) => data._id !== deleteId);
    setDataList(newData);
  };

  useEffect(() => {
    if (Object.keys(clickedList).length > 0) {
      const selectedList = dataList.find(
        (list) => list._id === clickedList._id
      );
      setClickedList(selectedList);
    }
  }, [dataList, clickedList]);
  
  useEffect(() => {
    console.log("clickedList", clickedList);
  }, [clickedList]);

  return (
    <div className="bg-transparent p-4 absolute bottom-3 w-full md:w-2/3 mx-auto lg:w-[43rem] lg:right-3 ">
      <div className="bg-white rounded-3xl p-2 font-confortaa z-30">
        <p
          onClick={() => setClickedList({})}
          className="pt-1 pl-1 cursor-pointer hover:text-dark-gray"
        >
          {JSON.stringify(clickedList) == "{}" ? null : "< Back to list"}
        </p>
        <div className="flex justify-between items-center p-3 ">
          <div className="flex items-center">
            {JSON.stringify(clickedList) === "{}" ? null : (
              <AiFillStar
                className={`text-2xl text-${clickedList?.color}-400`}
              />
            )}

            <h2 className=" font-lato font-medium text-2xl ml-2">
              {JSON.stringify(clickedList) === "{}"
                ? "PIO List"
                : clickedList?.title}
            </h2>
          </div>
          <AiOutlineCloseSquare
            onClick={() => setShowList(false)}
            className="text-2xl text-dark-gray hover:text-black"
          />
        </div>

        <div className="overflow-y-scroll max-h-96">
          {JSON.stringify(clickedList) === "{}" ? (
            showingAllList ? (
              dataList?.map((item) => {
                return (
                  <MapListCard
                    key={item._id}
                    item={item}
                    setClickedList={setClickedList}
                  />
                );
              })
            ) : (
              <>
                {dataList && (
                  <MapListCard
                    item={dataList[0]}
                    setClickedList={setClickedList}
                  />
                )}
              </>
              // <>

              //   <MapListCard
              //     item={dataList[0]}
              //     setClickedList={setClickedList}
              //   />
              // </>
            )
          ) : (
            <MapListListCard
              item={clickedList}
              setDataList={setDataList}
              handleDeleteFromData={handleDeleteFromData}
              setClickedList={setClickedList}
            />
          )}

          {JSON.stringify(clickedList) === "{}" ? (
            <button
              onClick={() => {
                setShowingAllList(!showingAllList);
              }}
              className="w-full text-center my-2"
            >
              {showingAllList ? "Show less" : " Show more"}
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default MapList;
