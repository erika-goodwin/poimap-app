import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  // static async getInitialProps(ctx) { ... }

  return (
    <Html>
      <Head>
         <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

        {/* Font family */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.7.0/mapbox-gl.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.7.0/mapbox-gl-geocoder.css"
          type="text/css"
        />
      </Head>
      <Main />
      <NextScript />
    </Html>
  );
}
