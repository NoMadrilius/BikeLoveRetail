import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { StyleSheetManager } from "styled-components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StyleSheetManager>
      <Component {...pageProps} />
    </StyleSheetManager>
  );
}
