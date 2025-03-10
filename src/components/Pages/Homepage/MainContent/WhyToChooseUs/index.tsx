import React from "react";
import WhyToChooseItem from "./WhyToChooseItem";

const itemsData = [
  {
    iconSrc: "/images/homepage/icons/why-to-choose-ua/personal.svg",
    alt: "Personal",
    text: "Кваліфікований персонал",
  },
  {
    iconSrc: "/images/homepage/icons/why-to-choose-ua/cool-service.svg",
    alt: "Cool Service",
    text: "Гарантійне обслуговування",
  },
  {
    iconSrc: "/images/homepage/icons/why-to-choose-ua/bicycle.svg",
    alt: "Bicycle",
    text: "Запчастини від виробника",
  },
  {
    iconSrc: "/images/homepage/icons/why-to-choose-ua/bus.svg",
    alt: "Bus",
    text: "Доставка в будь-яке місто",
  },
];
const WhyToChooseUs = () => {
  return (
    <section className="grid grid-cols-2 desc:grid-cols-4 tab:grid-cols-4 desc:flex mob:gap-4 gap-5">
      {itemsData.map((item, index) => (
        <WhyToChooseItem
          key={index}
          iconSrc={item.iconSrc}
          alt={item.alt}
          text={item.text}
        />
      ))}
    </section>
  );
};

export default WhyToChooseUs;
