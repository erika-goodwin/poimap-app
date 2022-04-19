import { AiTwotoneCheckCircle } from "react-icons/ai";

function MapListCard({ item, setClickedList }) {
  return (
    <div className="p-2 cursor-pointer ">
      <div
        onClick={() => setClickedList(item)}
        className=" flex border border-cream-yellow rounded-md hover:shadow-md transition duration-200 ease-out"
      >
        <div className="w-full mb-2 p-1 flex items-center ">
          <div className="mr-2 ml-2 p-1">
            <AiTwotoneCheckCircle className={`text-${item.color}-400`} />
          </div>
          <div className="w-full p-2">
            <h2 className="font-confortaa text-lg font-semibold">
              {item.title}
            </h2>
            <p className="font-lato">
              {item.list.length === 0 ? 0 : item.list.length} pins, Location by{" "}
              {item.userName}
            </p>
          </div>
        </div>
        {item.list.length ? (
          <button className="w-10 text-2xl pr-3">&#x2227;</button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default MapListCard;
