import React from "react";
import HeroTitle from "./HeroTitle";
import HeroImage from "./HeroImage";
import GradientButton from "@/components/UIKit/Buttons/GradientButton";

const Hero = () => {
  return (
    <section className="w-full md:mt-8 flex items-start gap-5 md:gap-0 h-[277px] md:h-auto xl:h-auto lg:h-auto">
      <HeroTitle />
      <HeroImage />
    </section>
  );
};

export default Hero;
