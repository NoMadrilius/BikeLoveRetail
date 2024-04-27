import React from "react";

interface CategoryNameProps {
  title: string;
  quantity: number;
}

const CategoryName = ({ title, quantity }: CategoryNameProps) => {
  return (
    <div className="flex gap-5 items-center sm:px-5 md:px-5">
      <h2 className="font-robot-c font-medium text-[32.5px] leading-[37.5px] text-black">
        {title}
      </h2>
      <span className="font-inter text-[18px] leading-[21.78px] text-t-grey">
        {quantity} моделі
      </span>
    </div>
  );
};

export default CategoryName;
