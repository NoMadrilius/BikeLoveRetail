import React from "react";
import Image from "next/image";

interface WhyToChooseItemProps {
  iconSrc: string;
  alt: string;
  text: string;
}

const WhyToChooseItem = ({ iconSrc, alt, text }: WhyToChooseItemProps) => {
  return (
    <div className="sm:py-3 sm:px-[16.25] xl:py-3 xl:px-1 p-4 bg-dark rounded-lg flex text-center flex-col space-y-2 items-center max-w-[232px] sm:max-w-full">
      <div className="relative shrink-0 size-[48px]">
        <Image src={iconSrc} alt={alt} fill className="shrink-0" />
      </div>
      <h3 className="text-white leading-[19px]">{text}</h3>
    </div>
  );
};

export default WhyToChooseItem;
