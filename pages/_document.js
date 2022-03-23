import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  // static async getInitialProps(ctx) { ... }

  return (
    <Html>
      <Head>
        {/* <script
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_MAP_API_KEY}&callback=initMap&libraries=&v=weekly`}
          async
        ></script> */}

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
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
