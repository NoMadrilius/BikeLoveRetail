import Image from "next/image";
import React from "react";
import NavigationButtons from "../CustomSlider/NavigationButtons";
import BicycleServiceItem from "./BicycleServiceItem";
import BicycleServiceItemList from "./BicycleServiceItemList";

const items = [
  {
    src: "/images/homepage/icons/why-to-choose-us/bicycle.svg",
    alt: "alt",
    title: "Гарантійне обслуговування",
    description:
      "включає в себе безкоштовний ремонт, заміну чи повернення товару в разі виявлення дефектів протягом визначеного періоду після покупки.",
  },
  {
    src: "/images/homepage/icons/why-to-choose-us/bicycle.svg",
    alt: "alt",
    title: "Гарантійне обслуговування",
    description:
      "включає в себе безкоштовний ремонт, заміну чи повернення товару в разі виявлення дефектів протягом визначеного періоду після покупки.",
  },
  {
    src: "/images/homepage/icons/why-to-choose-us/bicycle.svg",
    alt: "alt",
    title: "Гарантійне обслуговування",
    description:
      "включає в себе безкоштовний ремонт, заміну чи повернення товару в разі виявлення дефектів протягом визначеного періоду після покупки.",
  },
  {
    src: "/images/homepage/icons/why-to-choose-us/bicycle.svg",
    alt: "alt",
    title: "Гарантійне обслуговування",
    description:
      "включає в себе безкоштовний ремонт, заміну чи повернення товару в разі виявлення дефектів протягом визначеного періоду після покупки.",
  },
];

const BicycleWorkshop = () => {
  return (
    <section className="px-5 lg:px-0">
      <NavigationButtons
        showButtons={false}
        rightText={"На сторінку"}
        title={"Професійна веломайстерня"}
      />
      <div className="flex gap-5">
        <div className="flex flex-col gap-5 w-full lg:max-w-[316px] shrink-0">
          <p className="font-semibold text-dark">
            Команда професіоналів BikeLove надасть вам комплексні послуги
          </p>
          <BicycleServiceItemList
            items={items}
            className="lg:hidden grid grid-cols-2"
          />

          <div className="relative w-full max-w-[316px] h-[429px] lg:block hidden">
            <Image
              src={"/images/homepage/static/professional-workshop.jpg"}
              alt={
                "Команда професіоналів BikeLove надасть вам комплексні послуги"
              }
              fill
              className="rounded-lg shrink-0 object-cover"
            />
          </div>
          <p className="font-light text-dark leading-[120%]">
            Довірте свій велосипед професіоналам BikeLove і отримайте максимум
            задоволення від їзди
          </p>
        </div>
        <BicycleServiceItemList items={items} className="lg:flex hidden" />
      </div>
    </section>
  );
};

export default BicycleWorkshop;
