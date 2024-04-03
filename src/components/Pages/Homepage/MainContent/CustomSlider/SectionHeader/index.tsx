import React from "react";

interface SectionHeaderProps {
  title: string;
}

const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    <h2 className="text-dark text-[32px] leading-[38px] font-medium shrink-0">
      {title}
    </h2>
  );
};

export default SectionHeader;
