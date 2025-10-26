import React from "react";
import Image from "next/image";
import master from '../../../../public/images/workshop/master.png'
import master2 from '../../../../public/images/workshop/master2.png'
import logo from '../../../../public/images/workshop/Logo.svg'
import { useTranslation } from "next-i18next";



const WorkshopStartBanner = () => {

  const {t} = useTranslation('workshop_page')

  const itemsData = [
    {
      text: t("Профейсійний ремонт та обслугогування"),
      iconSrc: "/images/homepage/static/hero/pentagon.svg",
    },
    {
      text: t("Індивідуальний підбір та налаштування"),
      iconSrc: "/images/homepage/static/hero/pentagon.svg",
    },
    { text: t("Високоякісні запчастини та аксесуари"), iconSrc: "/images/homepage/static/hero/pentagon.svg" },
  ];

  return (
    <div className={"h-[460px] w-full flex flex-col justify-between relative"}>

      <div className={"w-1/2 flex"}>
        <span className={"text-[150px] mob:text-[50px] font-robot font-bold uppercase gradient-text from-indigo-500"}>
          {t('Майстерня')}
        </span>
      </div>

      <div className={"flex gap-2 justify-between"}>
        <div className="">
          <h1
            className="text-[40px] mob:text-[20px] font-medium text-dark pr-5 font-robot-c">
            {t('Професійний ремонт та обслуговування велосипедів')}
          </h1>
          <div className="gap-4 lg:gap-0 flex lg:block sm:pr-0 pr-5 lg:pr-0 mt-3 lg:mt-0 sm:justify-center">
            <div className="flex flex-col gap-3 lg:mt-3 sm:shrink-0 sm:max-w-[159px]">
              {itemsData.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-[6px] lg:gap-[11px] items-center"
                >
                  <Image
                    src={item.iconSrc}
                    alt={"Pentagon"}
                    width={8}
                    height={8}
                  />
                  <span className="text-dark-text text-[18px] mob:text-[14px] leading-[22px]">
                  {item.text}
                </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={"flex flex-col justify-end items-end"}>
          <Image src={logo} alt={"MasterPhoto"} width={190} height={70} />
          <Image src={master2} alt={"MasterPhoto"} width={280} height={200} />
        </div>

      </div>

    </div>
  );
};

export default WorkshopStartBanner;