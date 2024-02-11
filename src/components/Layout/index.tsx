import Footer from "@/components/Layout/Footer/Footer";
import Header from "@/components/Layout/Header/Header";

import { useRouter } from "next/router";

const Layout = ({ children }: any) => {
  const router = useRouter();
  const currentPath = router.asPath;
  return (
    <>
      <Header opacityBg={currentPath === "/"} />
      {children}
      <Footer />
    </>
  );
};
export default Layout;
