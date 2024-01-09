import Footer from "@/components/Footer/Footer";
import "@/styles/globals.css";
import { Auth0Provider } from "@auth0/auth0-react";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { CONFIG } from "../../config";
import { UseMetaData } from "@/helpers/hooks/useMetaData";
import { ToastContainer } from "react-toastify";
import Layout from "./layout";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<ToastContainer
				position='top-center'
				autoClose={3500}
				hideProgressBar={true}
				newestOnTop={true}
				closeOnClick
			/>
			<Auth0Provider
				domain={CONFIG.AUTH0.domain}
				clientId={CONFIG.AUTH0.clientId}
				authorizationParams={{ redirect_uri: CONFIG.AUTH0.redirect }}
				cacheLocation='localstorage'>
				<Layout>
					<NextNProgress
						color='red'
						startPosition={0}
						stopDelayMs={200}
						height={3}
						showOnShallow={true}
					/>
					<Component {...pageProps} />
				</Layout>
			</Auth0Provider>
		</>
	);
}
