"use client"
import { UseMetaData } from "@/helpers/hooks/useMetaData";
import { colors } from "../../../../theme/colors";
import { fonts } from "../../../../theme/fonts";
import BlockWithFrame from "./components/BlockWithFrame";
import { useTranslation } from "react-i18next";
import { observer } from "mobx-react";
import {useAppStore} from "@/store/AppStore";
import { Typography } from "@mui/material";
import ContactUs from "@/components/Pages/Homepage/MainContent/ContactUs";
import React from "react";
import Map from "@/components/Pages/Homepage/MainContent/ContactUs/GoogleMap";
import Info from "@/components/Pages/Homepage/MainContent/ContactUs/Info";
import Link from "next/link";
import Image from "next/image";

const ContactsScreen = () => {
  const { t } = useTranslation("contacts_page");
  const as = useAppStore();

  return (
    <div className="w-[60vw] flex flex-col gap-10 mb-10 mob:w-screen">
      <UseMetaData title={"Контакти Щербаківського 59"}
                   description={"Наші контакти BikeLove Щербаківського 59, Київ, Нивки, 0932118930"} />

      <div itemScope itemType="http://schema.org/LocalBusiness"
        className="flex gap-5 grow w-full xl:flex-row lg:flex-row md:flex-row md:items-start flex-col items-center lg:items-start xl:items-start">
        <div className="grow lg:w-1/2 xl:w-full xl:max-w-[204.36px] sm:text-center">
          <h1 itemProp="name" className="font-bold text-[20px] leading-[24px] text-dark mb-5 font-robot-c">
            {t("Веломагазин BikeLove")}
          </h1>
          <div className="flex flex-col gap-4">
            <div>
              <span itemProp="address" itemScope itemType="http://schema.org/PostalAddress" className="text-dark font-semibold leading-[19px] flex flex-col">
                {t("Адреса:")}
                <span itemProp="streetAddress">{t("ул. Данила Щербаковского, 59")}</span>
                <div>
                  <span itemProp="addressLocality">{t("Киев")}</span>,
                  <span itemProp="addressRegion">{t("Киевская область")}</span>,
                  <span itemProp="addressCountry">{t("Украина")}</span>
                </div>
              </span>
              <div className="w-full max-w-[155px] h-[2.5px] bg-gradient-custom rounded-full mt-[6px]" />
            </div>

            <p className="flex flex-col gap-3">
              <h4 className="font-semibold text-dark text-[16px] leading-[19.36px]">
                {t("Години роботи")}
              </h4>
              <span itemProp="openingHours" content="Mo-Su 10:00-18:00" className="flex gap-3 sm:justify-center">
              <span className="font-semibold text-dark text-[16px] leading-[19.36px]">
                {t("Пн - Нд:")}{" "}
              </span>
                <span className="font-light leading-[120%] text-dark">
                10.00 - 18.00
              </span>
              </span>
              {/*
              <div className="flex gap-3 sm:justify-center">
                <span className="font-semibold text-dark text-[16px] leading-[19.36px]">
                {t("Cб - Нд:")}{" "}
              </span>
                <span className="font-light leading-[120%] text-dark">
                10.00 - 18.00
              </span>
              </div>
*/
              }
            </p>

            <p className="flex flex-col gap-3">
              <h4 className="font-semibold text-dark text-[16px] leading-[19.36px]">
              {t("Телефон")}
              </h4>
              <span itemProp="telephone"
                className="font-light leading-[120%] text-dark">
                +38(093)211-89-30
              </span>
            </p>
          </div>
        </div>


        <div className="grow lg:w-1/2 xl:max-w-[204.36px] xl:w-full shrink-0 flex flex-col">
          <h3 className="font-bold shrink-0 text-[20px] leading-[120%] text-dark mb-5 font-robot-c">
            {t("Отримати консультацію")}
          </h3>
          <div className="flex flex-col gap-3 xl:gap-5">
            <a
              href="tel:+38 (093) 211 - 89 - 30"
              className="font-bold  text-[20px] leading-[120%] text-dark font-robot-c"
            >
              +38 (093) 211 - 89 - 30
            </a>

            <p className={"flex flex-col text-neutral-500"}>Веб-сайт:
              <a className={"text-black font-bold cursor-pointer"} itemProp="url" href="https://bikelove.com.ua">https://bikelove.com.ua</a>
            </p>
            <div itemProp="geo" itemScope itemType="http://schema.org/GeoCoordinates">
              <meta itemProp="latitude" content="50.47857119713216" />
              <meta itemProp="longitude" content="30.405293941416026" />
            </div>
            <a
              href="malito:storebikelove@gmail.com"
              className="text-dark leading-[19px] font-bold cursor-pointer"
            >
              storebikelove@gmail.com
            </a>
            <div className="flex gap-5 mx-auto lg:mx-0 xl:mx-0">
              <Link href={"viber://chat?number=%2B380932118930"} className={"cursor-pointer"}>
                <Image
                  src="/images/homepage/icons/social/viber-black.svg"
                  alt="Viber"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href={"https://www.instagram.com/blcofficial/"} className={"cursor-pointer"}>
                <Image
                  src="/images/homepage/icons/social/instagram-black.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href={"https://t.me/+380932118930"} className={"cursor-pointer"}>
                <Image
                  src="/images/homepage/icons/social/telegram-black.svg"
                  alt="Telegram"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Map />
    </div>
  );
};
export default observer(ContactsScreen);
