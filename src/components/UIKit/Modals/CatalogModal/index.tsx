import { useEffect, useState } from "react";
import React from "react";
import CatalogHeader from "./CatalogHeader";
import CatalogMain from "./CatalogMain";
import CatalogMenu from "./CatalogMenu";
import { observer } from "mobx-react";
import appStore, { useAppStore } from "@/store/AppStore";
import ModalBase from "@/components/Modal/ModalBase/ModalBase";

const CatalogModal = () => {
  const as = appStore

  useEffect(()=>{
    if(as.isOpenCategories)
    as.setSelectedCategory(as.categories
      .filter((n) => n.parentId === 0)
      .sort((a, b) => b.sortOrder - a.sortOrder)[0])
  },[as.isOpenCategories])

  return (
    <ModalBase
      open={as.isOpenCategories}
      setOpen={(v) => {
        as.setIsOpenCategories(v);
      }}
    >
      <div
        className={`z-50 flex flex-row bg-white
        mob:rounded-none mob:h-screen mob:w-screen rounded-lg shadow-lg tab:absolute desc:absolute
        top-6 w-4/5 mob:flex-col`}
        onClick={(e) => e.stopPropagation()}
      >
        <CatalogHeader />
        <div className={"flex mob:hidden"}>
          <CatalogMenu isMobile={false} />
          <CatalogMain isMobile={false} />
        </div>
        <div className={"flex desc:hidden tab:hidden"}>
          {
            as.selectedCategory === null ? (
              <CatalogMenu isMobile={true} />
            ) : (
              <CatalogMain isMobile={true} />
            )
          }
        </div>
        </div>
    </ModalBase>
);
};

export default observer(CatalogModal);
