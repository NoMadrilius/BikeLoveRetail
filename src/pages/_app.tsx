import "@/styles/globals.css";
import { Auth0Provider } from "@auth0/auth0-react";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { CONFIG } from "../../config";
import { ToastContainer } from "react-toastify";

import PhoneWidget from "@/components/PhoneWidget/PhoneWidget";
import { I18nextProvider } from "react-i18next";
import i18n from "@/i18n/i18n";
import Layout from "@/components/Layout";
import HttpProvider from "@/components/Provider/HTTPProvider";



export default function App({ Component, pageProps }: AppProps) {
    console.log("LoadingAppState")
    const appState = "appState"
    const props = {...pageProps, appState:appState}
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3500}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
      />
      <Auth0Provider
        domain={CONFIG.AUTH0.domain}
        clientId={CONFIG.AUTH0.clientId}
        authorizationParams={{ redirect_uri: CONFIG.AUTH0.redirect }}
        cacheLocation="localstorage"
      >
          <HttpProvider>
        <Layout>
          <NextNProgress
            color="red"
            startPosition={0}
            stopDelayMs={200}
            height={3}
            showOnShallow={true}
          />
          <I18nextProvider i18n={i18n}>
            <Component {...props} />
          </I18nextProvider>
          <PhoneWidget />
        </Layout>
          </HttpProvider>
      </Auth0Provider>
    </>
  );
}
