import React from "react";

interface SectionHeaderProps {
  title: string;
  titleStyles?: string;
}

const SectionHeader = ({ title, titleStyles }: SectionHeaderProps) => {
  return (
    <h2
      className={`text-dark text-[24px] font-robot-c leading-[28.13px] 
    lg:text-[32px] lg:leading-[38px] font-medium lg:max-w-[139px] sm:max-w-[139px] xl:max-w-full lg:max-w-full 2xl:max-w-full ${titleStyles}`}
    >
      {title}
    </h2>
  );
};

export default SectionHeader;
