import React from "react";
import Link from "next/link";

const BreadCrumbsUni = ({list,active}:{list:{name:string, url:string}[], active:{name:string, url:string}}) => {
  return (
    <div className={"flex text-black gap-2 p-1 overflow-x-auto overflow-y-hidden max-h-14 box-border w-full"}>
      <Link className={"cursor-pointer hover:font-bold"} href={"/"}>Головна</Link>
      <div className={"text-neutral-500"}>/</div>
      {list.map((i,index) => <div key={index} className={"flex gap-2"}>
        <Link className={"cursor-pointer hover:font-bold text-nowrap"}  href={i.url}>{i.name}</Link>
        <div className={"text-neutral-500"}>/</div>
      </div>)}
      <Link className={"cursor-pointer font-bold text-nowrap"} href={active.url}>{active.name}</Link>
    </div>
  );
};

export default BreadCrumbsUni;