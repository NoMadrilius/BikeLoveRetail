import Image from "next/image";
import Link from "next/link";
import React from "react";
import {GenerateLink} from "@/helpers/GenerateLink";
import {useRouter} from "next/router";
import {router} from "next/client";
import {ProductCategory} from "@/dataTransferObjects/entities/ProductCategory";
import {useAppStore} from "@/store/AppStore";

interface CategoryItemProps {
  category:ProductCategory
  onClick?: () => void;
}

const CategoryItem = ({category,onClick}: CategoryItemProps) => {

  const r = useRouter()
  const as = useAppStore()
  return (
    <Link onMouseEnter={()=>{
      as.setSelectedCategory(category)
    }}
      href={GenerateLink(r, {basePath:'/catalog', queryParameters:{id:category.id}, slug:category.transliterationName})}
      onClick={onClick}
      className="flex items-center px-3 py-1 bg-white cursor-pointer "
    >
      <div className="flex items-center gap-2">
        <Image
          src={category.iconUrl||"/images/homepage/static/bike.jpg"}
          alt={"Bike"}
          width={48}
          height={48}
          className="shrink-0"
        />

        <span className="text-dark-text font-semibold leading-[19px]">
          {category.name}
        </span>
      </div>
      <Image
        src={"/images/homepage/icons/right-arrow.svg"}
        alt={"Right Arrow"}
        width={8}
        height={12}
        className="ml-auto shrink-0"
      />
    </Link>
  );
};

export default CategoryItem;
