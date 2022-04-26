import React, { useEffect, useState } from "react";
import axios from "axios";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { BsFillCaretDownFill } from "react-icons/bs";
import SearchDropdown from "./SearchDropdown";
import Link from "next/link";
import { Marker, Popup } from "react-map-gl";
import { useUser } from "@clerk/clerk-react";

function ClickedPin({
  clickedPin,
  dataList,
  updateDataState,
  showPopup,
  setShowPopup,
  setClickedPin,
  // setIsTyping,
}) {
  const [isShowingDropDown, setIsShowingDropDown] = useState(false);
  const [selectedTitleToAdd, setSelectedTitleToAdd] = useState("");
  const [placeName, setPlaceName] = useState("");
  const [placeAddress, setPlaceAddress] = useState("");
  const [submitButton, setSubmitButton] = useState("Add");
  const [error, setError] = useState("");
  // const [showingAddModal, setShowingAddModal] = useState(false);

  const { isSignedIn, user } = useUser();
  let newUserList;
  if (isSignedIn) {
    newUserList = dataList.filter((item) => item.createdUser === user.id);
  } else {
    newUserList = dataList;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (selectedTitleToAdd !== "") {
      const postData = {
        title: selectedTitleToAdd,
        data: {
          name: placeName,
          address: placeAddress,
          lat: clickedPin.latitude,
          long: clickedPin.longitude,
        },
      };
      let idOfList;
      await axios
        .post("/api/updatingOneData", postData)
        .then((res) => {
          console.log("response status", res.status);
          idOfList = res.data._id;
        })
        .catch((error) => {
          console.log(error);
          alert("Failed to save");
        })
        .finally(() => {
          setSelectedTitleToAdd("");
          setSubmitButton("Added");
          setPlaceName("");
          setPlaceAddress("");
        });

      updateDataState({
        ...postData,
        data: { ...postData.data, _id: idOfList },
      });
    } else {
      setError("Select a list to add");
    }
  };

  useEffect(() => {
    if (submitButton == "added") {
      setTimeout(() => {
        setSubmitButton("add");
      }, 5000);
    }
    // setIsTyping(false);
  }, [submitButton]);

  return (
    <>
      <Marker
        longitude={clickedPin.longitude}
        latitude={clickedPin.latitude}
        offsetTop={-10}
        anchor="bottom"
        onClick={(e) => {
          e.preventDefault();

          setShowPopup(true);
        }}
      >
        <p
          role="img"
          className="text-2xl cursor-pointer "
          aria-label="push-pin"
        >
          📌
        </p>
      </Marker>
      {showPopup && (
        <Popup
          longitude={clickedPin.longitude}
          latitude={clickedPin.latitude}
          closeOnClick={false}
          offset={20}
          anchor="bottom"
          onClose={() => {
            setShowPopup(false);
            // setShowingAddModal(false);
            setClickedPin({});
          }}
        >
          <div className="p-3 z-40 w-80">
            <div className="pb-3 ">
              <h3 className="font-confortaa text-lg font-semibold">
                Add to your list
              </h3>
            </div>
            <SignedIn>
              <form onSubmit={handleSubmit} className="w-full max-w-sm m-auto ">
                <div className="mb-2">
                  <label>Name of the place</label>
                  <input
                    className=" border rounded border-dark-gray hover:border-main-blue active:border-main-blue bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text"
                    placeholder="Title"
                    value={placeName}
                    onChange={(e) => setPlaceName(e.target.value)}
                    // aria-label="Full name"
                  ></input>
                </div>
                <div className="mb-2">
                  <label>Address</label>
                  <input
                    className=" border rounded border-dark-gray hover:border-main-blue active:border-main-blue bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text"
                    placeholder="Adress"
                    value={placeAddress}
                    onChange={(e) => setPlaceAddress(e.target.value)}
                    // aria-label="Full name"
                  ></input>
                </div>
                <p className="pr-2">List to add</p>
                <div className="flex justify-between">
                  <div className="flex">
                    <button
                      type="button"
                      onClick={() => {
                        setIsShowingDropDown(!isShowingDropDown);
                      }}
                      className="inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                    >
                      {selectedTitleToAdd == ""
                        ? "Options"
                        : selectedTitleToAdd}
                      <BsFillCaretDownFill className="text-xl" />
                    </button>
                  </div>

                  <button
                    type="submit"
                    className="w-1/4 px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-black hover:text-white bg-main-blue hover:bg-light-blue  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-light-blue"
                  >
                    {submitButton}
                  </button>
                </div>
                <div className="item-right">
                  {error && <p className="font-lato text-red-500">{error}</p>}
                </div>
                {isShowingDropDown && (
                  <div className=" absolute left-5 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none max-h-72 overflow-y-scroll">
                    <ul>
                      {newUserList.map((list) => (
                        <SearchDropdown
                          key={list._id}
                          list={list}
                          setIsShowingDropDown={setIsShowingDropDown}
                          setSelectedTitleToAdd={setSelectedTitleToAdd}
                          setError={setError}
                        />
                      ))}
                    </ul>
                  </div>
                )}
              </form>
            </SignedIn>
            <SignedOut>
              <div className="flex justify-end items-center mt-2">
                <p className="pr-3 font-lato">Create your POI list</p>
                <Link href="/sign-in" passHref>
                  <button
                    type="button"
                    className="w-1/4 px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-black hover:text-white  bg-soft-gray hover:bg-dark-gray focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-dark-gray"
                  >
                    Sign In
                  </button>
                </Link>
              </div>
            </SignedOut>
          </div>
        </Popup>
      )}
    </>
  );
}

export default ClickedPin;
