import { useRouter } from "next/router";
import PhoneVerification from "../Modal/PhoneVerification";
import Header from "@/components/UIKit/NavigationPanel/Header";
import Main from "@/components/Pages/Homepage/MainContent";
import React, { useEffect } from "react";
import CartModal from "@/components/UIKit/Modals/CartModal";
import AuthModal from "@/components/Modal/AuthModal/AuthModal";
import Footer from "../UIKit/NavigationPanel/Header/MobileHeader/Sections/Footer";
import ContactAndSocial from "../Pages/Homepage/Aside/Sections/ContactAndSocial";
import GetOurLatestNewsFirst from "../Pages/Homepage/Aside/Sections/GetOurLatestNewsFirst";
import InfoAboutCompany from "../Pages/Homepage/Aside/Sections/InfoAboutCompany";
import LogoImage from "../UIKit/NavigationPanel/Header/LogoImage";
import Image from "next/image";
import CatalogModal from "@/components/UIKit/Modals/CatalogModal";
import { UserAPI } from "@/api/UserAPI";
import AppStore from "@/store/AppStore";

const Layout = ({ children }: any) => {

  const router = useRouter();

  if(router.query.r && router.asPath && AppStore.deviceFingerprint){
    UserAPI.TrackReferal(router.query.r as string, AppStore.deviceFingerprint, router.asPath)
  }

  console.log("referal",router.query.r)
  console.log("url",router.asPath)

  return (
    <div className={""}>
      <CartModal />
      <AuthModal />
      <CatalogModal />

      <Header />

      <PhoneVerification />
      <Main>{children}</Main>
      <footer className="px-[60px] md:px-10 sm:px-10 bg-[#3C3C3C] grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 sm:mx-auto py-4">
        <Footer
          className="grow !bg-transparent px-5"
          textColor="text-white font-bold"
          logoSrc="/images/uikit/gray-logo.svg"
          paymentSrc="/images/homepage/icons/payment.svg"
        />
        <InfoAboutCompany
          className="grow !bg-transparent px-5"
          textColor="text-white font-bold"
        />
        <div className="md:block hidden md:col-span-4 w-full h-[1px] bg-t-grey" />
        <ContactAndSocial
          className="text-white grow !bg-transparent px-5"
          textColor="text-white"
          imgSrc="/images/homepage/icons/white-phone.svg"
        />
        <GetOurLatestNewsFirst
          className="text-white grow !bg-transparent px-5 max-w-[290px]"
          textColor="text-white"
          buttonStyles="bg-transparent border border-white text-white"
        />
      </footer>
    </div>
  );
};
export default Layout;
