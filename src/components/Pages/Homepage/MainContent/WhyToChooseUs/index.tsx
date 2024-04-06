import React from "react";
import WhyToChooseItem from "./WhyToChooseItem";

const itemsData = [
  {
    iconSrc: "/images/homepage/icons/why-to-choose-us/bicycle.svg",
    alt: "Bicycle",
    text: "Запчастини від виробника",
  },
  {
    iconSrc: "/images/homepage/icons/why-to-choose-us/bus.svg",
    alt: "Bus",
    text: "Доставка в будь-яке місто",
  },
  {
    iconSrc: "/images/homepage/icons/why-to-choose-us/personal.svg",
    alt: "Personal",
    text: "Кваліфікований персонал",
  },
  {
    iconSrc: "/images/homepage/icons/why-to-choose-us/cool-service.svg",
    alt: "Cool Service",
    text: "Гарантійне обслуговування",
  },
];
const WhyToChooseUs = () => {
  return (
    <section className="grid grid-cols-2 lg:flex gap-5 px-5 lg:px-0">
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
