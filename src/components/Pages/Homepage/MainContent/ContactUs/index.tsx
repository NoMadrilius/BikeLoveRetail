import Image from "next/image";
import React from "react";
import NavigationButtons from "../CustomSlider/NavigationButtons";
import Map from "./GoogleMap";
import Info from "./Info";

const ContactUs = () => {
  return (
    <section className="px-5 md:px-10 lg:px-0">
      <NavigationButtons justShowTitle={true} title={"Контакти"} />
      <div className="flex gap-5 lg:flex-row flex-col  lg:text-left">
        <Map />

        <Info />
      </div>
    </section>
  );
};

export default ContactUs;
