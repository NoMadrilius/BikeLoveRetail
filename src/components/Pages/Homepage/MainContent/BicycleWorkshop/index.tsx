import Image from "next/image";
import React from "react";
import NavigationButtons from "../CustomSlider/NavigationButtons";
import BicycleServiceItem from "./BicycleServiceItem";

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
    <section>
      <NavigationButtons
        showButtons={false}
        rightText={"Перейти на сторінку"}
        title={"Професійна веломайстерня"}
      />
      <div className="flex gap-5">
        <div className="flex flex-col gap-5 max-w-[316px] shrink-0">
          <p className="font-semibold text-dark">
            Команда професіоналів BikeLove надасть вам комплексні послуги
          </p>
          <div className="relative w-full max-w-[316px] h-[429px]">
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
        <div className="flex flex-wrap gap-5">
          {items.map((item, index) => (
            <BicycleServiceItem
              src={item.src}
              alt={item.alt}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BicycleWorkshop;
