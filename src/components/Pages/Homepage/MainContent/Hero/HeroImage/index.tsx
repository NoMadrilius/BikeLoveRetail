import React from "react";
import Image from "next/image";

const HeroImage = () => {
  return (
    <div className="relative w-full max-w-[484px] h-[360px] rounded-[300px_8px_8px_300px] overflow-hidden">
      <Image
        src={"/images/homepage/static/hero/hero.jpg"}
        alt={"Hero"}
        fill
        className="transform scale-x-[-1]"
      />
    </div>
  );
};

export default HeroImage;
