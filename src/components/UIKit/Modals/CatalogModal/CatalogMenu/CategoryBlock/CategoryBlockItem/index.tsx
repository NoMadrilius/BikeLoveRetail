import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CategoryItemProps {
  categoryName: string;
  imageLink: string;
  categoryType: "category" | "subcategory";
}

const CategoryBlockItem = ({
  categoryName,
  imageLink,
  categoryType,
}: CategoryItemProps) => {
  const isCategory = categoryType === "category";

  return (
    <Link
      href={imageLink}
      className="flex items-center px-3 py-1 bg-white cursor-pointer last:border-solid last:border last:border-b-gray"
    >
      <div className="flex items-center gap-2">
        {!isCategory ? (
          <Image
            src={"/images/homepage/static/bike.jpg"}
            alt={"Bike"}
            width={48}
            height={48}
            className="shrink-0"
          />
        ) : null}

        <span
          className={`font-${
            isCategory ? "semibold" : "normal text-[#6B6B6B]"
          } leading-[19px] ${
            isCategory ? "text-dark-text" : "text-[#6B6B6B]"
          } `}
        >
          {categoryName}
        </span>
      </div>
      {isCategory ? (
        <Image
          src={"/images/homepage/icons/right-arrow.svg"}
          alt={"Right Arrow"}
          width={8}
          height={12}
          className="ml-auto shrink-0"
        />
      ) : null}
    </Link>
  );
};

export default CategoryBlockItem;
