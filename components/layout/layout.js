import Head from "next/head";
// import styles from "../styles/Home.module.css";

function layout({ children }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v<YOUR_MAPBOX_VERSION>/mapbox-gl.css' rel='stylesheet' />
      </Head>

      <body>{children}</body>
    </>
  );
}

export default layout;
