import { useRouter } from "next/router";
import PhoneVerification from "../Modal/PhoneVerification";
import Header from "@/components/UIKit/NavigationPanel/Header";
import Aside from "@/components/Pages/Homepage/Aside";
import Main from "@/components/Pages/Homepage/MainContent";
import {useEffect} from "react";
import {useAppStore} from "@/store/AppStore";
import {useSearchStore} from "@/store/SearchStore";
import Login from "@/components/UIKit/NavigationPanel/Header/Auth/Login";

const Layout = ({ children }: any) => {

  return (
    <>
      <Header />

      <PhoneVerification />
      <Main>{children}</Main>
    </>
  );
};
export default Layout;
