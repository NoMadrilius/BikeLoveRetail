import React from "react";
import LogoImage from "../LogoImage";
import UserProfile from "../MobileHeader/UserProfile";
import CloseIcon from "./CloseIcon";
import { useAppStore } from "@/store/AppStore";

const MobileView = () => {
  const as = useAppStore();
  return (
    <div className="w-full flex flex-col gap-5 px-5">
      <div className="flex justify-between w-full py-[7px]">
        <LogoImage classname="!mx-0" />
        <CloseIcon
          onClick={() => {
            as.setIsOpenCategories(false);
            as.setIsOpenSidebar(false)
            //store.closeMenu();
          }}
        />
      </div>
      <UserProfile />
    </div>
  );
};

export default MobileView;
