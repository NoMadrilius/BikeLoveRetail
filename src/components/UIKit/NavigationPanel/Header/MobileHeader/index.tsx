import ContactAndSocial from "@/components/Pages/Homepage/Aside/Sections/ContactAndSocial";
import GetOurLatestNewsFirst from "@/components/Pages/Homepage/Aside/Sections/GetOurLatestNewsFirst";
import InfoAboutCompany from "@/components/Pages/Homepage/Aside/Sections/InfoAboutCompany";
import React from "react";
import Footer from "./Sections/Footer";
import NavigationSection from "./Sections/NavigationSection";

const MobileHeader = () => {
  return (
    <div className="bg-white">
      <NavigationSection />
      <InfoAboutCompany />
      <ContactAndSocial />
      <GetOurLatestNewsFirst />
      <Footer />
    </div>
  );
};

export default MobileHeader;
