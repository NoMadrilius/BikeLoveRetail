import Image from "next/image";
import React from "react";
import LogoImage from "../../../LogoImage";

const Footer = ({
  className,
  textColor,
  logoSrc,
  paymentSrc,
}: {
  className?: string;
  textColor?: string;
  logoSrc?: string;
  paymentSrc?: string;
}) => {
  return (
    <section
      className={`w-fill rounded-lg overflow-hidden flex flex-col bg-white p-5 gap-5 ${className}`}
    >
      <LogoImage
        logoSrc={logoSrc ? logoSrc : "/images/uikit/header/black-logo.svg"}
        classname="!mx-0"
      />
      <p
        className={`text-dark-text font-light leading-[120%] max-w-[145px] ${textColor}`}
      >
        @ 2024 <br />
        Всі права захищені Публічна оферта
      </p>
      <div className="flex gap-5">
        <Image priority={true}
          src={
            paymentSrc ? paymentSrc : "/images/homepage/icons/dark-payment.svg"
          } fetchPriority={"low"}
          alt={"Payment methods"}
          width={180}
          height={80}
        />
      </div>
    </section>
  );
};

export default Footer;
