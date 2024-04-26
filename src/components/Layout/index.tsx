import { useRouter } from "next/router";
import PhoneVerification from "../Modal/PhoneVerification";
import Header from "@/components/UIKit/NavigationPanel/Header";
import Main from "@/components/Pages/Homepage/MainContent";
import React, {useEffect} from "react";
import CartModal from "@/components/UIKit/Modals/CartModal";
import AuthModal from "@/components/Modal/AuthModal/AuthModal";

const Layout = ({ children }: any) => {

  return (
    <>
        <CartModal/>
        <AuthModal/>


      <Header />
      <PhoneVerification />
      <Main>{children}</Main>
    </>
  );
};
export default Layout;
