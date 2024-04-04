import useBurgerMenuStore from "@/store/zustand/header.store";
import React from "react";
import CloseIcon from "../../../MobileView/CloseIcon";

interface AuthHeaderProps {
  title: string;
}

const AuthHeader = ({ title }: AuthHeaderProps) => {
  const togleAuthMenu = useBurgerMenuStore((state) => state.togleAuthMenu);
  return (
    <div className="flex items-center px-5 py-5 border border-b-category-border justify-between">
      <h3 className="text-[20px] font-bold leading-[120%] text-dark-text">
        {title}
      </h3>
      <CloseIcon
        imgSrc="/images/homepage/icons/black-cross.svg"
        onClick={togleAuthMenu}
      />
    </div>
  );
};

export default AuthHeader;
