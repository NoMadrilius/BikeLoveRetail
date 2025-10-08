import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const BreadCrumbsUni = ({list,active}:{list:{name:string, url:string}[], active:{name:string, url:string}}) => {
  const { t } = useTranslation('common');
  return (
    <ol className={"flex text-black gap-2 p-1 overflow-x-auto overflow-y-hidden max-h-14 box-border w-full"}>
      <li className={"flex gap-2"}>
        <Link className={"cursor-pointer hover:font-bold"} href={"/"}>{t("Головна")}</Link>
        <div className={"text-neutral-500"}>/</div>
      </li>

      {list.map((i,index) => <li key={index} className={"flex gap-2"}>
        <Link className={"cursor-pointer hover:font-bold text-nowrap"}  href={i.url}>{i.name}</Link>
        <div className={"text-neutral-500"}>/</div>
      </li>)}

      <li>
      <Link className={"cursor-pointer font-bold text-nowrap"} href={active.url}>{active.name}</Link>
      </li>
    </ol>
  );
};

export default BreadCrumbsUni;