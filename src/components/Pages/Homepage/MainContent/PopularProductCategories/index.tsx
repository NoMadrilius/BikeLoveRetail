import Image from "next/image";
import React from "react";
import NavigationButtons from "../CustomSlider/NavigationButtons";
import { useAppStore } from "@/store/AppStore";
import { observer } from "mobx-react";
import { useRouter } from "next/router";
import { GenerateCatalogLink } from "@/helpers/LinkGen/GenerateCatalogLink";
import Link from "next/link";

const PopularProductCategories = () => {
  const as = useAppStore();
  const r = useRouter();

  const cats = [0, 1, 2, 3, 4, 5].map((n, index) => {
    let set = as.popularCategories[index];
    let cat = as.categories.find((g) => g.id === set);
    if(!cat) return null
    return {
      name: cat.name,
      link: cat.url,
      img: cat.image,
    };
  }).filter(n=>n!=null);

  console.log("popular", cats);
  if (!cats) return null;
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
              <Link
                href={cats[0]?.link|| "/"}
                className="bg-white flex items-center justify-center relative w-full max-w-[232px] sm:max-w-full rounded-lg overflow-hidden group cursor-pointer"
              >
                <div className="relative w-full max-w-[232px] h-[170px]">
                  <Image
                    src={cats[0]?.img || "/"}
                    alt="Popular Item"
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="absolute bottom-0 z-[2] py-[10.5px] px-[20px] bg-[#2C2727CC] w-full">
                  <p className="text-white font-semibold leading-[19px] group-hover:text-link-pink">
                    {cats[0]?.name}
                  </p>
                </div>
              </Link>
              <Link
                href={cats[1]?.link|| "/"}
                className="bg-white flex items-center justify-center relative w-full max-w-[232px] sm:max-w-full rounded-lg overflow-hidden group cursor-pointer"
              >
                <div className="relative w-full max-w-[232px] h-[170px]">
                  <Image
                    src={cats[1]?.img || "/"}
                    alt="Popular Item"
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="absolute bottom-0 z-[2] py-[10.5px] px-[20px] bg-[#2C2727CC] w-full">
                  <p className="text-white font-semibold leading-[19px] group-hover:text-link-pink">
                    {cats[1]?.name}
                  </p>
                </div>
              </Link>
            </div>
            <Link
              href={cats[2]?.link|| "/"}
              className="bg-white flex items-center justify-center relative w-full rounded-lg overflow-hidden group cursor-pointer"
            >
              <div className="relative w-full max-w-[232px] h-[170px]">
                <Image
                  src={cats[2]?.img || "/"}
                  alt="Popular Item"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="absolute bottom-0 z-[2] py-[10.5px] px-[20px] bg-[#2C2727CC] w-full">
                <p className="text-white font-semibold leading-[19px] group-hover:text-link-pink">
                  {cats[2]?.name}
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div>
          <div className="flex gap-5 sm:gap-4 flex-col md:flex-row xl:flex-row lg:flex-row 2xl:flex-row">
            <Link
              href={cats[3]?.link|| "/"}
              className="bg-white flex items-center justify-center relative w-full  rounded-lg overflow-hidden group cursor-pointer"
            >
              <div className="relative w-full max-w-[232px] h-[170px]">
                <Image
                  src={cats[3]?.img || "/"}
                  alt="Popular Item"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="absolute bottom-0 z-[2] py-[10.5px] px-[20px] bg-[#2C2727CC] w-full">
                <p className="text-white font-semibold leading-[19px] group-hover:text-link-pink">
                  {cats[3]?.name}
                </p>
              </div>
            </Link>
            <div className="flex gap-5 sm:gap-4 w-full order-[-1] md:order-1 xl:order-1 lg:order-1 2xl:order-1">
              <Link
                href={cats[4]?.link|| "/"}
                className="bg-white flex items-center justify-center relative w-full max-w-[232px] sm:max-w-full rounded-lg overflow-hidden group cursor-pointer"
              >
                <div className="relative w-full max-w-[232px] h-[170px]">
                  <Image
                    src={cats[4]?.img || "/"}
                    alt="Popular Item"
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="absolute bottom-0 z-[2] py-[10.5px] px-[20px] bg-[#2C2727CC] w-full">
                  <p className="text-white font-semibold leading-[19px] group-hover:text-link-pink">
                    {cats[4]?.name}
                  </p>
                </div>
              </Link>
              <Link
                href={cats[5]?.link|| "/"}
                className="bg-white flex items-center justify-center relative w-full max-w-[232px] sm:max-w-full rounded-lg overflow-hidden group cursor-pointer"
              >
                <div className="relative w-full max-w-[232px] h-[170px]">
                  <Image
                    src={cats[5]?.img || "/"}
                    alt="Popular Item"
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="absolute bottom-0 z-[2] py-[10.5px] px-[20px] bg-[#2C2727CC] w-full">
                  <p className="text-white font-semibold leading-[19px] group-hover:text-link-pink">
                    {cats[5]?.name}
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default observer(PopularProductCategories);
