import React from "react";
import CharacteristicItem from "./CharacteristicItem";

const items = [
  { isLink: true, linkText: "Параметр Link", href: "#", name: "Назва" },
  { isLink: true, linkText: "Параметр Link", href: "#", name: "Назва" },
  { isLink: true, linkText: "Параметр Link", href: "#", name: "Назва" },
];
const CharacteristicsMobile = () => {
  return (
    <div
      className="p-5 md2:block hidden bg-white rounded-lg"
      id="specifications"
    >
      <div className="border-b border-gray pb-4 flex flex-col gap-5">
        <h3 className="text-dark font-robot-c text-[24px] font-medium leading-[28.13px] xl:text-[32px] xl:leading-[37.5px]">
          Характеристики
        </h3>
        <div className="flex gap-3 flex-col">
          {items.map((item, index) => (
            <CharacteristicItem
              key={index}
              isLink={item.isLink}
              linkText={item.linkText}
              href={item.href}
              name={item.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CharacteristicsMobile;
