import React from "react";
import Image from "next/image";

interface BicyclePurposeProps {
  purpose: {
    name: string;
    image: string;
    count: number;
  };
}

const BicyclePurpose = ({ purpose }: BicyclePurposeProps) => (
  <div className="rounded-lg overflow-hidden max-w-[316px] sm:max-w-full">
    <div className="relative sm:w-full w-[159.5px] h-[88px] lg:w-[316px] lg:h-[236px] shrink-0">
      <Image
        src={purpose.image}
        alt={"Велосипеди за призначенням"}
        fill
        className="object-cover"
      />
    </div>
    <div className="bg-dark flex flex-col items-center justify-center py-3">
      <h3 className="font-semibold leading-[19px]">{purpose.name}</h3>
      <div className="w-[28px] h-[2.5px] bg-gradient-custom rounded-full mt-[6px] mb-2" />
      <p className="text-[#DEDEDE] font-light leading-[120%]">
        {purpose.count} байків
      </p>
    </div>
  </div>
);

export default BicyclePurpose;
