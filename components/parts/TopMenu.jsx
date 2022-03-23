import { useRouter } from "next/router";

function TopMenu({ data }) {
  const router = useRouter();
  const currentPath = router.asPath;

  return (
    <div className={currentPath == "/" ? "bg-soft-gray " : "bg-main-blue "}>
      <div className="bg-main-blue rounded-b-[500px]">
        <div className=" p-4">
          <h2 className="p-4 font-lato font-medium text-center text-lg">
            Let&#39;s pin your favorite place for everybody
          </h2>
          <div className="bg-white rounded-md p-2  flex justify-evenly font-confortaa">
            <button
              type="button"
              className="w-1/4 px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-black hover:text-white bg-pure-pink hover:bg-pure-pink  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-pure-pink"
            >
              List of POI
            </button>
            <button
              type="button"
              className="w-1/4 px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-black hover:text-white  bg-off-pink hover:bg-pure-pink focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-pure-pink"
            >
              Map
            </button>
            <button
              type="button"
              className="w-1/4  px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-black hover:text-white  bg-off-pink hover:bg-pure-pink focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-pure-pink"
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
