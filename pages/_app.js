import "../styles/globals.css";
import ProgressBar from "@badrap/bar-of-progress";
import { Router } from "next/router";

const progress = new ProgressBar({
  size: 4,
  color: "#fff",
  className: "z-50",
  delay: 80,
});

Router.events.on("routerChangeStart", progress.start);
Router.events.on("routerChangeComplete", progress.finish);
Router.events.on("routerChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
