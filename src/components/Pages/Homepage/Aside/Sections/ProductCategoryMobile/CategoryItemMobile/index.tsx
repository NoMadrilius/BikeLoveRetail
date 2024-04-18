import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GenerateLink } from "@/helpers/GenerateLink";
import { useRouter } from "next/router";
import { router } from "next/client";
import { ProductCategory } from "@/dataTransferObjects/entities/ProductCategory";
import { useAppStore } from "@/store/AppStore";
import { SvgRightIcon } from "@/components/UIKit/SVGIcons";

interface CategoryItemProps {
    category: ProductCategory;
    onClick?: () => void;
}

const CategoryItemMobile = ({ category, onClick }: CategoryItemProps) => {
    const r = useRouter();
    const as = useAppStore();

    return (
        <div
            onClick={onClick}
            className="flex items-center justify-between px-3 py-1 bg-white cursor-pointer group"
        >
            <div className="flex items-center gap-2">
                <Image
                    src={category.iconUrl || "/images/homepage/static/bike.jpg"}
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
        </div>
    );
};

export default CategoryItemMobile;
