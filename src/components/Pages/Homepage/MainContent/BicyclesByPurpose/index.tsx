import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavigationButtons from "../CustomSlider/NavigationButtons";
import BicyclePurpose from "./BicyclePurpose";

const purposes = [
  {
    name: "Гірські",
    image: "/images/homepage/static/by-purpose.jpg",
    count: 250,
  },
  {
    name: "Шосе",
    image: "/images/homepage/static/by-purpose.jpg",
    count: 250,
  },
  {
    name: "Гібридні",
    image: "/images/homepage/static/by-purpose.jpg",
    count: 250,
  },
  {
    name: "Гравійні",
    image: "/images/homepage/static/by-purpose.jpg",
    count: 250,
  },
  {
    name: "Дитячі",
    image: "/images/homepage/static/by-purpose.jpg",
    count: 250,
  },
  {
    name: "Підліткові",
    image: "/images/homepage/static/by-purpose.jpg",
    count: 250,
  },
  {
    name: "Жіночі",
    image: "/images/homepage/static/by-purpose.jpg",
    count: 250,
  },
  {
    name: "Електричні",
    image: "/images/homepage/static/by-purpose.jpg",
    count: 250,
  },
];

const BicyclesByPurpose = () => (
  <section className="mt-2 lg:mt-0">
    <NavigationButtons
      justShowTitle={true}
      title={"Велосипеди за призначенням"}
    />
    <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 2xl:grid-cols-3  items-start gap-5 flex-wrap">
      {purposes.map((purpose, index) => (
        <BicyclePurpose key={index} purpose={purpose} />
      ))}

      <div className="lg:flex items-center gap-2 shrink-0 mt-auto ml-auto hidden ">
        <Link href="#" className="text-dark leading-[19px] cursor-pointer">
          Перейти до катологу
        </Link>
        <Image
          src={"/images/homepage/icons/right-arrow.svg"}
          alt={"Right Arrow"}
          width={6}
          height={12}
          className="ml-auto shrink-0"
        />
      </div>
    </div>
  </section>
);

export default BicyclesByPurpose;
