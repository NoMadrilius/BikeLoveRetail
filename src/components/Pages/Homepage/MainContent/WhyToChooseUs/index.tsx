import React from "react";
import WhyToChooseItem from "./WhyToChooseItem";
import f from "../../../../../../public/images/homepage/icons/why-to-choose-us/personal.svg"
import s from "../../../../../../public/images/homepage/icons/why-to-choose-us/cool-service.svg"
import t from "../../../../../../public/images/homepage/icons/why-to-choose-us/bicycle.svg"
import fo from "../../../../../../public/images/homepage/icons/why-to-choose-us/bus.svg"

const itemsData = [
  {
    iconSrc: f,
    alt: "Personal",
    text: "Кваліфікований персонал",
  },
  {
    iconSrc: s,
    alt: "Cool Service",
    text: "Гарантійне обслуговування",
  },
  {
    iconSrc: t,
    alt: "Bicycle",
    text: "Запчастини від виробника",
  },
  {
    iconSrc: fo,
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
