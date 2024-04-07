import GradientButton from "@/components/UIKit/Buttons/GradientButton";
import Image from "next/image";
import React from "react";

const itemsData = [
  {
    text: "Великий вибір велосипедів",
    iconSrc: "/images/homepage/static/hero/pentagon.svg",
  },
  {
    text: "Cервісний центр",
    iconSrc: "/images/homepage/static/hero/pentagon.svg",
  },
  { text: "Aксесуари", iconSrc: "/images/homepage/static/hero/pentagon.svg" },
];

const HeroTitle = () => {
  return (
    <div className="px-5 relative grow">
      <span className="text-gray lg:text-[200px] text-[120px] font-bold leading-[120%] uppercase">
        Bike
      </span>
      <div className="absolute top-[11.91px] left-[20px] lg:top-[104.54px] lg:left-[54.36px] md:w-[377px] z-[1]">
        <h1 className="text-[32px] lg:text-[40px] md:text-[40px] md:leading-[44px] font-medium text-dark pr-5 lg:pr-0">
          Ваш ідеальний магазин велосипедів!
        </h1>
        <div className="gap-4 lg:gap-0 flex lg:block pr-5 lg:pr-0 mt-3 lg:mt-0">
          <div className="flex flex-col gap-3 lg:mt-3">
            {itemsData.map((item, index) => (
              <div key={index} className="flex gap-[6px] items-center">
                <Image
                  src={item.iconSrc}
                  alt={"Pentagon"}
                  width={12}
                  height={12}
                />
                <span className="text-dark-text text-[18px] leading-[22px]">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
          <div className="relative w-full max-w-[159px] h-[158px] block lg:hidden xl:hidden md:hidden 2xl:hidden rounded-lg overflow-hidden">
            <Image
              src={"/images/homepage/static/hero/hero.jpg"}
              alt={"Hero"}
              fill
              className="transform scale-x-[-1]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroTitle;
