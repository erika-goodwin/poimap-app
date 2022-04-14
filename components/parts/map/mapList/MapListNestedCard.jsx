import { useState, useRef, useEffect } from "react";
import { CgEditMarkup } from "react-icons/cg";
import { TiDeleteOutline } from "react-icons/ti";

function MapListNestedCard({ item, setDeleteName, userCheck }) {
  const [showingList, setShowingList] = useState(false);

  const handleDelete = (e) => {
    setDeleteName(item.name);
  };

  return (
    <>
      <div className="">
        <div className="w-auto mt-2 ml-10 p-1 flex items-center border border-cream-yellow rounded-md cursor-pointer">
          <div className="w-full p-2 pl-5">
            <h2
              onClick={() => setShowingList(true)}
              className="font-confortaa text-lg font-semibold"
            >
              {item.name}
            </h2>
            <p className="font-lato"> Adress: {item.address}</p>
          </div>

          <div className="flex items-center">
            {userCheck && (
              <>
                {/* <CgEditMarkup className="text-xl text-off-pink mr-2 hover:text-pure-pink" /> */}
                <TiDeleteOutline
                  onClick={handleDelete}
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
