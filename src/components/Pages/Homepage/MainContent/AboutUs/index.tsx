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
    <section className="px-5 md:px-10 lg:px-0">
      <NavigationButtons justShowTitle={true} title={"Про нас"} />
      <div className="flex flex-col relative gap-5 lg:gap-0 xl:gap-0 2xl:gap-0">
        <div className="sm:flex sm:flex-col-reverse sm:gap-5 md:grid md:grid-cols-2 md:gap-5">
          <ImageLink />
          <AboutUsContent />
        </div>
        <StatisticsSection statistics={statisticsData} />
      </div>
    </section>
  );
};

export default AboutUs;
