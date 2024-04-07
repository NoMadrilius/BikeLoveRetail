import useBurgerMenuStore from "@/store/zustand/header.store";
import Image from "next/image";
import React from "react";
import LogoImage from "../LogoImage";
import UserProfile from "../MobileHeader/UserProfile";
import CloseIcon from "./CloseIcon";

const MobileView = () => {
  const closeMenu = useBurgerMenuStore((state) => state.closeMenu);

  return (
    <div className="w-full flex flex-col gap-5 px-5">
      <div className="flex justify-between w-full py-[7px]">
        <LogoImage classname="!mx-0" />
        <CloseIcon onClick={closeMenu} />
      </div>
      <UserProfile />
    </div>
  );
};

export default MobileView;
