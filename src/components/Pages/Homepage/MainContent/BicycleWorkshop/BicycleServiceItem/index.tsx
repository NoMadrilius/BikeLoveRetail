import React from "react";
import Image from "next/image";

interface BicycleServiceItemProps {
  src: string;
  alt: string;
  title: string;
  description: string;
}

const BicycleServiceItem = ({
  src,
  alt,
  title,
  description,
}: BicycleServiceItemProps) => {
  return (
    <div className="px-[16.5px] py-[32.5px] lg:p-6 bg-dark rounded-lg flex flex-col gap-3 sm:items-center sm:text-center lg:max-w-[316px]">
      <Image
        src={src}
        alt={alt}
        width={52.5}
        height={46.25}
        className="shrink-0"
      />
      <h3 className="text-white font-normal md:font-bold text-[16px] leading-[19px] lg:leading-[120%] lg:text-[20px]">
        {title}
      </h3>
      <p className="text-t-grey text-[14px] leading-[120%] md:block xl:block lg:block 2xl:block sm:hidden">
        {description}
      </p>
    </div>
  );
};

export default BicycleServiceItem;
