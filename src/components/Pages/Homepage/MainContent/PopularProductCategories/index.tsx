import Image from "next/image";
import React from "react";
import NavigationButtons from "../CustomSlider/NavigationButtons";

const PopularProductCategories = () => {
  return (
    <section>
      <NavigationButtons
        justShowTitle={true}
        title={"Популярні категорії товарів"}
      />
      <div className="flex flex-col gap-5">
        <div>
          <div className="flex gap-5">
            <div className="bg-white flex items-center justify-center relative w-full max-w-[232px] rounded-lg overflow-hidden">
              <div className="relative w-full max-w-[232px] h-[170px]">
                <Image
                  src="/images/homepage/static/popular-item.jpg"
                  alt="Popular Item"
                  fill
                />
              </div>

              <div className="absolute bottom-0 z-[2] py-[10.5px] px-[20px] bg-[#2C2727CC] w-full">
                <p className="text-white font-semibold leading-[19px]">Text</p>
              </div>
            </div>
            <div className="bg-white flex items-center justify-center relative w-full max-w-[232px] rounded-lg overflow-hidden">
              <div className="relative w-full max-w-[232px] h-[170px]">
                <Image
                  src="/images/homepage/static/popular-item.jpg"
                  alt="Popular Item"
                  fill
                />
              </div>

              <div className="absolute bottom-0 z-[2] py-[10.5px] px-[20px] bg-[#2C2727CC] w-full">
                <p className="text-white font-semibold leading-[19px]">Text</p>
              </div>
            </div>
            <div className="bg-white flex items-center justify-center relative w-full  rounded-lg overflow-hidden">
              <div className="relative w-full max-w-[232px] h-[170px]">
                <Image
                  src="/images/homepage/static/popular-item.jpg"
                  alt="Popular Item"
                  fill
                />
              </div>

              <div className="absolute bottom-0 z-[2] py-[10.5px] px-[20px] bg-[#2C2727CC] w-full">
                <p className="text-white font-semibold leading-[19px]">Text</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-5">
            <div className="bg-white flex items-center justify-center relative w-full  rounded-lg overflow-hidden">
              <div className="relative w-full max-w-[232px] h-[170px]">
                <Image
                  src="/images/homepage/static/popular-item.jpg"
                  alt="Popular Item"
                  fill
                />
              </div>

              <div className="absolute bottom-0 z-[2] py-[10.5px] px-[20px] bg-[#2C2727CC] w-full">
                <p className="text-white font-semibold leading-[19px]">Text</p>
              </div>
            </div>
            <div className="bg-white flex items-center justify-center relative w-full max-w-[232px] rounded-lg overflow-hidden">
              <div className="relative w-full max-w-[232px] h-[170px]">
                <Image
                  src="/images/homepage/static/popular-item.jpg"
                  alt="Popular Item"
                  fill
                />
              </div>

              <div className="absolute bottom-0 z-[2] py-[10.5px] px-[20px] bg-[#2C2727CC] w-full">
                <p className="text-white font-semibold leading-[19px]">Text</p>
              </div>
            </div>
            <div className="bg-white flex items-center justify-center relative w-full max-w-[232px] rounded-lg overflow-hidden">
              <div className="relative w-full max-w-[232px] h-[170px]">
                <Image
                  src="/images/homepage/static/popular-item.jpg"
                  alt="Popular Item"
                  fill
                />
              </div>

              <div className="absolute bottom-0 z-[2] py-[10.5px] px-[20px] bg-[#2C2727CC] w-full">
                <p className="text-white font-semibold leading-[19px]">Text</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularProductCategories;
