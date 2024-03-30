import React from "react";
import ProductSpecsItem from "./ProductSpecsItem";

const productSpecs = [
  { title: "Колір", description: "чорний" },
  { title: "Швидкості", description: "7" },
  { title: "Посадочне місце", description: "барабан HG" },
  { title: "Матеріал", description: "Сталь" },
  { title: "Набір зірок", description: "12-14-16-18-21-26-32" },
];

const ProductSpecItems = () => {
  return (
    <div className="grid grid-cols-1 gap-1 mt-4">
      {productSpecs.map((spec) => (
        <ProductSpecsItem
          key={spec.title}
          title={spec.title}
          description={spec.description}
        />
      ))}
    </div>
  );
};

export default ProductSpecItems;
