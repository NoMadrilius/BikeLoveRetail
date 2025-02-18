import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Link from "next/link";
import { observer } from "mobx-react";
import { LeftIconSVG, RightIconSVG } from "@/components/UIKit/SVGIcons";

const Pagination = (p: { pageList: string[]; selected: number }) => {
  const PaginationLabel = (n: number) =>
    <Link
      className={p.selected===n?`p-1 cursor-pointer text-white font-inter leading-[19.36px] flex items-center justify-center rounded bg-gradient-to-br from-[#F01B74] to-[#FF6064] hover:from-[#FA6989] hover:to-[#FA6989]`:
        `p-1 cursor-pointer text-dark-text hover:bg-[#C1C1C133] font-inter leading-[19.36px] flex items-center justify-center rounded bg-transparent`}
      href={p.pageList[n - 1] || "/"}
    >
      {n}
    </Link>

  const Space = <div className={"text-black"}>...</div>;

  const Next = (
    <Link
      className="p-3 cursor-pointer"
      href={
        (p.pageList[p.selected + 1] || p.pageList[p.pageList.length - 1]) ?? "/"
      }
    >
      <RightIconSVG className="group-hover:bg-[#C1C1C133] rounded-md" />
    </Link>
  );

  const Prev = (
    <a
      className="p-3 cursor-pointer"
      href={(p.pageList[p.selected - 1] || p.pageList[0]) ?? "/"}
    >
      <LeftIconSVG className="group-hover:bg-[#C1C1C133] rounded-md" />
    </a>
  );

  return (
    <ReactPaginate
      className={"flex items-center gap-1 mx-auto"}
      breakLabel={Space}
      nextLabel={Next}
      previousLabel={Prev}
      pageLabelBuilder={PaginationLabel}
      pageRangeDisplayed={5}
      pageCount={p.pageList.length || 0}
      renderOnZeroPageCount={null}
      forcePage={p.selected}
    />
  );
};

export default observer(Pagination);
