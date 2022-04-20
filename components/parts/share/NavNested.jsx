import Link from "next/link";

function NavNested({ isOpened, setIsOpen, switchingBg }) {
  return (
    <nav className={`${switchingBg} border-0 relative h-12`}>
      {/* bigger screen */}
      <div className="w-full pr-2 hidden md:block lg:pr-5 xl:pr-48">
        <div className="flex justify-end transition-transform ">
          <div
            onClick={(cur) => setIsOpen(!cur)}
            className="p-2 text-center transition hover:text-dark-gray hover:ease-in-out rounded-lg"
          >
            <Link href="/">Home</Link>
          </div>
          {/* <div
            onClick={(cur) => setIsOpen(!cur)}
            className="p-2 text-center transition hover:text-dark-gray hover:ease-in-out"
          >
            <Link href="/list">List</Link>
          </div> */}
          <div
            onClick={(cur) => setIsOpen(!cur)}
            className="p-2 text-center transition hover:text-dark-gray  hover:ease-in-out"
          >
            <Link href="/map">Map</Link>
          </div>
        </div>
      </div>

      {/* Small screen */}
      <div className="fixed top-1 right-3 sm:block md:hidden ">
        <button
          onClick={() => setIsOpen(!isOpened)}
          className="p-2 space-y-2 bg-white rounded shadow-2xl hover:shadow "
        >
          <span className="block w-6 h-0.5 bg-gray-800 animate-pulse"></span>
          <span className="block w-6 h-0.5 bg-gray-800 animate-pulse"></span>
          <span className="block w-6 h-0.5 bg-gray-800 animate-pulse"></span>
        </button>
      </div>

      {isOpened && (
        <div className="pt-12 rounded-b-lg bg-main-blue flex flex-col transition-transform">
          <div
            onClick={(cur) => setIsOpen(!cur)}
            className="p-2 text-center transition hover:bg-light-blue hover:ease-in-out"
          >
            <Link href="/">Home</Link>
          </div>
          {/* <div
            onClick={(cur) => setIsOpen(!cur)}
            className="p-2 text-center transition hover:bg-light-blue hover:ease-in-out"
          >
            <Link href="/list">List</Link>
          </div> */}
          <div
            onClick={(cur) => setIsOpen(!cur)}
            className="p-2 text-center transition hover:bg-light-blue hover:ease-in-out"
          >
            <Link href="/map">Map</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavNested;
