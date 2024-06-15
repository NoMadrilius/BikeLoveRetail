import React, { useState } from "react";
import GradientButton from "../../Buttons/GradientButton";
import HamburgerMenu from "./HamburgerMenu";
import MobileHeader from "./MobileHeader";
import MobileView from "./MobileView";
import DesktopView from "./DesktopView";
import CatalogModal from "../../Modals/CatalogModal";
import { observer } from "mobx-react";
import SearchInput from "../../InputFields/SearchInput";
import { useAppStore } from "@/store/AppStore";
import CartModal from "../../Modals/CartModal";
import SearchTableModal from "../../Modals/SearchTableModal";
import { useCartStore } from "@/store/CartStore";
import { useSearchStore } from "@/store/SearchStore";

const Header = () => {
  const as = useAppStore();
  const ss = useSearchStore();

  return (
    <>
      <header className="py-5 bg-dark px-5 sm:px-5 xl:px-10 sm:py-3 md:px-0 sm:justify-between">
        <div className="max-w-[1324px] xl:max-w-full mx-auto flex items-center gap-3 md:gap-8 sm:justify-center md:justify-center sm:gap-0 xl:gap-6 lg:gap-8 xl:justify-center">
          {as.isOpenSidebar ? (
              <MobileView />
          ) : (
              <>
              <HamburgerMenu />
            <DesktopView setIsModalOpen={() => as.setIsOpenCategories(true)} />
              </>
          )}
        </div>

      </header>

      <div className="hidden grid-cols-2 lg:hidden md:grid h-full items-center gap-3 pt-3 px-10 bg-white shadow-custom md:pt-3 md:pb-5">
        <GradientButton
          label={"Каталог товарів"}
          textstyles="!w-max"
          className="justify-center"
          onClick={() => {
            as.setIsOpenCategories(true);
          }}
        />
        <GradientButton
          bgColor="bg-[#5D5555]"
          label={"Майстерня"}
          className="justify-center"
          showIcon={false}
          type="secondary"
        />
      </div>

      <div className="sm:block hidden h-full items-center  bg-white shadow-custom px-5 py-3">
        <SearchInput
          className="sm:block w-full max-w-full"
          iconColor="#6B6B6B"
          inputStyles="border-[#DADADA]"
        />
      </div>
      {as.isOpenSidebar ? <MobileHeader /> : null}
      {ss.isOpenSearch ? <SearchTableModal /> : null}
    </>
  );
};

export default observer(Header);
