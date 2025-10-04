import React from "react";
import CharacteristicItem from "./CharacteristicItem";
import {useProductPageStore} from "@/store/ProductPageStore";
import { useTranslation } from "next-i18next";


const CharacteristicsMobile = () => {
  const ps = useProductPageStore()
  if(ps.uniqueOptions.length < 1) return null
  const { t } = useTranslation('product_page');

  return (
    <div
      className="p-5 md2:block hidden bg-white rounded-lg"
      id="specifications"
    >
      <div className="border-b border-gray pb-4 flex flex-col gap-5">
        <h3 className="text-dark font-robot-c text-[24px] font-medium leading-[28.13px] xl:text-[32px] xl:leading-[37.5px]">
          {t("Характеристики")}
        </h3>
        <div className="flex gap-3 flex-col">
          {ps.uniqueOptions.map((item, index) => {
            let vars = ps.uniqueVariants.filter(n=>n.optionId === item.id).map(n=>n.variantName)
            return (
                <CharacteristicItem
                    key={index}
                    isLink={false}
                    linkText={vars.join(', ')}
                    href={"#"}
                    name={item.name}
                />
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default CharacteristicsMobile;
