import Image from "next/image";
import React from "react";

interface GradientButtonProps {
  bgColor?: string;
  showIcon?: boolean;
  label: string;
  className?: string;
  textstyles?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const GradientButton = ({
  bgColor,
  showIcon = true,
  label,
  className,
  textstyles,
  onClick,
}: GradientButtonProps) => {
  return (
    <button
      className={`flex items-center rounded-lg gap-3 text-left font-inter py-3 px-5 leading-[19.36px] ${
        bgColor
          ? `${bgColor} `
          : `bg-gradient-to-br from-[#F01B74] to-[#FF6064] hover:from-[#FA6989] hover:to-[#FA6989] group-hover:from-[#FA6989] group-hover:to-[#FA6989]`
      } ${className}`}
      onClick={onClick}
    >
      {showIcon ? (
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
      <span className={`w-min ${textstyles} xl:hidden`}>{label}</span>
      <p className="xl:block hidden">{label}</p>
    </button>
  );
};

export default GradientButton;
