import Image from "next/image";

function LineUpList() {
  return (
    <div className="bg-soft-gray p-4">
      <div className="bg-white rounded-3xl p-2 font-confortaa">
        <div className="relative ">
          <h2 className="p-10 font-lato font-medium text-2xl">Lineup</h2>
          <div className="absolute right-0 top-0">
            <Image
              src="/dreamer.svg"
              alt="dreamer Logo"
              width={200}
              height={130}
            />
          </div>
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

export default LineUpList;
