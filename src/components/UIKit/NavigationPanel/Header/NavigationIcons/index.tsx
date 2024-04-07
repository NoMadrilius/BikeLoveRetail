import Image from "next/image";
import React from "react";

const NavigationIcons = () => {
  return (
    <div className="flex items-center">
      <div className="p-3 md:block hidden lg:block xl:block 2xl:block">
        <Image
          src={"/images/uikit/header/person.svg"}
          alt={"Person"}
          width={24}
          height={24}
        />
      </div>
      <div className="p-3 md:block hidden lg:block xl:block 2xl:block">
        <Image
          src={"/images/uikit/header/white-heart.svg"}
          alt={"Favorites"}
          width={24}
          height={24}
        />
      </div>
      <div className="p-3 shrink-0 sm:size-[28px] relative md:size-[24px] lg:size-[24px] xl:size-[24px]">
        <Image
          src={"/images/uikit/header/shopping-cart.svg"}
          alt={"Shopping cart"}
          fill
        />
      </div>
    </div>
  );
};

export default NavigationIcons;
