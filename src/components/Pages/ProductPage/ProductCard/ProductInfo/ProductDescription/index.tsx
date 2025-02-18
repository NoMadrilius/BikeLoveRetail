import React from "react";
import Description from "./Description";
import Characteristics from "./Characteristics";
import CharacteristicsMobile from "./Characteristics/CharacteristicsMobile";
import { ProductFullData } from "@/dataTransferObjects/response/ProductFullData";

const ProductDescription = ({p}:{p:ProductFullData}) => {
  return (
    <section className="p-5 bg-white rounded-lg w-full flex flex-col gap-5">
      <Description p={p} />
      <Characteristics p={p} />
    </section>
  );
};

export default ProductDescription;
