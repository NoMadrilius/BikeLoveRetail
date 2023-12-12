import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import StyledComponentsRegistry from "@/lib/registry";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const currentPath = router.asPath;
  return (
    <>
      <StyledComponentsRegistry>
        <Header opacityBg={currentPath === "/"} />
        <Component {...pageProps} />
        <Footer />
      </StyledComponentsRegistry>
    </>
  );
}
