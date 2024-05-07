import React, { useState } from "react";
import { LeftIconSVG, RightIconSVG } from "../SVGIcons";
import {useCatalogStore} from "@/store/CatalogStore";
import Link from "next/link";
import {GenerateCatalogLink} from "@/helpers/LinkGen/GenerateCatalogLink";

const Pagination = () => {
    const cs = useCatalogStore()
    const state = cs.catalogState!

  const currentPage = state.page
  const totalPages = state.totalPages;

  const renderPaginationItems = () => {
    const paginationItems = [];

    paginationItems.push(
      <Link
        key={1}
        className={`size-6 cursor-pointer ${
          currentPage === 1
            ? "text-white"
            : "text-dark-text hover:bg-[#C1C1C133] rounded-lg"
        } font-inter leading-[19.36px] flex items-center justify-center rounded ${
          currentPage === 1
            ? "bg-gradient-to-br from-[#F01B74] to-[#FF6064] hover:from-[#FA6989] hover:to-[#FA6989]"
            : "bg-transparent"
        }`}
        href={GenerateCatalogLink(state, {page:1})}
      >
        1
      </Link>
    );

    if (currentPage > 4) {
      paginationItems.push(<div key="text-black">...</div>);
    }

    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(totalPages - 2, currentPage + 1);
      i++
    ) {
      paginationItems.push(
        <Link
          key={i}
          className={`size-6 cursor-pointer ${
            currentPage === i
              ? "text-white"
              : "text-dark-text hover:bg-[#C1C1C133] rounded-lg"
          } font-inter leading-[19.36px] flex items-center justify-center rounded ${
            currentPage === i
              ? "bg-gradient-to-br from-[#F01B74] to-[#FF6064] hover:from-[#FA6989] hover:to-[#FA6989]"
              : "bg-transparent"
          }`}
          href={GenerateCatalogLink(state, {page:i})}
        >
          {i}
        </Link>
      );
    }

    if (currentPage < totalPages - 3) {
      paginationItems.push(<div key="text-black">...</div>);
    }

    for (let i = Math.max(totalPages - 1, 2); i <= totalPages; i++) {
      paginationItems.push(
        <Link
          key={i}
          className={`size-6 cursor-pointer ${
            currentPage === i
              ? "text-white"
              : "text-dark-text hover:bg-[#C1C1C133] rounded-lg"
          } font-inter leading-[19.36px] flex items-center justify-center rounded ${
            currentPage === i
              ? "bg-gradient-to-br from-[#F01B74] to-[#FF6064] hover:from-[#FA6989] hover:to-[#FA6989]"
              : "bg-transparent"
          }`}
          href={GenerateCatalogLink(state, {page:i})}
        >
          {i}
        </Link>
      );
    }

    return paginationItems;
  };

  return (
    <div className="flex items-center gap-1 mx-auto">
      <Link
        className="p-2 hover:bg-[#C1C1C133] rounded-lg cursor-pointer"
        href={GenerateCatalogLink(state, {page:state.page-1})}
      >
        <LeftIconSVG />
      </Link>
      <div className="flex items-center">{renderPaginationItems()}</div>
      <Link
        className="p-2 hover:bg-[#C1C1C133] rounded-lg cursor-pointer"
        href={GenerateCatalogLink(state, {page:state.page===state.totalPages?state.page:state.page+1})}
      >
        <RightIconSVG />
      </Link>
    </div>
  );
};

export default Pagination;
