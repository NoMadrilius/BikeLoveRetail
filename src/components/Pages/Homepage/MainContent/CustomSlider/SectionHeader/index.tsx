import React from "react";

interface SectionHeaderProps {
  title: string;
}

const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    <h2
      className="text-dark text-[24px] leading-[28px] lg:text-[32px] lg:leading-[38px] font-medium lg:max-w-[139px] sm:max-w-full xl:max-w-full lg:max-w-full 2xl:max-w-full"
      style={{ fontFamily: "Roboto-Medium" }}
    >
      {title}
    </h2>
  );
};

export default SectionHeader;
