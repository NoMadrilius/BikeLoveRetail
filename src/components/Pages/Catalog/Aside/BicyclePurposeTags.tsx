import React, { useState } from "react";
import { WhiteCross } from "@/components/UIKit/SVGIcons";
import Image from "next/image";

interface BicyclePurposeTagsProps {}

const BicyclePurposeTags = ({}: BicyclePurposeTagsProps) => {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const toggleSelection = (item: number) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(
        selectedItems.filter((selectedItem) => selectedItem !== item)
      );
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };
  const showImageIcon = false ? (
    <Image
      src={"/images/homepage/static/by-purpose.jpg"}
      alt={""}
      width={32}
      height={32}
      className="object-cover ml-1"
    />
  ) : null;

  return (
    <section className="flex flex-col gap-3">
      <h3 className="font-robot-c text-[24px] leading-[24px] font-bold text-t-grey">
        Призначення
      </h3>
      <div className="flex flex-wrap gap-2">
        {[1, 2, 3].map((el: number, index: number) => (
          <div
            key={index}
            className={`flex gap-1 border px-2 py-[6.5px] rounded-[100px] items-center cursor-pointer hover:border-t-grey ${
              selectedItems.includes(el) ? "border-t-grey" : "border-gray"
            }`}
            onClick={() => toggleSelection(el)}
          >
            <Image
              src={"/images/homepage/static/by-purpose.jpg"}
              alt={""}
              width={32}
              height={32}
              className="object-cover"
            />
            <span className="text-dark-text font-light leading-[19.2px]">
              text
            </span>
            {selectedItems.includes(el) && (
              <div className="bg-pink size-4 flex items-center justify-center rounded-full">
                <WhiteCross />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default BicyclePurposeTags;
