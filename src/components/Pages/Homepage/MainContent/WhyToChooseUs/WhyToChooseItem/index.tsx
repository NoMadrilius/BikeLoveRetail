import React from "react";
import Image from "next/image";

interface WhyToChooseItemProps {
  iconSrc: string;
  alt: string;
  text: string;
}

const WhyToChooseItem = ({ iconSrc, alt, text }: WhyToChooseItemProps) => {
  return (
    <div className="p-4 bg-dark rounded-lg flex gap-3 items-center max-w-[232px]">
      <Image
        src={iconSrc}
        alt={alt}
        width={46}
        height={34}
        className="shrink-0"
      />
      <h3 className="text-white leading-[19px]">{text}</h3>
    </div>
  );
};

export default WhyToChooseItem;
