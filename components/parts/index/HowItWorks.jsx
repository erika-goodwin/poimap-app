import Image from "next/image";

function HowItWorks() {
  return (
    <div className="bg-soft-gray p-4 pb-10">
      <div className="relative text-center">
        <h2 className="p-5 font-lato font-medium text-2xl">How it Works?</h2>
        <div className="absolute right-0 top-[-80px]">
          <Image src="/world.svg" alt="world Logo" width={180} height={180} />
        </div>
      </div>
      <div className="bg-main-blue rounded-3xl pb-3 p-6 font-confortaa">
        <p className="text-white">
          Pin your POI (point of interesting) on the map and share your places
          with everybody! <br />
          <br />
          Also, you can find many idea for your date night, outdoor day trip or
          secret dog friendly place recomanded by locals!
        </p>
     
          <div className="ml-auto mt-4 w-1/2 text-center">
            <button
              type="button"
              className="mb-2 px-3 py-1.5 border border-transparent font-medium rounded-full shadow-sm text-white hover:text-black bg-pure-pink hover:bg-pure-pink  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-pure-pink"
            >
              Sign in
            </button>
            <p className="text-black font-lato">And start sharing</p>
          </div>
  
      </div>
    </div>
  );
}

export default HowItWorks;
