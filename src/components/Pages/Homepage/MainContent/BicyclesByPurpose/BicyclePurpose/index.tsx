import React from "react";
import Image from "next/image";
import Link from "next/link";

interface BicyclePurposeProps {
  purpose: {
    name: string;
    image: string;
    count: number;
  };
}

const BicyclePurpose = ({ purpose }: BicyclePurposeProps) => (
  <Link
    href={"#"}
    className="rounded-lg overflow-hidden max-w-[316px] sm:max-w-full md:max-w-full xl:max-w-full lg:max-w-full 2xl:max-w-full group cursor-pointer"
  >
    <div className="relative sm:w-full md:w-full xl:w-full lg:w-full 2xl:w-full w-[159.5px] h-[88px] xl:h-[116px] lg:w-[316px] lg:h-[236px] lg:w-[316px] shrink-0">
      <Image
        src={purpose.image}
        alt={"Велосипеди за призначенням"}
        fill
        className="object-cover"
      />
    </div>
    <div className="bg-dark flex flex-col items-center justify-center py-3 xl:pt-3 xl:pb-4 lg:pt-3 lg:pb-4">
      <h3 className="font-semibold leading-[19px]">{purpose.name}</h3>
      <div className="w-[28px] h-[2.5px] bg-gradient-custom rounded-full mt-[6px] mb-2 xl:mb-3 group-hover:w-[58px] transition-all duration-300 ease-in-out" />
      <p className="text-[#DEDEDE] font-light leading-[120%]">
        {purpose.count} байків
      </p>
    </div>
  </Link>
);

export default BicyclePurpose;
