import React from "react";
import Description from "./Description";
import Characteristics from "./Characteristics";
import CharacteristicsMobile from "./Characteristics/CharacteristicsMobile";

const ProductDescription = () => {
  return (
    <section className="p-5 bg-white rounded-lg w-full flex flex-col gap-5">
      <Description />
      <Characteristics />
    </section>
  );
};

export default ProductDescription;
