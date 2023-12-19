import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import "@/styles/globals.css";
import { Auth0Provider } from "@auth0/auth0-react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import NextNProgress from "nextjs-progressbar";
import { CONFIG } from "../../config";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const currentPath = router.asPath;
  return (
    <>
      <Auth0Provider
        domain={CONFIG.AUTH0.domain}
        clientId={CONFIG.AUTH0.clientId}
        authorizationParams={{ redirect_uri: CONFIG.AUTH0.redirect }}
        cacheLocation="localstorage"
      >
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
      </Auth0Provider>
    </>
  );
}
