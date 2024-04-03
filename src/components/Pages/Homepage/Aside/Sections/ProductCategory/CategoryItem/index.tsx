import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CategoryItemProps {
  categoryName: string;
  imageLink: string;
}

const CategoryItem = ({ categoryName, imageLink }: CategoryItemProps) => {
  return (
    <Link
      href={imageLink}
      className="flex items-center px-3 py-1 bg-white cursor-pointer"
    >
      <div className="flex items-center gap-2">
        <Image
          src={"/images/homepage/static/bike.jpg"}
          alt={"Bike"}
          width={48}
          height={48}
          className="shrink-0"
        />

        <span className="text-dark-text font-semibold leading-[19px]">
          {categoryName}
        </span>
      </div>
      <Image
        src={"/images/homepage/icons/right-arrow.svg"}
        alt={"Right Arrow"}
        width={6}
        height={12}
        className="ml-auto shrink-0"
      />
    </Link>
  );
};

export default CategoryItem;
