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
import {useAppStore} from "@/store/AppStore";
import {useEffect} from "react";
const HomeScreen = () => {

    const as = useAppStore()

    useEffect(()=>{
        as.loadSaleProducts()
        as.loadTopProducts()
    },[])

  return (
      <div className="bg-mainScene font-inter">

        <div>
          <Hero />
          <div className="md:hidden xl:hidden lg:hidden 2xl:hidden flex gap-3 sm:justify-center">
            <GradientButton
                label={"Каталог товарів"}
                className="w-full max-w-[161px] lg:w-auto shrink-0 lg:shrink-0 md:shrink-0"
            />
            <GradientButton
                bgColor="#5D5555"
                label={"Майстерня"}
                showIcon={false}
                className="w-full max-w-[161px] lg:w-auto shrink-0 lg:shrink-0 justify-center"
            />
          </div>
        </div>
        <WhyToChooseUs />
        <CustomSlider products={as.saleProducts}
            title={"Акційні пропозиції"}
            rightText={"Більше пропозицій"}
        />
        <SelectionOfBicycle className="xl:hidden lg:hidden" />
        <PopularProductCategories />
        <CustomSlider products={as.topProducts}
            title={"Топ продаж"}
            rightText={"Перейти до каталогу"}
            lineStyles={"xl:max-w-[302px]"}
        />
        <BicycleWorkshop />
        <BicyclesByPurpose />
        <AboutUs />
        <Articles />
        <Feedbacks />
        <CommonQuestions />
        <ContactUs />

      </div>
  );
};

export default observer(HomeScreen);
