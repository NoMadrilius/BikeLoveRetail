import Link from "next/link";
import React from "react";

const ProductHeader = () => {
  const texts = [
    { label: "Про товар", id: "about-product" },
    { label: "Доставка", id: "delivery" },
    { label: "Оплата", id: "payment" },
    { label: "Гарантія", id: "warranty" },
    { label: "Опис", id: "description" },
    { label: "Характеристики", id: "specifications" },
  ];

  return (
    <div className="scroll-smooth overflow-x-scroll flex gap-2 md2:gap-3 w-full pl-5 no-scrollbar md2:overflow-auto md:bg-white md:p-5  md2:bg-white md2:p-5  rounded-lg">
      {texts.map((text, index) => (
        <Link
          key={index}
          href={`#${text.id}`}
          passHref
          className="py-2 px-3 md2:px-2 md2:py-1 md:px-2 md:py-1 rounded bg-white flex items-center justify-center shrink-0 md2:grow md:grow cursor-pointer"
        >
          <span className="font-inter text-dark font-semibold leading-[19.36px] hover:text-pink transition-all duration-300 ease-in-out">
            {text.label}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default ProductHeader;
