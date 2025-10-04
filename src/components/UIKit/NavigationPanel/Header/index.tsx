"use client";
import GradientButton from "../../Buttons/GradientButton";
import MobileHeader from "./MobileHeader";
import MobileView from "./MobileView";
import DesktopView from "./DesktopView";
import { observer } from "mobx-react";
import SearchInput from "../../InputFields/SearchInput";
import { useAppStore } from "@/store/AppStore";
import SearchTableModal from "../../Modals/SearchTableModal";
import { useSearchStore } from "@/store/SearchStore";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const Header = () => {
  const as = useAppStore();
  const ss = useSearchStore();
  const {t} = useTranslation("common")

  return (
    <>
      <header className="py-5 bg-dark flex justify-center">
        <div className="flex justify-between w-full mob:px-[20px] tab:px-[40px] desc:w-[1324px]">
          {as.isOpenSidebar ? <MobileView /> : <DesktopView setIsModalOpen={() => as.setIsOpenCategories(true)} />}
        </div>
      </header>

      <div className="hidden grid-cols-2 lg:hidden md:grid h-full items-center gap-3 pt-3 px-10 bg-white shadow-custom md:pt-3 md:pb-5">
        <GradientButton
          label={t("Каталог товарів")}
          textstyles="!w-max"
          className="justify-center"
          onClick={() => {
            as.setIsOpenCategories(true);
          }}
        />
        <Link href={'/workshop'}>
          <GradientButton
            bgColor="bg-[#5D5555]"
            label={t("Майстерня")}
            className="justify-center"
            showIcon={false}
            type="secondary"
          />
        </Link>
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
