import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { ProductCategory } from "@/dataTransferObjects/entities/ProductCategory";
import { useAppStore } from "@/store/AppStore";
import { SvgRightIcon } from "@/components/UIKit/SVGIcons";
import { Category } from "@/dataTransferObjects/internal/AppState";

interface CategoryItemProps {
  category: Category;
  onClick?: () => void;
}

const CategoryItemMobile = ({ category, onClick }: CategoryItemProps) => {
  const r = useRouter();
  const as = useAppStore();

  return (
    <div
      onClick={onClick}
      className="flex items-center justify-between px-3 py-1 bg-white cursor-pointer group sm:px-0 md:px-0 "
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
          className={`text-dark-text font-semibold leading-[19px] group-hover:text-link-pink md:max-w-[243px] sm:max-w-[243px]`}
        >
          {category.name}
        </span>
      </div>

      <SvgRightIcon className="group-hover:hidden block" />
      <SvgRightIcon color="#F9436B" className="group-hover:block hidden" />
    </div>
  );
};

export default CategoryItemMobile;
