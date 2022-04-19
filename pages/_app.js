import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import { ClerkProvider } from "@clerk/nextjs";
import NextNProgress from "nextjs-progressbar";

// const progress = new ProgressBar({
//   size: 4,
//   color: "#fff",
//   className: "z-50",
//   delay: 80,
// });

function MyApp({ Component, pageProps }) {
  // // Use the layout defined at the page level, if available
  // const getLayout = Component.getLayout || ((page) => page);

  // return getLayout(<Component {...pageProps} />);

  return (
    <>
      <NextNProgress
        color="#cebeb9"
        startPosition={0.3}
        stopDelayMs={200}
        height={4}
        showOnShallow={true}
      />
      <ClerkProvider
        {...pageProps}
        frontendApi={process.env.NEXT_PUBLIC_CLERK_FRONTEND_API}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ClerkProvider>
    </>
  );
}

export default MyApp;
