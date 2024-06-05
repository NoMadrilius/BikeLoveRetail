import { truncateText } from "@/helpers/stringDecorate/truncateText";
import React, { useState, useEffect } from "react";

interface ProductTitleProps {
  text: string;
  maxCharacters?: number;
  disableBorder?: boolean;
  className?: string;
}

const ProductTitle = ({
  text,
  maxCharacters = 75,
  disableBorder = false,
  className,
}: ProductTitleProps) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const truncatedText = truncateText(text, isSmallScreen ? 35 : 55);

  return (
    <h3
      className={`text-product-card-text py-2 xl:mt-[1.75rem] lg:line-clamp-none lg:pt-[14px] min-h-[76px]  ${
        disableBorder ? "" : "border-b border-[rgb(218, 218, 218)]"
      } ${className}`}
    >
      <span className="line-clamp-5 text-[16px] leading-[19.36px] font-semibold font-inter modernWay">
        {truncatedText}
      </span>
    </h3>
  );
};

export default ProductTitle;
