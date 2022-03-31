import Image from "next/image";

function SerchPoiList() {
  return (
    <div className="bg-transparent p-4 absolute top-3/4 w-full">
      <div className="bg-white rounded-3xl p-2 font-confortaa">
        <div className=" ">
          <h2 className="p-5 font-lato font-medium text-2xl">
            Create New List
          </h2>
        </div>
        <div className="">
          <form className="w-full max-w-sm m-auto ">
            <div className="">
              <div className="mb-2">
                <label>Title</label>
                <input
                  className=" border rounded border-dark-gray hover:border-main-blue active:border-main-blue bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="text"
                  placeholder="Title"
                  // aria-label="Full name"
                ></input>
              </div>
              <div className="mb-2">
                <label>Title</label>
                <input
                  className=" border rounded border-dark-gray hover:border-main-blue active:border-main-blue bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="text"
                  placeholder="Title"
                  // aria-label="Full name"
                ></input>
              </div>
            </div>

            <button
              type="button"
              className="w-1/4 px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-black hover:text-white bg-main-blue hover:bg-light-blue  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-light-blue"
            >
              Create
            </button>
          </form>
        </div>
        <div className="p-2">
          <div className="w-full mb-2 p-1 flex items-center border border-cream-yellow rounded-md">
            <div className="mr-2 ml-2 p-1">icon</div>
            <div className="w-full p-2">
              <h2 className="font-confortaa text-lg font-semibold">
                Title here
              </h2>
              <p className="font-lato">XX pins, Location</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SerchPoiList;
