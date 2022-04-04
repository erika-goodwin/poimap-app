import Footer from "../parts/Footer";
import MapNav from "../parts/MapNav";
import MapTopMenu from "../parts/MapTopMenu";
import MapBox from "../parts/MapBox";

function nestedMapLayout({ children }) {
  return (
    <>
      <MapNav />

      <main>{children}</main>
    </>
  );
}

export default nestedMapLayout;
