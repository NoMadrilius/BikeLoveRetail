import Image from "next/image";
import React from "react";
import NavigationButtons from "../CustomSlider/NavigationButtons";

const PopularProductCategories = () => {
  return (
    <section className="sm:-mt-[5px] xl:mt-[7px]">
      <NavigationButtons
        justShowTitle={true}
        title={"Популярні категорії товарів"}
        titleStyles="!max-w-full"
      />
      <div className="flex flex-col gap-5 sm:gap-4">
        <div>
          <div className="flex gap-5 sm:gap-4 flex-col md:flex-row xl:flex-row lg:flex-row 2xl:flex-row">
            <div className="flex gap-5 sm:gap-4 w-full">
              <div className="bg-white flex items-center justify-center relative w-full max-w-[232px] sm:max-w-full rounded-lg overflow-hidden">
                <div className="relative w-full max-w-[232px] h-[170px]">
                  <Image
                    src="/images/homepage/static/popular-item.jpg"
                    alt="Popular Item"
                    fill
                  />
                </div>

                <div className="absolute bottom-0 z-[2] py-[10.5px] px-[20px] bg-[#2C2727CC] w-full">
                  <p className="text-white font-semibold leading-[19px]">
                    Захист
                  </p>
                </div>
              </div>
              <div className="bg-white flex items-center justify-center relative w-full max-w-[232px] sm:max-w-full rounded-lg overflow-hidden">
                <div className="relative w-full max-w-[232px] h-[170px]">
                  <Image
                    src="/images/homepage/static/popular-item.jpg"
                    alt="Popular Item"
                    fill
                  />
                </div>

                <div className="absolute bottom-0 z-[2] py-[10.5px] px-[20px] bg-[#2C2727CC] w-full">
                  <p className="text-white font-semibold leading-[19px]">
                    Інструменти
                  </p>
                </div>
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
                <p className="text-white font-semibold leading-[19px]">
                  Догляд за велосипедом
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-5 sm:gap-4 flex-col md:flex-row xl:flex-row lg:flex-row 2xl:flex-row">
            <div className="bg-white flex items-center justify-center relative w-full  rounded-lg overflow-hidden">
              <div className="relative w-full max-w-[232px] h-[170px]">
                <Image
                  src="/images/homepage/static/popular-item.jpg"
                  alt="Popular Item"
                  fill
                />
              </div>

              <div className="absolute bottom-0 z-[2] py-[10.5px] px-[20px] bg-[#2C2727CC] w-full">
                <p className="text-white font-semibold leading-[19px]">
                  Сідла для велосипедів
                </p>
              </div>
            </div>
            <div className="flex gap-5 sm:gap-4 w-full order-[-1] md:order-1 xl:order-1 lg:order-1 2xl:order-1">
              <div className="bg-white flex items-center justify-center relative w-full max-w-[232px] sm:max-w-full rounded-lg overflow-hidden">
                <div className="relative w-full max-w-[232px] h-[170px]">
                  <Image
                    src="/images/homepage/static/popular-item.jpg"
                    alt="Popular Item"
                    fill
                  />
                </div>

                <div className="absolute bottom-0 z-[2] py-[10.5px] px-[20px] bg-[#2C2727CC] w-full">
                  <p className="text-white font-semibold leading-[19px]">
                    Велосипедне світло
                  </p>
                </div>
              </div>
              <div className="bg-white flex items-center justify-center relative w-full max-w-[232px] sm:max-w-full rounded-lg overflow-hidden">
                <div className="relative w-full max-w-[232px] h-[170px]">
                  <Image
                    src="/images/homepage/static/popular-item.jpg"
                    alt="Popular Item"
                    fill
                  />
                </div>

                <div className="absolute bottom-0 z-[2] py-[10.5px] px-[20px] bg-[#2C2727CC] w-full">
                  <p className="text-white font-semibold leading-[19px]">
                    Педалі
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularProductCategories;
