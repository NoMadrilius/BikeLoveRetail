import useBurgerMenuStore from "@/store/zustand/header.store";
import React from "react";

const HamburgerMenu = () => {
  const openMenu = useBurgerMenuStore((state) => state.openMenu);

  return (
    <button
      className="text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none p-3 sm2:hidden block"
      onClick={openMenu}
    >
      <svg
        className="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  );
};

export default HamburgerMenu;
