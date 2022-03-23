import Footer from "../parts/Footer";
import Header from "../parts/Header";
import Nav from "../parts/Nav";

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
