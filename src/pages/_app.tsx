import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import StyledComponentsRegistry from "@/lib/registry";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const currentPath = router.asPath;
  return (
    <>
      <StyledComponentsRegistry>
        <Header opacityBg={currentPath === "/"} />
        <NextNProgress
          color="red"
          startPosition={0}
          stopDelayMs={200}
          height={3}
          showOnShallow={true}
        />
        <Component {...pageProps} />
        <Footer />
      </StyledComponentsRegistry>
    </>
  );
}
