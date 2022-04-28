import axios from "axios";
import { useState } from "react";
import { BsFillCaretDownFill } from "react-icons/bs";
import MapCreateDropdown from "./MapCreateDropdown";
import { useUser } from "@clerk/clerk-react";
import { AiOutlineCloseSquare } from "react-icons/ai";

function MapCreate({ dataList, setDataList, setShowCreateList, setShowList }) {
  const [listName, setListName] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedCss, setSelectedCss] = useState("");
  const [isShowingDropDown, setIsShowingDropDown] = useState(false);
  const [error, setError] = useState("");

  const { user } = useUser();

  const updateDataState = (data) => {
    setDataList((pre) => {
      return [...pre, data];
    });
  };

  const handleSubmitTitle = async (e) => {
    e.preventDefault();

    if (selectedColor !== "" && setListName !== "") {
      const postData = {
        title: listName,
        list: [],
        color: selectedColor,
        createdUser: user.id,
        userName: user.username,
      };

      await axios
        .post("/api/addingOneData", postData)
        .then((res) => {
          console.log("res.status", res.status);
        })
        .catch((error) => {
          console.log("error", error);
          alert("Failed to save");
        })
        .finally(() => {
          setListName("");
          setSelectedColor("");
        });

      updateDataState(postData);
      setShowCreateList(false);
      setShowList(true);
    } else {
      if (selectedColor == "" && listName == "") {
        selectedColor == "" && setError("Input a title and select a color");
      } else if (selectedColor == "" && listName !== "") {
        selectedColor == "" && setError("Select a color");
      } else if (selectedColor !== "" && listName == "") {
        listName == "" && setListName("Input a title ");
      }
    }
  };

  const colorArray = [
    { id: 1, color: "red", css: "text-red-400" },
    { id: 2, color: "orange", css: "text-orange-400" },
    { id: 3, color: "amber", css: "text-amber-400" },
    { id: 4, color: "yellow", css: "text-yellow-400" },
    { id: 5, color: "lime", css: "text-lime-400" },
    { id: 6, color: "green", css: "text-green-400" },
    { id: 7, color: "emerald", css: "text-emerald-400" },
    { id: 8, color: "teal", css: "text-teal-400" },
    { id: 9, color: "sky", css: "text-sky-400" },
    { id: 10, color: "blue", css: "text-blue-400" },
    { id: 11, color: "indigo", css: "text-indigo-400" },
    { id: 12, color: "violet", css: "text-violet-400" },
    { id: 13, color: "fuchsia", css: "text-fuchsia-400" },
    { id: 14, color: "pink", css: "text-pink-400" },
    { id: 15, color: "rose", css: "text-rose-400" },
  ];

  return (
    <div className="bg-transparent p-4 absolute bottom-3 w-full">
      <div className="bg-white rounded-3xl p-2 font-confortaa md:w-2/3 mx-auto lg:w-[43rem] lg:mr-0">
        <div className=" flex justify-between items-center ">
          <h2 className="p-5 font-lato font-medium text-2xl">
            Create New List
          </h2>
          <AiOutlineCloseSquare
            onClick={() => setShowCreateList(false)}
            className="text-2xl text-dark-gray hover:text-black mr-3"
          />
        </div>
        <div className="">
          <form
            onSubmit={handleSubmitTitle}
            className="w-full max-w-sm m-auto "
          >
            <div className="mb-5">
              <div className="mb-2">
                <label>Title of your list</label>
                <input
                  className=" border rounded border-dark-gray hover:border-main-blue active:border-main-blue bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="text"
                  placeholder="Title"
                  value={listName}
                  onChange={(e) => setListName(e.target.value)}
                  // aria-label="Full name"
                ></input>
              </div>
            </div>
            <div className="mb-5">
              <div className="mb-2">
                <label>Choose color of your list</label>

                <div className="flex relative">
                  <button
                    type="button"
                    onClick={() => {
                      setIsShowingDropDown(!isShowingDropDown);
                    }}
                    className="inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                  >
                    {selectedColor == "" ? "Options" : selectedColor}

                    <BsFillCaretDownFill className={`text-xl ${selectedCss}`} />
                  </button>
                  {isShowingDropDown && (
                    <div className=" absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ">
                      <ul className="h-[7rem] overflow-scroll ">
                        {colorArray.map((color) => (
                          <MapCreateDropdown
                            key={color.id}
                            color={color}
                            setIsShowingDropDown={setIsShowingDropDown}
                            setSelectedColor={setSelectedColor}
                            // setSelectedTitleToAdd={setSelectedTitleToAdd}
                            setError={setError}
                            setSelectedCss={setSelectedCss}
                          />
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="">
              {error && <p className="font-lato text-red-500 pb-3">{error}</p>}
            </div>
            <div className="pb-5">
              <button
                type="submit"
                className="w-1/4 px-3 py-1.5 border border-transparent text-xs md:text-sm ld:text-base font-medium rounded-full shadow-sm text-black hover:text-white bg-main-blue hover:bg-light-blue  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-light-blue"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MapCreate;
