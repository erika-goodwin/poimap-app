import Footer from "../parts/share/Footer";
import Header from "../parts/share/Header";
import Nav from "../parts/share/Nav";

function nestedLayout({ children }) {
  return (
    <>
      <Header />
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default nestedLayout;
