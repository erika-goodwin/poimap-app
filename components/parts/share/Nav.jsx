import Link from "next/link";
import { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";

function Nav() {
  const [isOpened, setIsOpen] = useState(false);
  const router = useRouter();
  const currentPath = router.asPath;

  useEffect(() => {
    console.log("nav open", isOpened);
  }, [isOpened]);

  return (
    <>
      <nav
        className={
          currentPath == "/"
            ? "bg-main-blue border-0 relative h-12"
            : "bg-soft-gray border-0 relative h-12"
        }
      >
        <div className="fixed top-1 right-3">
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
            <div
              onClick={(cur) => setIsOpen(!cur)}
              className="p-2 text-center transition hover:bg-light-blue hover:ease-in-out"
            >
              <Link href="/">Home</Link>
            </div>
            <div
              onClick={(cur) => setIsOpen(!cur)}
              className="p-2 text-center transition hover:bg-light-blue hover:ease-in-out"
            >
              <Link href="/list">List</Link>
            </div>
            <div
              onClick={(cur) => setIsOpen(!cur)}
              className="p-2 text-center transition hover:bg-light-blue hover:ease-in-out"
            >
              <Link href="/map">Map</Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Nav;
