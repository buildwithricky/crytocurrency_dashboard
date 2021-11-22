import "../styles/globals.css";
import "../styles/main.css";
import "../styles/navbar.css";
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
