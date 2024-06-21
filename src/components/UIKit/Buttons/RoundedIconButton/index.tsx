import React from "react";
import Image from "next/image";

interface RoundedButtonProps {
  bgColor: string;
  imageUrl?: string;
  altText?: string;
  text?: string;
  size?: number;
  onClick: (e: any) => void;
}

const RoundedButton: React.FC<RoundedButtonProps> = ({
  bgColor,
  imageUrl,
  size = 21.5,
  altText,
  text = "",
  onClick,
}: RoundedButtonProps) => {
  return (
    <button
      className={` p-[13px] rounded-full shrink-0 hover:bg-[#FA6989] ${bgColor}`}
      onClick={(e) => {
        e.stopPropagation();
        onClick(e);
      }}
    >
      {text.length === 0 && imageUrl && altText ? (
        <div className={`shrink-0 flex  size-[21.5px] xl:size-[24px]`}>
          <Image
            src={imageUrl}
            alt={altText}
            width={21.5}
            height={21.5}
            className="shrink-0 "
          />
        </div>
      ) : (
        <span className="text-white text-[16px] leading-[19px] font-semibold font-inter">
          {text}
        </span>
      )}
    </button>
  );
};

export default RoundedButton;
