import LogoImage from "@/components/UIKit/NavigationPanel/Header/LogoImage";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section className="w-fill rounded-lg overflow-hidden flex flex-col bg-dark p-5 gap-5 mt-[2px]">
      <LogoImage />
      <div>
        <p className="text-white font-light leading-[19.2px]">@ 2024</p>
        <p className="text-white font-light leading-[19.2px] max-w-[155px]">
          Всі права захищені
        </p>
      </div>
      <div className="flex gap-5">
        <Image
          src={"/images/homepage/icons/payment.svg"}
          alt={"Payment methods"}
          width={180}
          height={80}
        />
      </div>
    </section>
  );
};

export default Footer;
