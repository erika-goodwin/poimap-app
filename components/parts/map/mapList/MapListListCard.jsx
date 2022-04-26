import { useState, useEffect } from "react";
import MapListNestedCard from "./MapListNestedCard";
import axios from "axios";
import { useRouter } from "next/router";
import { useUser } from "@clerk/clerk-react";

function MapListListCard({
  item,
  setDataList,
  handleDeleteFromData,
  setClickedList,
}) {
  const [deleteListId, setDeleteListId] = useState("");
  const [deleteName, setDeleteName] = useState("");
  const [showingModal, setShowingModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const router = useRouter();

  const { isSignedIn, user } = useUser();
  let userCheck;
  if (isSignedIn) {
    userCheck = user.id == item?.createdUser && isSignedIn;
  } else {
    userCheck = false;
  }


  const deleteWholeHandler = async (e) => {
    e.preventDefault();

    const id = item._id;
    const deleteData = {
      id,
    };
    setClickedList({});

    await axios
      .post("/api/deletingWholeList", deleteData)
      .then((res) => {
        console.log("res.status", res.status);
      })
      .catch((error) => {
        setErrorMessage("Fail to delete");
        console.log("error", error);
        // alert("Failed to save");
      })
      .finally(() => {
        setShowingModal(false);
        handleDeleteFromData(id);
      });
  };

  useEffect(() => {
    const deleteHandler = async () => {
      const id = item._id;

      const indexOf = item.list.findIndex((item) => (item._id = deleteListId));
      const one = item.list.splice(indexOf, 1);
      const idOfList = one[0]._id;

        const deleteData = {
        id,
        idOfList,
        deleteName,
      };

      setDataList((prev) => {
        return prev.map((itemList) => {
          if (itemList._id === id) {
         
            const filteredList = itemList.list.filter((item) => {
              if (item.name === deleteName && item._id === idOfList) {
                return false;
              }
              return true;
              
            });
            console.log("filteredList", filteredList);
            return { ...itemList, list: filteredList };
          }
          console.log("return itemList", itemList);
          return itemList;
        });
      });

        await axios
          .post("/api/deletingOneOfList", deleteData)
          .then((res) => {
            console.log(res.status);
          })
          .catch((error) => {
            console.log(error);
            alert("Failed to save");
          });
    };

    if (deleteListId) {
      deleteHandler();
    }
  }, [deleteListId]);

  useEffect(() => {
    setTimeout(() => {
      setErrorMessage("");
    }, 5000);
  }, [errorMessage]);

  return (
    <>
      <div className="p-2 mb-2  ">
        {item?.list.map((item, index) => (
          <MapListNestedCard
            item={item}
            key={item._id}
            setDeleteListId={setDeleteListId}
            userCheck={userCheck}
            setDeleteName={setDeleteName}
          />
        ))}
      </div>
      <div className="p-2 mb-2 flex justify-center">
        {showingModal ? (
          <div className="bg-soft-gray rounded-md p-2">
            <h2 className="text-center">
              * Are you sure to delete the list {item.title}? *
            </h2>
            <div className=" mx-auto flex w-2/3 justify-around">
              <button
                type="button"
                onClick={deleteWholeHandler}
                className="w-1/3 mr-3 px-3 py-1.5 border border-transparent text-xs md:text-sm ld:text-base font-medium rounded-full shadow-sm text-black hover:text-white bg-rose-400 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-dark-gray"
              >
                Yes
              </button>
              <button
                type="button"
                onClick={() => setShowingModal(false)}
                className="w-1/3  px-3 py-1.5 border border-transparent text-xs md:text-sm ld:text-base font-medium rounded-full shadow-sm text-black hover:text-white  bg-soft-gray hover:bg-dark-gray focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-dark-gray"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          userCheck && (
            <div
              onClick={() => setShowingModal(!showingModal)}
              className="flex  cursor-pointer"
            >
              <p className="text-dark-gray hover:text-light-blue">
                Delete this list
              </p>
              {/* <TiDeleteOutline className="text-2xl text-dark-gray hover:text-light-blue mr-2  ml-2" /> */}
            </div>
          )
        )}
        {errorMessage && (
          <div className="flex  ">
            <p className="text-rose-400">{errorMessage}</p>
            {/* <TiDeleteOutline className="text-2xl text-dark-gray hover:text-light-blue mr-2  ml-2" /> */}
          </div>
        )}
      </div>
    </>
  );
}

export default MapListListCard;
