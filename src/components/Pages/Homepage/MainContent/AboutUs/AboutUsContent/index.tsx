import React from "react";
import { useTranslation } from "next-i18next";

const AboutUsContent = () => {
  const {t} = useTranslation("home_page")


  return (
    <div className="bg-white lg:top-[-28px] sm:p-5 p-10 xl:pb-10 pb-[23px] xl:top-[-22px] max-w-[428px] xl:max-w-[380px] sm:max-w-full lg:absolute xl:absolute 2xl:absolute top-0 right-0 shadow-custom rounded-lg order-[-1] sm:order-[1] md:order-[1]">
      <p className="text-[#6B6B6B] sm:leading-[19.2px] text-[16px] leading-[19.2px] w-full">
        {t("В BikeLove ми прагнемо поділитися нашою страстю")}
      </p>
    </div>
  );
};

export default AboutUsContent;
