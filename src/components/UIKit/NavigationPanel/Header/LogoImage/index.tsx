import Image from "next/image";
import React from "react";

interface LogoImageProps {
  classname?: string;
  logoSrc?: string;
}

const LogoImage = ({
  classname,
  logoSrc = "/images/uikit/header/Logo.svg",
}: LogoImageProps) => {
  return (
    <div
      className={`shrink-0 sm:shrink relative md:w-[140px] md:mx-0 xl:mx-0 md:h-[51px] xl:w-[140px] xl:h-[51px]  sm:w-full sm2:w-[140px] sm2:h-[51px] w-[93px] h-[34px] mx-[37px] sm2:mx-0 ${classname}`}
    >
      <Image src={logoSrc} alt={"Header Logo"} fill />
    </div>
  );
};

export default LogoImage;
