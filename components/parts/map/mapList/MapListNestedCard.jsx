import { useContext } from "react";
import { TiDeleteOutline } from "react-icons/ti";
// import { MapAppContext } from "../../../../context/context";

function MapListNestedCard({
  item,
  // setDeleteListId,
  userCheck,
  // setDeleteName,
  handleDelete,
  collectionId
}) {


  // const [showingList, setShowingList] = useState(false);

  // const [context, setContext] = useContext(MapAppContext)

  //WORKING ON HERE NOW

  // console.log("context", context);
  // console.log("item", item);

  // const handleClick = (e) => {
  //   const newFocusPoint = {
  //     longitude: item.long,
  //     latitude: item.lat,
  //   };

  //   console.log("clicked one list pin", newFocusPoint);
  // };


  return (
    <>
      <div className="">
        <div
          // onClick={handleClick}
          className="w-auto mt-2 ml-10 p-1 flex items-center border border-cream-yellow rounded-md cursor-pointer"
        >
          <div className="w-full p-2 pl-5">
            <h2
              // onClick={() => setShowingList(true)}
              className="font-confortaa text-lg font-semibold"
            >
              {item.name}
            </h2>
            <p className="font-lato"> Adress: {item.address}</p>
            <p className="font-lato"> id: {item._id}</p>
          </div>

          <div className="flex items-center">
            {userCheck && (
              <>
                {/* <CgEditMarkup className="text-xl text-off-pink mr-2 hover:text-pure-pink" /> */}
                <TiDeleteOutline
                  // onClick={handleDelete}
                  onClick={()=>handleDelete(item._id, collectionId)}
                  className="text-2xl text-dark-gray mr-2 hover:text-light-blue"
                />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default MapListNestedCard;
