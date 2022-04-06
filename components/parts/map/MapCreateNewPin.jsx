

function MapCreateNewPin() {
  return (
    <>
      <div className="">
        <form onSubmit={handleSubmitTitle} className="w-full max-w-sm m-auto ">
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
    </>
  );
}

export default MapCreateNewPin;
