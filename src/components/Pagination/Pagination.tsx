import React, {useState} from 'react';
import ReactPaginate from "react-paginate";
import s from './Pagination.module.scss'
import Link from "next/link";

const Pagination = (p: { pageList: string[], selected:number })=> {

    const PaginationLabel = (n: number) =>
        <Link className={p.selected === n ? s.labelSel : s.label} href={p.pageList[n-1]||"/kekw"}>
            {n}
        </Link>

    const Space = <Link className={s.label} href={p.pageList[p.selected+5]||"/kekw"}>...</Link>
    const Next = <Link className={s.label} href={p.pageList[p.selected+1]||"/kekw"}>{"=>"}</Link>
    const Prev = <Link className={s.label} href={p.pageList[p.selected-1]||"/kekw"}>{"<="}</Link>

    return (
        <ReactPaginate
            className={s.wrapper}
            breakLabel={Space}
            nextLabel={Next}
            pageLabelBuilder={PaginationLabel}
            pageRangeDisplayed={5}
            pageCount={p.pageList.length||0}
            previousLabel={Prev}
            renderOnZeroPageCount={null}
            forcePage={p.selected}
        />
    );
};

export default Pagination;