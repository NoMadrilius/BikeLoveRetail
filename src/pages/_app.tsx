import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { ToastContainer } from "react-toastify";
import { appWithTranslation } from 'next-i18next'
import Layout from "@/components/Layout";

function App({ Component, pageProps }: AppProps) {

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={3500}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
      />
          <Layout>
          <>
            <NextNProgress
              color="red"
              startPosition={0}
              stopDelayMs={200}
              height={3}
              showOnShallow={true}
            />
              <Component {...pageProps} />
          </>
          </Layout>
    </div>
  );
}

export default appWithTranslation(App)
