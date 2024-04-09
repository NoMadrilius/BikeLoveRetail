import SelectionOfBicycle from "@/components/Pages/Homepage/Aside/Sections/SelectionOfBicycle";
import Layout from "@/components/Pages/Homepage/Layout";
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
import Header from "@/components/UIKit/NavigationPanel/Header";
import Login from "@/components/UIKit/NavigationPanel/Header/Auth/Login";
import Registration from "@/components/UIKit/NavigationPanel/Header/Auth/Registration";
import { useBurgerMenuStore } from "@/store/BurgerMenuStore";
import { observer } from "mobx-react";

const HomePage = () => {
  const store = useBurgerMenuStore();

  if (store.loginOrRegistration === "login" && store.isAuthOpen) {
    return <Login />;
  }

  if (store.loginOrRegistration === "registration" && store.isAuthOpen) {
    return <Registration />;
  }

  return (
    <div className="bg-mainScene font-inter">
      <Header />

      <Layout>
        <div>
          <Hero />
          <div className="md:hidden xl:hidden lg:hidden 2xl:hidden flex px-5 gap-3 sm:justify-center">
            <GradientButton
              label={"Каталог товарів"}
              className="w-full max-w-[161px] lg:w-auto shrink-0 lg:shrink-0"
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
        <CustomSlider
          title={"Акційні пропозиції"}
          rightText={"Більше пропозицій"}
        />
        <SelectionOfBicycle />
        <PopularProductCategories />
        <CustomSlider title={"Топ продаж"} rightText={"Перейти до каталогу"} />
        <BicycleWorkshop />
        <BicyclesByPurpose />
        <AboutUs />
        <Articles />
        <Feedbacks />
        <CommonQuestions />
        <ContactUs />
      </Layout>
    </div>
  );
};

export default observer(HomePage);
