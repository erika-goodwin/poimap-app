import Link from "next/link";
import { useRouter } from "next/router";
import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn , SignOutButton} from '@clerk/nextjs'
import { UserButton } from "@clerk/clerk-react";
// import SignOutButton from "../../SignOutButton";


function TopMenu({ setShowCreateList, setShowList }) {
  const router = useRouter();
  const currentPath = router.asPath;

  const handleCreate = () => {
    setShowCreateList(true);
    setShowList(false);
  };
  const handleMap = () => {
    setShowCreateList(false);
    setShowList(true);
  };

  return (
    <div className="bg-transparent absolute top-14 w-full ">
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

          <SignedIn>
            <SignOutButton className="w-1/4  px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-black hover:text-white  bg-soft-gray hover:bg-dark-gray focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-dark-gray" />
          </SignedIn>
          <SignedOut>
            <button
              type="button"
              className="w-1/4  px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-black hover:text-white  bg-soft-gray hover:bg-dark-gray focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-dark-gray"
            >
              <Link href="/sign-in">Sign in</Link>
            </button>
          </SignedOut>
        </div>
      </div>
    </div>
  );
}

export default TopMenu;
