import Image from "next/image";
import React from "react";
import {useCatalogStore} from "@/store/CatalogStore";
import Link from "next/link";
import {GenerateCatalogLink} from "@/helpers/GenerateCatalogLink";

const SubCategories = () => {
  const cs  = useCatalogStore();

  if(cs.catalogState === null) return null
  if(cs.catalogState.childrens === undefined) return null
  if(cs.catalogState.childrens === null) return null
  if(cs.catalogState.childrens.length < 1) return null

  return (
    <div className="flex gap-5 overflow-auto max-w-full sm:px-5 md:px-5">
      {cs.catalogState!.childrens!.map((el) => (
        <Link className="p-2 flex flex-col gap-1 rounded-lg bg-white cursor-pointer" href={GenerateCatalogLink({id:el.id, filters:[], sort:cs.catalogState!.sortingSettings, page:1}, el.transliterationName)}>
          <Image
            src={el.iconUrl||"/images/homepage/static/by-purpose.jpg"}
            alt={""}
            width={121}
            height={66}
            className="object-cover"
          />
          <div className="px-3 pt-2">
            <span className="font-inter leading-[19.2px] text-dark-text">
              {el.name}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SubCategories;
