import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ProductCategory } from "@/dataTransferObjects/entities/ProductCategory";
import { GenerateLink } from "@/helpers/GenerateLink";
import { useRouter } from "next/router";

interface CategoryItemProps {
  category: ProductCategory;
  imageLink?: string;
  categoryType: "category" | "subcategory";
}

const CategoryBlockItem = ({
  category,
  imageLink,
  categoryType,
}: CategoryItemProps) => {
  const isCategory = categoryType === "category";
  const r = useRouter();
  return (
    <Link
      href={GenerateLink(r, {
        basePath: "/catalog",
        queryParameters: { id: category.id },
        slug: category.transliterationName,
      })}
      className="flex items-center px-3 py-1 bg-white cursor-pointer"
    >
      <div className="flex items-center gap-2">
        {!isCategory ? (
          <Image
            src={imageLink ? imageLink : "/images/homepage/static/bike.jpg"}
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
          {category.name}
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
