import Image from "next/image";
import React from "react";
import { useCatalogStore } from "@/store/CatalogStore";
import Link from "next/link";
import { GenerateCatalogLink } from "@/helpers/LinkGen/GenerateCatalogLink";

const SubCategories = () => {
  const cs = useCatalogStore();

  if (cs.catalogState === null) return null;
  if (cs.catalogState.childrens === undefined) return null;
  if (cs.catalogState.childrens === null) return null;
  if (cs.catalogState.childrens.length < 1) return null;

  return (
    <div className="flex gap-5 overflow-auto max-w-full sm:px-5 px-0">
      {cs.catalogState!.childrens!.map((el) => (
        <Link key={el.id}
          className="p-2 flex flex-col gap-1 rounded-lg bg-white cursor-pointer group"
          href={GenerateCatalogLink(undefined, {
            id: el.id,
            slug: el.transliterationName,
          })}
        >
          <div className="w-[121px] h-[66px] relative">
            <Image
              src={el.iconUrl || "/images/homepage/static/by-purpose.jpg"}
              alt={""}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: "contain" }}
            />
          </div>
          <div className="pt-2 text-center">
            <span className="font-inter leading-[19.2px] text-dark-text group-hover:text-pink">
              {el.name}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SubCategories;
