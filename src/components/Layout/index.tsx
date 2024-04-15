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

      <div className="max-w-[1324px] mx-auto flex lg:gap-8  pt-8 pb-20 xl:pt-10 xl:px-10 lg:pt-10">
        <Aside />
        <Main>{children}</Main>
      </div>
    </>
  );
};
export default Layout;
