import React from "react";

import ProductOptions from "./ProductOptions";
import ProductSummaryCard from "./ProductSummaryCard";
import DeliveryOptions from "./DeliveryOptions";
import PaymentOptions from "./PaymentOptions";
import GuaranteeDetails from "./GuaranteeDetails";

const ProductDetails = () => {
  return (
    <section className="py-5 px-4 bg-white rounded-lg w-full flex flex-col gap-7 md:px-7">
      <ProductSummaryCard />
      <ProductOptions />
      <DeliveryOptions />
      <PaymentOptions />
      <GuaranteeDetails />
    </section>
  );
};

export default ProductDetails;
