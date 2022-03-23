import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

function Nav() {
  const [isOpened, setIsOpen] = useState(false);
  const router = useRouter();
  const currentPath = router.asPath;

  return (
    <>
      <nav className="bg-black z-10 border-0 flex justify-between p-5 ?">
        <div className=" ">
          <Link href="/" passHref>
            <button className="w-10 h-10 bg-white rounded shadow-2xl hover:shadow text-3xl text-center">
              &#60;
            </button>
          </Link>
        </div>
        <div className="">
          <button
            onClick={() => setIsOpen(!isOpened)}
            className="p-2 space-y-2 bg-white rounded shadow-2xl hover:shadow"
          >
            <span className="block w-6 h-0.5 bg-gray-800 animate-pulse"></span>
            <span className="block w-6 h-0.5 bg-gray-800 animate-pulse"></span>
            <span className="block w-6 h-0.5 bg-gray-800 animate-pulse"></span>
          </button>
        </div>


        {isOpened && (
          <div className="pt-12 rounded-b-lg bg-main-blue flex flex-col transition-transform">
            <div className="p-2 text-center transition hover:bg-light-blue hover:ease-in-out">
              <Link href="/">Home</Link>
            </div>
            <div className="p-2 text-center transition hover:bg-light-blue hover:ease-in-out">
              <Link href="/list">List</Link>
            </div>
            <div className="p-2 text-center transition hover:bg-light-blue hover:ease-in-out">
              <Link href="/map">Map</Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Nav;
