import Image from "next/image";
import React from "react";
import Link from "next/link";

interface LogoImageProps {
  classname?: string;
  logoSrc?: string;
}

const LogoImage = ({
  classname,
  logoSrc = "/images/uikit/header/Logo.svg",
}: LogoImageProps) => {
  return (
    <Link
      href={"/"}
      className={`shrink-0 sm:shrink sm:w-[93px] sm:w-full relative 
      md:w-[140px] md:mx-0 sm:mx-[45px]
      xl:mx-0 md:h-[51px] xl:w-[140px] xl:h-[51px] 
      lg:w-[140px] lg:h-[51px]  lg:mx-0
     
      sm:h-[34px] cursor-pointer
      w-[93px] h-[34px] mx-[37px] sm2:mx-0 ${classname}`}
    >
      <Image src={logoSrc} alt={"Header Logo"} fill />
    </Link>
  );
};

export default LogoImage;
