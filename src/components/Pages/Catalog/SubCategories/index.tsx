import Image from "next/image";
import React from "react";

const SubCategories = () => {
  return (
    <div className="flex gap-5 overflow-auto max-w-full sm:px-5 md:px-5">
      {[1, 2, 3, 4].map((el) => (
        <div className="p-2 flex flex-col gap-1 rounded-lg bg-white">
          <Image
            src={"/images/homepage/static/by-purpose.jpg"}
            alt={""}
            width={121}
            height={66}
            className="object-cover"
          />
          <div className="px-3 pt-2">
            <span className="font-inter leading-[19.2px] text-dark-text">
              Підкатегорія
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubCategories;
