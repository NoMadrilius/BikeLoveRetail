import React from "react";

import ProductSummaryCard from "./ProductSummaryCard";
import DeliveryOptions from "./DeliveryOptions";
import PaymentOptions from "./PaymentOptions";
import GuaranteeDetails from "./GuaranteeDetails";
import { Product } from "@/dataTransferObjects/entities/Product";
import ProductOptions from "@/components/Pages/ProductPage/ProductCard/ProductInfo/ProductDetails/ProductOptions";
import { ProductFullData } from "@/dataTransferObjects/response/ProductFullData";

const ProductDetails = ({p}:{p:ProductFullData}) => {

  return (
    <section className="py-5 px-4 bg-white rounded-lg w-full flex flex-col gap-7 md:px-7">
      <ProductSummaryCard p={p.product} />

      <ProductOptions p={p} />

      <DeliveryOptions />
      <PaymentOptions />
      <GuaranteeDetails />
    </section>
  );
};

export default ProductDetails;
