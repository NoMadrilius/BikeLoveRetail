import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ProductCategory } from "@/dataTransferObjects/entities/ProductCategory";
import { useRouter } from "next/router";
import { SvgRightIcon } from "@/components/UIKit/SVGIcons";
import {useAppStore} from "@/store/AppStore";
import {observer} from "mobx-react";
import {GenerateCatalogLink} from "@/helpers/LinkGen/GenerateCatalogLink";
interface CategoryItemProps {
  category: ProductCategory;
  imageLink?: string;
  categoryType: "category" | "subcategory";
  categoryItemsLength?: number;
}

const CategoryBlockItem = ({
  category,
  imageLink,
  categoryType,
  categoryItemsLength,
}: CategoryItemProps) => {
  const isCategory = categoryType === "category";
  const r = useRouter();
  const as = useAppStore();

  return (
    <Link
      href={GenerateCatalogLink(undefined,{id:category.id, slug:category.transliterationName},)}
      className={`flex items-center justify-between px-3 py-1 bg-white cursor-pointer group ${
        categoryItemsLength === 0 ? "py-1" : ""
      }`}
      onClick={()=>{
        as.setIsOpenCategories(false)
        as.setIsOpenSidebar(false);
      }}
    >
      <div className="flex items-center gap-2">
        {!isCategory || categoryItemsLength === 0 ? (
          <Image
            src={imageLink ? imageLink : "/images/homepage/static/bike.jpg"}
            alt={"Bike"}
            width={48}
            height={48}
            className="shrink-0"
          />
        ) : null}

        <span
          className={`group-hover:text-link-pink font-${
            isCategory ? "semibold" : "normal text-[#6B6B6B]"
          } leading-[19px] ${
            isCategory ? "text-dark-text" : "text-[#6B6B6B]"
          } `}
        >
          {category.name}
        </span>
      </div>
      {isCategory ? (
        <>
          <SvgRightIcon className="group-hover:hidden block" />
          <SvgRightIcon color="#F9436B" className="group-hover:block hidden" />
        </>
      ) : null}
    </Link>
  );
};

export default observer(CategoryBlockItem);
