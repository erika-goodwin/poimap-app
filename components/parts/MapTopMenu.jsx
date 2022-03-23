import { useRouter } from "next/router";

function TopMenu() {
  const router = useRouter();
  const currentPath = router.asPath;

  return (
    <div className="">
      <div className="bg-black z-10  ?">
        <div className=" pr-4 pl-4">
          <div className="bg-white rounded-md p-2  flex justify-evenly font-confortaa">
            <button
              type="button"
              className="w-1/4 px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-black hover:text-white bg-main-blue hover:bg-light-blue  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-light-blue"
            >
              Create
            </button>
            <button
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
    </div>
  );
}

export default TopMenu;
