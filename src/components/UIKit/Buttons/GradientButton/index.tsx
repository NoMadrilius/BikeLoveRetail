import Image from "next/image";
import React from "react";

interface GradientButtonProps {
  bgColor?: string;
  showIcon?: boolean;
  label: string;
  className?: string;
  textstyles?: string;
  onClick?: () => void;
}

const GradientButton = ({
  bgColor,
  showIcon = true,
  label,
  className,
  textstyles,
  onClick,
}: GradientButtonProps) => {
  const buttonStyle = bgColor
    ? { backgroundColor: bgColor }
    : {
        backgroundImage: "linear-gradient(to bottom right, #F01B74, #FF6064)",
      };

  return (
    <button
      className={`flex items-center rounded-lg gap-3 text-left font-inter py-3 px-5 leading-[19.36px] ${className}`}
      style={buttonStyle}
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
