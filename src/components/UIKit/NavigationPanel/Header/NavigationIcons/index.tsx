import Image from "next/image";
import React from "react";

const NavigationIcons = () => {
  return (
    <div className="flex items-center ">
      <div className="p-3 sm:hidden">
        <div className="relative size-[24px] md:block hidden lg:block xl:block 2xl:block cursor-pointer">
          <Image src={"/images/uikit/header/person.svg"} alt={"Person"} fill />
        </div>
      </div>

      <div className="p-3 sm:hidden">
        <div className=" relative size-[24px] md:block hidden lg:block xl:block 2xl:block cursor-pointer">
          <Image
            src={"/images/uikit/header/white-heart.svg"}
            alt={"Favorites"}
            fill
          />
        </div>
      </div>
      <div className="p-3">
        <div className="size-[28px] xl:size-[24px] lg:size-[24px] relative block cursor-pointer">
          <Image
            src={"/images/uikit/header/shopping-cart.svg"}
            alt={"Shopping cart"}
            fill
            className="shrink-0"
          />
        </div>
      </div>
    </div>
  );
};

export default NavigationIcons;
