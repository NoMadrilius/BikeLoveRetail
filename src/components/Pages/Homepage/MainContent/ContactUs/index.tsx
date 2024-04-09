import Image from "next/image";
import React from "react";
import NavigationButtons from "../CustomSlider/NavigationButtons";
import Map from "./GoogleMap";
import Info from "./Info";

const ContactUs = () => {
  return (
    <section className="xl:mt-[13px]">
      <NavigationButtons justShowTitle={true} title={"Контакти"} />
      <div className="flex gap-5 xl:flex-row lg:flex-row flex-col lg:text-left">
        <Map />
        <Info />
      </div>
    </section>
  );
};

export default ContactUs;
