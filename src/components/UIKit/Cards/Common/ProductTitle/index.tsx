import React from "react";

interface ProductTitleProps {
  disableBorder?: boolean;
  classname?: string;
}

const ProductTitle = ({
  disableBorder = false,
  classname,
}: ProductTitleProps) => {
  return (
    <h3
      className={`text-product-card-text font-semibold py-2 lg:line-clamp-none${
        disableBorder ? "" : "border-b border-[rgb(218, 218, 218)]"
      } ${classname}`}
    >
      <span className="line-clamp-5 text-[16px] leading-[19px]">
        Тримач гаджета GUB PRO-3 на кермо алюмінієвий для PowerBank/телефонів у
        чохлах. Чорний
      </span>
    </h3>
  );
};

export default ProductTitle;
