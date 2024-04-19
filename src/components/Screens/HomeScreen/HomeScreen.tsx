import SelectionOfBicycle from "@/components/Pages/Homepage/Aside/Sections/SelectionOfBicycle";
import AboutUs from "@/components/Pages/Homepage/MainContent/AboutUs";
import Articles from "@/components/Pages/Homepage/MainContent/Articles";
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
import { useEffect } from "react";
import Aside from "@/components/Pages/Homepage/Aside";

const HomeScreen = () => {
  const as = useAppStore();

  useEffect(() => {
    as.loadSaleProducts();
    as.loadTopProducts();
  }, []);

  return (
    <div className="max-w-[1324px] mx-auto flex lg:gap-8  pt-8 pb-20 xl:pt-10 xl:px-10 lg:pt-10">
      <Aside />

      <div className=" font-inter flex flex-col gap-10 xl:gap-[52px] lg:gap-[52px]">
        <div className="flex flex-col gap-10 lg:gap-[52px] xl:gap-[52px] sm:px-5 md:px-10 xl:pl-8 pl-8 lg:pl-0">
          <Hero />
          <div className="md:hidden xl:hidden lg:hidden 2xl:hidden flex gap-3 sm:justify-center relative z-[20]">
            <GradientButton
              label={"Каталог товарів"}
              className="w-full max-w-[161px] lg:w-auto shrink-0 lg:shrink-0 md:shrink-0"
              onClick={() => as.setIsOpenCategories(true)}
            />
            <GradientButton
              bgColor="bg-[#5D5555]"
              label={"Майстерня"}
              showIcon={false}
              className="w-full max-w-[161px] lg:w-auto shrink-0 lg:shrink-0 justify-center"
            />
          </div>
          <WhyToChooseUs />
          <CustomSlider
            products={as.saleProducts}
            title={"Акційні пропозиції"}
            rightText={"Більше пропозицій"}
          />
          <SelectionOfBicycle className="xl:hidden lg:hidden" />
          <PopularProductCategories />
          <CustomSlider
            products={as.topProducts}
            title={"Топ продаж"}
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
