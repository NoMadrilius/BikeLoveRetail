import React from "react";
import WhyToChooseItem from "./WhyToChooseItem";
import f from "../../../../../../public/images/homepage/icons/why-to-choose-us/personal.svg"
import s from "../../../../../../public/images/homepage/icons/why-to-choose-us/cool-service.svg"
import t2 from "../../../../../../public/images/homepage/icons/why-to-choose-us/bicycle.svg"
import fo from "../../../../../../public/images/homepage/icons/why-to-choose-us/bus.svg"
import { useTranslation } from "next-i18next";


const WhyToChooseUs = () => {
  const {t} = useTranslation("home_page")

  const itemsData = [
    {
      iconSrc: f,
      alt: "Personal",
      text: t("Кваліфікований персонал",)
    },
    {
      iconSrc: s,
      alt: "Cool Service",
      text: t("Гарантійне обслуговування"),
    },
    {
      iconSrc: t2,
      alt: "Bicycle",
      text: t("Запчастини від виробника"),
    },
    {
      iconSrc: fo,
      alt: "Bus",
      text: t("Доставка в будь-яке місто"),
    },
  ];

  return (
    <section className="flex gap-2 overflow-y-auto scrollbar-hide">
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
