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
  <div className="rounded-lg overflow-hidden max-w-[316px]">
    <div className="relative w-[316px] h-[236px] shrink-0">
      <Image
        src={purpose.image}
        alt={"Велосипеди за призначенням"}
        fill
        className="object-cover"
      />
    </div>
    <div className="bg-dark flex flex-col items-center justify-center gap-3 py-3">
      <h3 className="font-semibold leading-[19px]">{purpose.name}</h3>
      <p className="text-[#DEDEDE] font-light leading-[120%]">
        {purpose.count} байків
      </p>
    </div>
  </div>
);

export default BicyclePurpose;
