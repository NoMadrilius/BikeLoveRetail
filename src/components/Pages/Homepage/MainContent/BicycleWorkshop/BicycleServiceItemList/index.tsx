import React from "react";
import BicycleServiceItem from "../BicycleServiceItem";

interface Item {
  src: string;
  alt: string;
  title: string;
  description: string;
}

interface BicycleServiceItemListProps {
  items: Item[];
  className?: string;
}

const BicycleServiceItemList = ({
  items,
  className,
}: BicycleServiceItemListProps) => {
  return (
    <div className={`flex flex-wrap gap-5 xl:mt-1 ${className}`}>
      {items.map((item, index) => (
        <BicycleServiceItem
          key={index}
          src={item.src}
          alt={item.alt}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default BicycleServiceItemList;
