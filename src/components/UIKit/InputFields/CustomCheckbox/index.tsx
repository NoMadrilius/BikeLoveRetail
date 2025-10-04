import Link from "next/link";
import React, { useState } from "react";
import { useTranslation } from "next-i18next";

const CustomCheckbox = () => {
  const [isChecked, setIsChecked] = useState(false);
  const { t } = useTranslation('common');

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex items-center gap-2">
      <div
        className={`relative w-6 h-6 rounded-lg cursor-pointer ${
          isChecked ? "bg-[#F9436B]" : "border border-gray"
        }`}
        onClick={toggleCheckbox}
      >
        {isChecked && (
          <svg
            className="absolute top-1/2 right-[5px] transform -translate-y-1/2 w-4 h-4 text-white pointer-events-none"
            viewBox="0 0 20 20"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              d="M6 10l4 4 8-8"
            />
          </svg>
        )}
      </div>
      <label
        htmlFor="rememberMe"
        className="text-dark text-[14px] leading-[120%] cursor-pointer"
        onClick={toggleCheckbox}
      >
        {t("Запам’ятати мене")}
      </label>
      <Link
        href="#"
        className="text-blue ml-auto leading-[19px] cursor-pointer"
      >
        {t("Нагадати пароль")}
      </Link>
    </div>
  );
};

export default CustomCheckbox;
