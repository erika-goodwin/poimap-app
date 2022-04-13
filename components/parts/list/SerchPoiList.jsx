import Image from "next/image";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";

function SerchPoiList() {
  const [searchInput, setSearchInput] = useState("");
  const router = useRouter();

  const search = () => {
    router.push({
      pathname: "/map",
      query: {
        queryKeyword: searchInput,
      },
    });
  };
  return (
    <div className="bg-main-blue p-4">
      <div className="bg-white rounded-3xl p-2 font-confortaa md:w-2/3 mx-auto lg:w-[43rem]">
        <div className="relative ">
          <h2 className="p-10 font-lato font-medium text-2xl">Lineup</h2>
          <div className="absolute right-0 top-0">
            <Image
              src="/navigator.svg"
              alt="navigator Logo"
              width={200}
              height={130}
            />
          </div>
        </div>
        <div>
          <form className="w-full max-w-sm m-auto mt-5 mb-5">
            <div className="flex items-center border-b border-dark-gray py-2">
              <input
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="type here"
                aria-label="Full name"
                value={searchInput}
                onChange={(e) => {
                  setSearchInput(e.target.value);
                }}
              ></input>
              <button
                className="flex-shrink-0 bg-dark-gray hover:bg-main-blue text-sm border-4 text-white py-1 px-2 rounded"
                type="button"
                onClick={search}
              >
                Search
              </button>
            </div>
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
          <div className="w-full mb-2 p-1 flex items-center border border-cream-yellow rounded-md">
            <div className="mr-2 ml-2 p-1">icon</div>
            <div className="w-full p-2">
              <h2 className="font-confortaa text-lg font-semibold">
                Title here
              </h2>
              <p className="font-lato">XX pins, Location</p>
            </div>
          </div>
          <div className="w-full mb-2 p-1 flex items-center border border-cream-yellow rounded-md">
            <div className="mr-2 ml-2 p-1">icon</div>
            <div className="w-full p-2">
              <h2 className="font-confortaa text-lg font-semibold">
                Title here
              </h2>
              <p className="font-lato">XX pins, Location</p>
            </div>
          </div>
          <div className="w-full mb-2 p-1 flex items-center border border-cream-yellow rounded-md">
            <div className="mr-2 ml-2 p-1">icon</div>
            <div className="w-full p-2">
              <h2 className="font-confortaa text-lg font-semibold">
                Title here
              </h2>
              <p className="font-lato">XX pins, Location</p>
            </div>
          </div>
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
        <div className="p-1 text-center">
          <a src="#" alt="" className="font-lato">
            show more
          </a>
        </div>
      </div>
    </div>
  );
}

export default SerchPoiList;
