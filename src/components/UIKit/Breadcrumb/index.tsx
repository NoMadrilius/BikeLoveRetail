import React from "react";
import { HomeIconSVG, RightIconSVG } from "../SVGIcons";
import Link from "next/link";

interface BreadcrumbItem {
  text: string;
  to?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <div className="flex">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-[9px] p-2">
          {index === 0 ? <HomeIconSVG /> : null}
          {item.to ? (
            <Link
              href={item.to}
              className="leading-[19.36px] font-inter text-dark-text cursor-pointer"
            >
              {item.text}
            </Link>
          ) : (
            <span className="leading-[19.36px] font-inter text-dark-text">
              {item.text}
            </span>
          )}
          {index < items.length - 1 && <RightIconSVG />}
        </div>
      ))}
    </div>
  );
};

export default Breadcrumb;
