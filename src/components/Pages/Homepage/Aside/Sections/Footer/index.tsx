import LogoImage from "@/components/UIKit/NavigationPanel/Header/LogoImage";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section className="w-fill rounded-lg overflow-hidden flex flex-col bg-dark p-5 gap-5">
      <LogoImage />
      <p className="text-white font-light leading-[24px] max-w-[145px]">
        @ 2024 <br />
        Всі права захищені Публічна оферта
      </p>
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
