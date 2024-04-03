import React from "react";
import HeroTitle from "./HeroTitle";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <section className="w-full flex items-start gap-5">
      <HeroTitle />
      <HeroImage />
    </section>
  );
};

export default Hero;
