import Image from "next/image";

function SignInBar() {
  return (
    <div className="bg-main-blue p-4 pb-10">
      <div className="bg-soft-gray rounded-3xl p-2 font-confortaa md:w-2/3 mx-auto lg:w-[43rem]">
        <div className="m-auto w-1/2 text-center flex justify-around items-center">
          <button
            type="button"
            className="px-3 py-1.5 border border-transparent font-medium rounded-full shadow-sm text-black hover:text-white bg-pure-pink hover:bg-pure-pink  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-pure-pink"
          >
            Sign in
          </button>
          <p className="text-black font-lato">And start sharing</p>
        </div>
      </div>
    </div>
  );
}

export default SignInBar;
