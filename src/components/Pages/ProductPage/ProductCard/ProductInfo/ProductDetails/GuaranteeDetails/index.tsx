import { GuaranteeIconSVG } from "@/components/UIKit/SVGIcons";
import React from "react";
import { useTranslation } from "next-i18next";

const GuaranteeDetails = () => {
  const { t } = useTranslation('product_page');

  return (
    <div className="flex flex-col gap-5" id="warranty">
      <div className="flex items-center gap-3">
        <GuaranteeIconSVG />
        <h3 className="font-robot-c font-bold text-[20px] leading-[24px] text-dark">
          {t("Гарантія")}
        </h3>
      </div>
      <div className="flex flex-col gap-3 mb-4 md:pl-10  md2:pl-0">
        <span className="text-black font-inter text-[14px] leading-[16.8px]">
          {t("Гарантія від виробника")}
        </span>
        <p className="text-black font-inter text-[14px] leading-[16.8px]">
          {t("Можливий обмін або повернення товару протягом 14 днів з моменту покупки")}
        </p>
      </div>
    </div>
  );
};

export default GuaranteeDetails;
