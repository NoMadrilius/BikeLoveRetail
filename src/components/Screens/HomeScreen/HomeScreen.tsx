import SelectionOfBicycle from "@/components/Pages/Homepage/Aside/Sections/SelectionOfBicycle";
import AboutUs from "@/components/Pages/Homepage/MainContent/AboutUs";
import BicyclesByPurpose from "@/components/Pages/Homepage/MainContent/BicyclesByPurpose";
import BicycleWorkshop from "@/components/Pages/Homepage/MainContent/BicycleWorkshop";
import CommonQuestions from "@/components/Pages/Homepage/MainContent/CommonQuestions";
import ContactUs from "@/components/Pages/Homepage/MainContent/ContactUs";
import CustomSlider from "@/components/Pages/Homepage/MainContent/CustomSlider";
import Feedbacks from "@/components/Pages/Homepage/MainContent/Feedbacks";
import Hero from "@/components/Pages/Homepage/MainContent/Hero";
import PopularProductCategories from "@/components/Pages/Homepage/MainContent/PopularProductCategories";
import WhyToChooseUs from "@/components/Pages/Homepage/MainContent/WhyToChooseUs";
import GradientButton from "@/components/UIKit/Buttons/GradientButton";
import { observer } from "mobx-react";
import { useAppStore } from "@/store/AppStore";
import React, { useEffect, useTransition } from "react";
import Aside from "@/components/Pages/Homepage/Aside";
import {UseMetaData} from "@/helpers/hooks/useMetaData";
import Link from "next/link";
import { AppState } from "@/dataTransferObjects/internal/AppState";
import { useTranslation } from "next-i18next";
import { Button } from "@mui/material";

const HomeScreen = ({state}:{state:AppState}) => {
  const as = useAppStore();
  const {t} = useTranslation("home_page")
  if (as.isOpenSidebar) return null;

  return (
    <div className="w-full flex gap-[32px]">
      <Aside />
      <UseMetaData
          title={t("Веломагазин BikeLove. Велосипеди, аксесуари, запчастини.")}
          img={"/favicon.ico"}
          description={"BikeLove - ваш надійний веломагазин у Києві! Пропонуємо широкий асортимент велосипедів, аксесуарів та запчастин. Професійне обслуговування, вигідні ціни та знижки. Завітайте до нас та відчуйте справжню любов до велосипедів!"}
      />
      <div className="font-inter w-full flex flex-col gap-10 desc:gap-[52px]">
        <div className="flex flex-col gap-10 lg:gap-[52px] xl:gap-[52px] sm:px-5 md:pl-0 md:px-0 xl:pl-8 pl-8 lg:pl-0">
          <Hero />
          <div className="md:hidden xl:hidden lg:hidden 2xl:hidden flex gap-3 sm:justify-center relative z-[20]">
            <Button onClick={() => as.setIsOpenCategories(true)} variant={"contained"}>{t("Каталог товарів")}</Button>
            <Link href={`/workshop`}>
              <Button variant={"contained"}>{t("Майстерня")}</Button>
            </Link>
          </div>
          <WhyToChooseUs />
          <CustomSlider
            products={state.trendingProducts}
            title={"Топ продаж"}
            rightText={"Більше пропозицій"}
          />
          <SelectionOfBicycle className="xl:hidden lg:hidden" />
          <PopularProductCategories />
          <CustomSlider
            products={state.salesProducts}
            title={"Акційні пропозиції"}
            rightText={"Перейти до каталогу"}
            lineStyles={"xl:max-w-[302px]"}
          />
          <BicycleWorkshop />
          <BicyclesByPurpose />
          <AboutUs />
          {/*<Articles />*/}
          <Feedbacks />
          <CommonQuestions />
          <ContactUs />
        </div>
      </div>
    </div>
  );
};

export default observer(HomeScreen);
