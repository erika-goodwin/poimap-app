import Link from "next/link";
import { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";
import MapNav from "../../parts/map/parts/MapNav";
import NavNested from "./NavNested";

function Nav() {
  const [isOpened, setIsOpen] = useState(false);
  const router = useRouter();
  const currentPath = router.asPath;
  const [switchingBg, setSwitchingBg] = useState("");

  const backgroundChanger = () => {
    switch (currentPath) {
      case "/":
        setSwitchingBg("bg-main-blue");

        console.log("current path /", switchingBg);
        return;
      case "/list":
        setSwitchingBg("bg-soft-gray");

        console.log("current path /list", switchingBg);
        return;
      case "/map":
        setSwitchingBg("bg-transparent");
        console.log("current path /map", switchingBg);
        return;
      default:
        break;
    }
    return switchingBg;
  };

  useEffect(() => {
    backgroundChanger();
  }, [currentPath]);

  return (
    <>
      {currentPath == "/map" ? (
        <MapNav />
      ) : (
        <NavNested
          isOpened={isOpened}
          setIsOpen={setIsOpen}
          switchingBg={switchingBg}
        />
      )}
    </>
  );
}

export default Nav;
