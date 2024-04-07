import React from "react";
import ContactAndSocial from "./Sections/ContactAndSocial";
import Footer from "./Sections/Footer";
import GetOurLatestNewsFirst from "./Sections/GetOurLatestNewsFirst";
import InfoAboutCompany from "./Sections/InfoAboutCompany";
import ProductCategory from "./Sections/ProductCategory";
import SelectionOfBicycle from "./Sections/SelectionOfBicycle";

const Aside = () => {
  return (
    <aside className="w-full max-w-[304px] lg:flex xl:flex 2xl:flex hidden flex-col gap-8">
      <ProductCategory />
      <SelectionOfBicycle />
      <InfoAboutCompany />
      <ContactAndSocial />
      <GetOurLatestNewsFirst />
      <Footer />
    </aside>
  );
};

export default Aside;
