import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavigationButtons from "../CustomSlider/NavigationButtons";
import AboutUsContent from "./AboutUsContent";
import ImageLink from "./ImageLink";
import StatisticsSection from "./StatisticsSection";

const AboutUs = () => {
  const statisticsData = [
    { value: "20", label: "Кращих спеціалістів" },
    { value: "12+", label: "Років досвіду" },
    { value: "2", label: "Магазини" },
    { value: "100+", label: "Моделей велосипеду" },
  ];
  return (
    <section className="">
      <NavigationButtons justShowTitle={true} title={"Про нас"} />
      <div className=" flex flex-col relative ">
        <ImageLink />

        <StatisticsSection statistics={statisticsData} />
        <AboutUsContent />
      </div>
    </section>
  );
};

export default AboutUs;
