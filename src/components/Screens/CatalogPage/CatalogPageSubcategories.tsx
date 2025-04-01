import React from "react";
import Link from "next/link";
import { GenerateCatalogLink } from "@/helpers/LinkGen/GenerateCatalogLink";
import Image from "next/image";
import { CatalogPageCategory } from "@/dataTransferObjects/response/catalogPage/CatalogPageCategory";

const CatalogPageSubcategories = ({cats}:{cats:CatalogPageCategory[]}) => {


  return (
    <div className="flex gap-5 overflow-auto max-w-full px-0">
      {cats.map((el) => (
        <Link key={el.id}
              className="p-2 flex flex-col gap-1 justify-between rounded bg-white hover:font-bold cursor-pointer w-[140px] h-[200px] relative shrink-0 grow-0"
              href={el.url}
        >
          <div className={"w-full h-3/5 relative"}>
            <Image
              src={el.image || "/images/homepage/static/by-purpose.jpg"}
              alt={el.name} fill
              className="object-cover"
            />
          </div>

          <span className="font-inter leading-[19.2px] text-dark-text group-hover:text-pink text-center">
              {el.name}
            </span>
        </Link>
      ))}
    </div>
  );
};

export default CatalogPageSubcategories;