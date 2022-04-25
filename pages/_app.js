import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import { ClerkProvider } from "@clerk/nextjs";
import NextNProgress from "nextjs-progressbar";
// import { AppWrapper } from "../context/context";

import React, { createContext } from "react";

const MapAppContext = createContext();

function MyApp({ Component, pageProps }) {
  let sharedState = {
    value: 52,
  };

  return (
    <>
      {/* <MapAppContext.Provider value={[context, setContext]}> */}
      <NextNProgress
        color="#cebeb9"
        startPosition={0.3}
        stopDelayMs={200}
        height={4}
        showOnShallow={true}
      />
      <MapAppContext.Provider value={sharedState}>
        <ClerkProvider
          {...pageProps}
          frontendApi={process.env.NEXT_PUBLIC_CLERK_FRONTEND_API}
        >
          <Layout>
            {/* <AppWrapper> */}
            {/* <MapAppContext.Provider value={[context, setContext]}> */}
            <Component {...pageProps} />
            {/* </MapAppContext.Provider> */}
            {/* </AppWrapper> */}
          </Layout>
        </ClerkProvider>
      </MapAppContext.Provider>
    </>
  );
}

export default MyApp;
