import Image from "next/image";
import React from "react";
import NavigationButtons from "../CustomSlider/NavigationButtons";
import BicycleServiceItem from "./BicycleServiceItem";
import BicycleServiceItemList from "./BicycleServiceItemList";
import { useTranslation } from "next-i18next";

const items = [
  {
    src: "/images/homepage/icons/bicycle-workshop/like.svg",
    alt: "alt",
    title: "Гарантійне обслуговування",
    description:
      "включає в себе безкоштовний ремонт, заміну чи повернення товару в разі виявлення дефектів протягом визначеного періоду після покупки.",
  },
  {
    src: "/images/homepage/icons/bicycle-workshop/gear.svg",
    alt: "alt",
    title: "Післягарантійне обслуговування",
    description:
      "включає в себе безкоштовний ремонт, заміну чи повернення товару в разі виявлення дефектів протягом визначеного періоду після покупки.",
  },
  {
    src: "/images/homepage/icons/bicycle-workshop/remont.svg",
    alt: "alt",
    title: "Швидкий та якісний ремонт",
    description:
      "включає в себе безкоштовний ремонт, заміну чи повернення товару в разі виявлення дефектів протягом визначеного періоду після покупки.",
  },
  {
    src: "/images/homepage/icons/bicycle-workshop/advice.svg",
    alt: "alt",
    title: "Поради щодо підбору запчастин та аксесуарів",
    description:
      "включає в себе безкоштовний ремонт, заміну чи повернення товару в разі виявлення дефектів протягом визначеного періоду після покупки.",
  },
];

const BicycleWorkshop = () => {
  const {t} = useTranslation("home_page")

  return (
    <section>
      <NavigationButtons
        showButtons={false}
        rightText={t("На сторінку")}
        title={t("Професійна веломайстерня")}
        rightTextLink={"/workshop"}
      />
      <div className="flex gap-5 sm:gap-6">
        <div className="flex flex-col gap-5 w-full xl:max-w-[274px] lg:max-w-[316px] shrink-0">
          <p className="font-semibold text-dark text-[16px] leading-[19.86px]">
            {t("Команда професіоналів BikeLove надасть вам комплексні послуги")}
          </p>
          <BicycleServiceItemList
            items={items}
            className="lg:hidden xl:hidden 2xl:hidden grid grid-cols-2"
          />

          <div className="relative w-full max-w-[316px] h-[429px] xl:max-w-full xl:h-[410px] xl:block 2xl:block lg:block hidden">
            <Image
              src={"/images/homepage/static/professional-workshop.jpg"}
              alt={t("Команда професіоналів BikeLove надасть вам комплексні послуги")}
              fill
              className="rounded-lg shrink-0 object-cover"
            />
          </div>
          <p className="font-light text-dark leading-[120%]">
            {t("Довірте свій велосипед професіоналам BikeLove і отримайте максимум задоволення від їзди")}
          </p>
        </div>
        <BicycleServiceItemList
          items={items}
          className="xl:grid xl:grid-cols-2 2xl:flex lg:grid lg:grid-cols-2 hidden"
        />
      </div>
    </section>
  );
};

export default BicycleWorkshop;
