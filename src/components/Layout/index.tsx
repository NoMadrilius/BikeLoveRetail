import Footer from "@/components/Layout/Footer/Footer";
import Header from "@/components/Layout/Header/Header";

import { useRouter } from "next/router";
import PhoneVerification from "../Modal/PhoneVerification";

const Layout = ({ children }: any) => {
  const router = useRouter();
  const currentPath = router.asPath;
  return (
    <>
      <Header opacityBg={currentPath === "/"} />
      <PhoneVerification />
      {children}
      <Footer />
    </>
  );
};
export default Layout;