import axios from "axios";
import { useState } from "react";


function MapCreate() {
  const [listName, setListName] = useState("");

  const handleSubmitTitle = async (e) => {
    e.preventDefault;

    const postData = {
      title: listName,
      list: [],
    };

    await axios
      .post(
        "/api/addingOneData",
        postData
        // {
        //   method: "POST",
        //   body: postData,
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        // }
      )
      .then((res) => {
        console.log(res.status);
        alert("Success");
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to save");
      })
      .finally(() => {
        setListName("");
        // setCreateMode(false);
        console.log("setListName empty done");
      });
  };

  return (
    <div className="bg-transparent p-4 absolute bottom-3 w-full">
      <div className="bg-white rounded-3xl p-2 font-confortaa">
        <div className=" ">
          <h2 className="p-5 font-lato font-medium text-2xl">
           
            Create New List
          </h2>
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
                  vdalue={listName}
                  onChange={(e) => setListName(e.target.value)}
                  // aria-label="Full name"
                ></input>
              </div>
            </div>

            <div className="pb-5">
              <button
                type="submit"
                className="w-1/4 px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-black hover:text-white bg-main-blue hover:bg-light-blue  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-light-blue"
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
