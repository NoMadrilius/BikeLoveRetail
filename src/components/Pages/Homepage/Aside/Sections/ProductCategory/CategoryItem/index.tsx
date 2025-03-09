import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { ProductCategory } from "@/dataTransferObjects/entities/ProductCategory";
import { useAppStore } from "@/store/AppStore";
import { SvgRightIcon } from "@/components/UIKit/SVGIcons";
import {GenerateCatalogLink} from "@/helpers/LinkGen/GenerateCatalogLink";
import { Category } from "@/dataTransferObjects/internal/AppState";

interface CategoryItemProps {
  category: Category;
  onClick?: () => void;
}

const CategoryItem = ({ category, onClick }: CategoryItemProps) => {
  const r = useRouter();
  const as = useAppStore();

  return (
    <Link
      onMouseEnter={() => {
        as.setSelectedCategory(category);
      }}
      href={category?.url??"/"}
      onClick={onClick}
      className="flex items-center justify-between px-3 py-1 bg-white cursor-pointer group"
    >
      <div className="flex items-center gap-2">
        <Image
          src={category.image || "/images/homepage/static/bike.jpg"}
          alt={"Bike"}
          width={48}
          height={48}
          className="shrink-0"
        />

        <span
          className={`text-dark-text font-semibold leading-[19px] group-hover:text-link-pink`}
        >
          {category.name}
        </span>
      </div>

      <SvgRightIcon className="group-hover:hidden block" />
      <SvgRightIcon color="#F9436B" className="group-hover:block hidden" />
    </Link>
  );
};

export default CategoryItem;
