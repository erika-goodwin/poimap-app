import Router, { useRouter } from "next/router";

function Footer() {

  const router = useRouter();
  const currentPath = router.asPath;

  
  return (
   <>
   {currentPath !== '/map'&& ( <footer className="bg-soft-gray w-full ">
      <div className="bg-dark-gray rounded-t-lg h-20 flex justify-center">
        <h1 className="text-white font-confortaa p-2 mt-auto"> &copy; Erika Hashizume, 2022</h1>
      </div>
    </footer>)}
   </>
  );
}

export default Footer;
