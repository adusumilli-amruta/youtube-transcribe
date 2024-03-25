import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import HomePage from "./HomePage";
import "./Style.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <HomePage />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
