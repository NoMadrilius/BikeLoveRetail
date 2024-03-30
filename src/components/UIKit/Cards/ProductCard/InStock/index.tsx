import Image from "next/image";
import React from "react";

const Instock = () => {
  return (
    <div className="flex items-center gap-2">
      <Image
        src={"/images/uikit/card/arrow.svg"}
        alt={"arrow in stock"}
        width={12.5}
        height={8.33}
      />
      <span className="text-product-card-text text-[14px] leading-[120%]">
        В наявності
      </span>
    </div>
  );
};

export default Instock;
