import React from "react";
import Image from "next/image";

const HeroImage = () => {
  return (
    <div className="hidden lg:block md:block xl:block 2xl:block relative w-full max-w-[484px] h-[360px] xl:max-w-[422px] rounded-[300px_8px_8px_300px] overflow-hidden">
      <Image
        src={"/images/homepage/static/hero/hero.jpg"}
        alt={"Hero"}
        fill
        className="transform scale-x-[-1] object-cover"
      />
    </div>
  );
};

export default HeroImage;
