import React from "react";
import ContactAndSocial from "./Sections/ContactAndSocial";
import Footer from "./Sections/Footer";
import GetOurLatestNewsFirst from "./Sections/GetOurLatestNewsFirst";
import InfoAboutCompany from "./Sections/InfoAboutCompany";
import ProductCategory from "./Sections/ProductCategory";
import SelectionOfBicycle from "./Sections/SelectionOfBicycle";
import {useAppStore} from "@/store/AppStore";
import {observer} from "mobx-react";
import { Button } from "@mui/material";
import Router from "next/router";

const Aside = () => {
  return (
    <aside className="w-full max-w-[304px] lg:flex xl:flex 2xl:flex hidden flex-col gap-8">
      <ProductCategory />
      {/*<SelectionOfBicycle />
      */}
      <InfoAboutCompany />
      <ContactAndSocial />
      <Button variant={'contained'} onClick={()=>Router.push("/reviews")}>Залишити відгук</Button>
      <GetOurLatestNewsFirst />
      <Footer />
    </aside>

  );
};

export default Aside;
