import Image from "next/image";
import React from "react";
import {
  InCartMobileIconSVG,
  PinkArrowIconSVG,
  SpinnerIconSVG,
} from "../../SVGIcons";

interface GradientButtonProps {
  addToCart?: boolean;
  bgColor?: string;
  showIcon?: boolean;
  label: string;
  className?: string;
  textstyles?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "primary" | "secondary" | "tetrial";
}

const GradientButton = ({
  addToCart,
  bgColor,
  showIcon = true,
  label,
  className,
  textstyles,
  onClick,
  disabled = false,
  loading = false,
  type = "primary",
}: GradientButtonProps) => {
  let buttonBgClass = "";
  let textColorClass = "";

  switch (type) {
    case "primary":
      buttonBgClass = addToCart
        ? "bg-pink"
        : "rounded-lg bg-gradient-to-br from-[#F01B74] to-[#FF6064] hover:from-[#FA6989] hover:to-[#FA6989] group-hover:from-[#FA6989] group-hover:to-[#FA6989] focus:from-[#D31062] focus:to-[#DB1142]";
      break;
    case "secondary":
      buttonBgClass =
        "rounded-lg bg-[#5D5555] hover:bg-[#767070] focus:bg-[#3C3434]";
      textColorClass = "text-white";
      break;
    case "tetrial":
      buttonBgClass = "bg-transparent";
      textstyles = "active:font-bold font-normal text-black hover:text-pink";
      break;
    default:
      buttonBgClass = "";
      break;
  }

  return (
    <button
      disabled={disabled}
      className={`flex items-center justify-center sm:gap-[6px] gap-3 text-left font-inter py-[8.5px] sm:px-[14.5px] sm:py-[8.5px] px-5 leading-[19.36px] ${
        addToCart
          ? "bg-[#FA698926] rounded-full"
          : disabled
          ? "bg-gray-300 cursor-not-allowed"
          : `${buttonBgClass} ${bgColor ?? ""} ${className ?? ""}`
      }`}
      onClick={onClick}
    >
      {showIcon && !loading ? (
        <div className="p-1">
          <div className="relative size-4 flex shrink-0">
            <Image
              src={"/images/uikit/buttons/catalog.svg"}
              alt={"Каталог товарів"}
              fill
              objectFit="shrink-0"
            />
          </div>
        </div>
      ) : null}
      <span
        className={`w-min ${textstyles} xl:block font-inter ${
          addToCart
            ? "text-pink !w-auto"
            : `${textColorClass} ${loading ? "!w-auto" : ""}`
        }`}
      >
        {loading ? "Loading" : addToCart ? "В корзині" : label}
      </span>
      {loading ? <SpinnerIconSVG className="animate-spin" /> : null}
      {addToCart ? (
        <>
          <PinkArrowIconSVG />
          {/* <InCartMobileIconSVG className="sm:block hidden" /> */}
        </>
      ) : null}

      <p className="xl:hidden hidden">{label}</p>
    </button>
  );
};

export default GradientButton;
