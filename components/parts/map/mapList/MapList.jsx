import { useState, useRef, useEffect } from "react";

import { useOnClickOutside } from "../../../../tool/useOnClickOutside";
import MapListCard from "./MapListCard";
import MapListListCard from "./MapListListCard";
import {AiOutlineCloseSquare} from 'react-icons/ai'

function MapList({ dataList, setDataList }) {
  const [showingAllList, setShowingAllList] = useState(false);
  const [clickedList, setClickedList] = useState({});
  // const checkEmptyclickedListect = clickedListect.entries(clickedList);

  const node = useRef();
  useOnClickOutside(node, () => setShowingAllList(false));

  useEffect(() => {
    if(Object.keys(clickedList).length > 0){
      const selectedList = dataList.find(list => list._id === clickedList._id)
      setClickedList(selectedList)
    }
  }, [dataList, clickedList])

  return (
    <div className="bg-transparent p-4 absolute bottom-3 w-full z-30 ">
   
      <div className="bg-white rounded-3xl p-2 font-confortaa md:w-2/3 mx-auto lg:w-[43rem] lg:mr-0">
        <p
          onClick={() => setClickedList({})}
          className="pt-1 pl-1 cursor-pointer hover:text-dark-gray"
        >
          {JSON.stringify(clickedList) == "{}" ? null : "< Back to list"}
        </p>
        <div className="flex justify-between items-center p-3 ">
          <h2 className=" font-lato font-medium text-2xl">
            {JSON.stringify(clickedList) === "{}"
              ? "PIO List"
              : clickedList?.title}
          </h2>
          <AiOutlineCloseSquare onClick={()=>setShowList(false)} className="text-2xl text-dark-gray hover:text-black" />
          {/* <p className="  font-lato ">
            {JSON.stringify(clickedList) === "{}"
              ? null
              : `${
                  clickedList?.list.length ? clickedList.list.length : 0
                } pins, Location`}
          </p> */}
          {/* {JSON.stringify(clickedList) === "{}" && (
            <p className="font-lato">
              {clickedList?.list?.length ? clickedList.list.length : 0} pins,
              Location
            </p>
          )} */}
        </div>
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
              {dataList && <MapListCard item={dataList[0]} setClickedList={setClickedList} />}
            </>
          )
        ) : (
          <MapListListCard item={clickedList} setDataList={setDataList} />
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
  );
}

export default MapList;
