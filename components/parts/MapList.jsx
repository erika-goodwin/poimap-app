import Image from "next/image";
import MapListCard from "./MapListCard";

function MapList({ dataList }) {
  console.log("MapList // data ", dataList);

  const exArray = ["one", "two", "three", "four", "five"];

  return (
    <div className="bg-transparent p-4 absolute top-3/4 w-full">
      <div className="bg-white rounded-3xl p-2 font-confortaa">
        <div>
          <h2 className="p-5 font-lato font-medium text-2xl">PIO List</h2>
        </div>
        {dataList?.map((item) => {
          <MapListCard key={item._id} item={item} />;
        })}

        {exArray?.map((item) => {
          <h1>{item}</h1>;
        })}
      </div>
    </div>
  );
}

export default MapList;
