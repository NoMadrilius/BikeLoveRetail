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
    <div className="px-5 xl:p-0 relative grow">
      <span className="text-gray lg:text-[200px] text-[120px] xl:relative xl:top-[17px] xl:text-[140px] xl:leading-[168px] font-bold leading-[120%] uppercase sm:relative sm:-top-[13px] font-robot">
        Bike
      </span>
      <div className="absolute xl:top-[103.91px] xl:left-[29px] top-[11.91px] left-[20px] lg:top-[104.54px] lg:left-[54.36px] md:w-[377px] z-[1]">
        <h1 className="text-[32px] leading-[37.5px] xl:text-[40px] xl:leading-[46.88px] lg:text-[40px] md:text-[40px] md:leading-[44px] font-medium text-dark pr-5 lg:pr-0 font-robot-c sm:max-w-[313.74px]">
          Ваш ідеальний магазин велосипедів!
        </h1>
        <div className="gap-4 lg:gap-0 flex lg:block sm:pr-0 pr-5 lg:pr-0 mt-3 lg:mt-0">
          <div className="flex flex-col gap-3 lg:mt-3 sm:shrink-0 sm:max-w-[159px]">
            {itemsData.map((item, index) => (
              <div key={index} className="flex gap-[6px] items-center">
                <Image
                  src={item.iconSrc}
                  alt={"Pentagon"}
                  width={8}
                  height={8}
                />
                <span className="text-dark-text text-[18px] leading-[22px]">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
          <div className="relative w-full max-w-[159px] h-[158px] block lg:hidden xl:hidden md:hidden 2xl:hidden rounded-lg overflow-hidden sm:shrink-0">
            <Image
              src={"/images/homepage/static/hero/hero.jpg"}
              alt={"Hero"}
              fill
              className="transform scale-x-[-1] sm:object-cover"
            />
          </div>
        </div>
        <div className="relative h-[88.51px] w-[111px] ml-auto top-[-40px] left-[6px]">
          <Image src={"/images/uikit/Love.svg"} alt={"Love Logo"} fill />
        </div>
      </div>
    </div>
  );
};

export default HeroTitle;
