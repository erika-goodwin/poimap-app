import Footer from "../parts/Footer";
import MapNav from "../parts/MapNav";
import Nav from "../parts/Nav";

function nestedMapLayout({ children }) {
  return (
    <>
      <MapNav />
      <main>{children}</main>
    </>
  );
}

export default nestedMapLayout;
