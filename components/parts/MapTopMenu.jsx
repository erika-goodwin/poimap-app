import { useRouter } from "next/router";

function TopMenu({ setShowCreate, setShowList }) {
  const router = useRouter();
  const currentPath = router.asPath;

  const handleCreate = () => {
    setShowCreate(true);
    setShowList(false);
  };
  const handleMap = () => {
    setShowCreate(false);
    setShowList(true);
  };

  return (
    <div className="bg-transparent absolute top-20 w-full ">
      <div className=" pr-4 pl-4">
        <div className="bg-white rounded-md p-2  flex justify-evenly font-confortaa">
          <button
            onClick={() => handleCreate()}
            type="button"
            className="w-1/4 px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-black hover:text-white bg-main-blue hover:bg-light-blue  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-light-blue"
          >
            Create
          </button>
          <button
            onClick={() => handleMap()}
            type="button"
            className="w-1/4 px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-black hover:text-white  bg-soft-gray hover:bg-dark-gray focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-dark-gray"
          >
            Map
          </button>
          <button
            type="button"
            className="w-1/4  px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-black hover:text-white  bg-soft-gray hover:bg-dark-gray focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-dark-gray"
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopMenu;
