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
    <div className="pt-[17.54] px-5 relative grow">
      <span className="text-gray text-[200px] font-bold leading-[120%] uppercase">
        Bike
      </span>
      <div className="absolute top-[104.54px] left-[54.36px]">
        <h1 className="text-[40px] font-medium text-dark">
          Ваш ідеальний магазин велосипедів!
        </h1>

        <div className="flex flex-col gap-3 mt-3">
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
      </div>
    </div>
  );
};

export default HeroTitle;
