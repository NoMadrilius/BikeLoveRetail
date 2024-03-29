import Image from "next/image";
import React from "react";

const ProductCard = () => {
  return (
    <div className="max-w-[316px] w-full bg-white p-5">
      <div>
        <div className="relative w-[276px] h-[194px]">
          <Image
            src={
              "https://www.statebicycle.com/cdn/shop/products/6061-eBikeCommuter-MatteBlack_1.jpg?v=1684443969"
            }
            alt={"Bicycle"}
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ProductCard;
