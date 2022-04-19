import Head from "next/head";
// import styles from "../styles/Home.module.css";
import Footer from "../parts/share/Footer";
import Header from "../parts/share/Header";
import Nav from "../parts/share/Nav";

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        {/* <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v<YOUR_MAPBOX_VERSION>/mapbox-gl.css' rel='stylesheet' /> */}
      </Head>

      <Header />
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;