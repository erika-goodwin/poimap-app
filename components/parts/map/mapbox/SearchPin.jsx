import React from "react";
import axios from "axios";
import Link from "next/link";
import { useState, useCallback, useRef, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { BsFillCaretDownFill } from "react-icons/bs";
import SearchDropdown from "./SearchDropdown";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  SignOutButton,
} from "@clerk/nextjs";

function SearchPin({ searchedResult, dataList, listFunc }) {
  const [showPopup, setShowPopup] = useState(true);
  const [isShowingDropDown, setIsShowingDropDown] = useState(false);
  const [selectedTitleToAdd, setSelectedTitleToAdd] = useState("");
  const [submitButton, setSubmitButton] = useState("Add");
  // const [data, setData] = useState({ dataList });
  const [error, setError] = useState("");

  const handleSubmitlist = async (e) => {
    e.preventDefault;

    if (selectedTitleToAdd !== "") {
      const postData = {
        title: selectedTitleToAdd,
        data: {
          icon: "icon here",
          name: searchedResult.name,
          address: searchedResult.address,
          lat: searchedResult.coordinates.latitude,
          long: searchedResult.coordinates.longitude,
        },
      };


      await axios
        .post("/api/updatingOneData", postData)
        .then((res) => {
          console.log(res.status);
          alert("Success");
        })
        .catch((error) => {
          console.log(error);
          alert("Failed to save");
        })
        .finally(() => {
          setSelectedTitleToAdd("");
          setSubmitButton("Added");
          // setCreateMode(false);
          console.log("SelectedTitleToAdd empty done");
          window.location.reload(false);
          // setData({..., })
          // listFunc(data);
        });
    } else {
      setError("Select a list to add");
    }
  };

  // useState(() => {
  //   console.log("data of searchpin", data);
  // }, [data]);
  return (
    <>
      <Marker
        longitude={searchedResult.coordinates.longitude}
        latitude={searchedResult.coordinates.latitude}
        offsetTop={-10}
        anchor="bottom"
        onClick={(e) => {
          e.preventDefault;
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
          longitude={searchedResult.coordinates.longitude}
          latitude={searchedResult.coordinates.latitude}
          closeOnClick={false}
          offset={20}
          anchor="bottom"
          onClose={() => setShowPopup(false)}
        >
          <div className="p-3">
            <div className="pb-3">
              <h2 className="font-confortaa text-lg font-semibold">
                {searchedResult.name}
              </h2>
              <p className="font-lato">{searchedResult.address}</p>
            </div>

            <SignedIn>
              <p className="pr-2">List to add</p>
              <div className="flex justify-between">
                <div className="flex">
                  <button
                    onClick={() => {
                      setIsShowingDropDown(!isShowingDropDown);
                    }}
                    className="inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                  >
                    {selectedTitleToAdd == "" ? "Options" : selectedTitleToAdd}
                    <BsFillCaretDownFill className="text-xl" />
                  </button>
                </div>

                <button
                  onClick={handleSubmitlist}
                  type="button"
                  className="w-1/4 px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-black hover:text-white bg-main-blue hover:bg-light-blue  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-light-blue"
                >
                  {submitButton}
                </button>
              </div>
              <div className="item-right">
                {error && <p className="font-lato text-red-500">{error}</p>}
              </div>
              {isShowingDropDown && (
                <div className=" absolute left-5 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <ul>
                    {dataList.map((list) => (
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
            </SignedIn>
            <SignedOut>
              <div className="flex justify-end items-center mt-2">
                <p className="pr-3 font-lato">Create your POI list</p>
                <button
                  type="button"
                  className="w-1/4 px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-black hover:text-white  bg-soft-gray hover:bg-dark-gray focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-dark-gray"
                >
                  <Link href="/sign-in">Sign In</Link>
                </button>
              </div>
            </SignedOut>
          </div>
        </Popup>
      )}
    </>
  );
}

export default SearchPin;
