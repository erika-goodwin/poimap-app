import Router, { useRouter } from "next/router";
function Header() {
  const router = useRouter();
  const currentPath = router.asPath;

  return (
    <>
      {currentPath == "/" ||
        (currentPath == "/list" && (
          <header className="bg-transparent absolute top-0 left-0 z-10 p-1.5">
            <h1 className=" text-xl font-confortaa">Webpage Name</h1>
          </header>
        ))}
    </>
  );
}

export default Header;
