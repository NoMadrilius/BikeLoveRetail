import Image from "next/image";
import React from "react";

const NavigationIcons = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="py-3 sm2:block hidden">
        <Image
          src={"/images/uikit/header/person.svg"}
          alt={"Person"}
          width={24}
          height={24}
        />
      </div>
      <div className="py-3 sm2:block hidden">
        <Image
          src={"/images/uikit/header/white-heart.svg"}
          alt={"Person"}
          width={24}
          height={24}
        />
      </div>
      <div className="py-3 relative sm2:size-[24px] size-[32px]">
        <Image
          src={"/images/uikit/header/shopping-cart.svg"}
          alt={"Person"}
          fill
        />
      </div>
    </div>
  );
};

export default NavigationIcons;
