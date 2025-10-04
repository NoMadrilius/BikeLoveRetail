import { ArrowCheckIcon, ClockOrderIconSVG } from "@/components/UIKit/SVGIcons";
import React from "react";
import { useTranslation } from "next-i18next";

const Instock = ({
  className,
  stockType = "inStore",
}: {
  className?: string;
  stockType?: string;
}) => {
  let icon, text, textClass;

  const { t } = useTranslation('product_page',);


  switch (stockType) {
    case "InShop":
      icon = <ArrowCheckIcon />;
      text = t("Є в магазині");
      textClass = "text-red-500";
      break;
    case "Shop":
      icon = <ArrowCheckIcon />;
      text = t("Є в магазині");
      textClass = "text-red-500";
      break;
    case "inWarehouse":
      icon = <ArrowCheckIcon />;
      text = t("Є на складі");
      textClass = "text-black";
      break;
    case "Wharehouse":
      icon = <ArrowCheckIcon />;
      text = t("Є на складі");
      textClass = "text-black";
      break;
    case "orderFromSupplier":
      icon = <ClockOrderIconSVG />;
      text = t("Замовити у постачальника");
      textClass = "text-black";
      break;
    case "outOfStock":
      icon = null;
      text = t("Немає в наявності");
      textClass = "text-t-grey";
      break;
    case "NotInStock":
      icon = null;
      text = "Немає в наявності";
      textClass = "text-t-grey";
      break;
    default:
      icon = null;
      text = "";
      textClass = "";
  }

  return (
    <div
      className={`flex items-center gap-2 mt-2 xl:pt-[11px] xl:mt-2 lg:mt-5 ${className}`}
    >
      {icon && <span>{icon}</span>}
      <span
        className={`text-product-card-text text-[14px] sm:leading-[16.8px] leading-[120%] pt-[3px] ${textClass}`}
      >
        {text}
      </span>
    </div>
  );
};

export default Instock;
