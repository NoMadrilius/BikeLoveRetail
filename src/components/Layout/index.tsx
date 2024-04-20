import { useRouter } from "next/router";
import PhoneVerification from "../Modal/PhoneVerification";
import Header from "@/components/UIKit/NavigationPanel/Header";
import Aside from "@/components/Pages/Homepage/Aside";
import Main from "@/components/Pages/Homepage/MainContent";

const Layout = ({ children }: any) => {
  //const router = useRouter();
  //const currentPath = router.asPath;
  return (
    <>
      <Header />
      <PhoneVerification />
      <Main>{children}</Main>
    </>
  );
};
export default Layout;
