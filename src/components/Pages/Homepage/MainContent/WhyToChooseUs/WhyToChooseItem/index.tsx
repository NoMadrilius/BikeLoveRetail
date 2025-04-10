import React from "react";
import Image from "next/image";

interface WhyToChooseItemProps {
  iconSrc: string;
  alt: string;
  text: string;
}

const WhyToChooseItem = ({ iconSrc, alt, text }: WhyToChooseItemProps) => {
  return (
    <div className="p-4 bg-dark rounded-lg flex text-center flex-col justify-around items-center mob:p-2 mob:size-28 shrink-0">
      <div className="relative shrink-0 size-[48px] mob:size-[32px]">
        <Image src={iconSrc} alt={alt} fill className="shrink-0" />
      </div>
      <h3 className="text-white mob:text-xs">{text}</h3>
    </div>
  );
};

export default WhyToChooseItem;
