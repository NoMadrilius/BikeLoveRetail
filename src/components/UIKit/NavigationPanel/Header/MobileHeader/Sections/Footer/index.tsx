import Image from "next/image";
import React from "react";
import LogoImage from "../../../LogoImage";

const Footer = () => {
  return (
    <section className="w-fill rounded-lg overflow-hidden flex flex-col bg-white p-5 gap-5">
      <LogoImage
        logoSrc={"/images/uikit/header/black-logo.svg"}
        classname="!mx-0"
      />
      <p className="text-dark-text font-light leading-[120%] max-w-[145px]">
        @ 2024 <br />
        Всі права захищені Публічна оферта
      </p>
      <div className="flex gap-5">
        <Image
          src={"/images/homepage/icons/dark-payment.svg"}
          alt={"Payment methods"}
          width={180}
          height={80}
        />
      </div>
    </section>
  );
};

export default Footer;
