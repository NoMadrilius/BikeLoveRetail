import Layout from "@/components/Pages/Homepage/Layout";
import AboutUs from "@/components/Pages/Homepage/MainContent/AboutUs";
import Articles from "@/components/Pages/Homepage/MainContent/Articles";
import BicyclesByPurpose from "@/components/Pages/Homepage/MainContent/BicyclesByPurpose";
import BicycleWorkshop from "@/components/Pages/Homepage/MainContent/BicycleWorkshop";
import CommonQuestions from "@/components/Pages/Homepage/MainContent/CommonQuestions";
import CustomSlider from "@/components/Pages/Homepage/MainContent/CustomSlider";
import Hero from "@/components/Pages/Homepage/MainContent/Hero";
import PopularProductCategories from "@/components/Pages/Homepage/MainContent/PopularProductCategories";
import WhyToChooseUs from "@/components/Pages/Homepage/MainContent/WhyToChooseUs";
import Header from "@/components/UIKit/NavigationPanel/Header";
import Login from "@/components/UIKit/NavigationPanel/Header/Auth/Login";
import Registration from "@/components/UIKit/NavigationPanel/Header/Auth/Registration";
import useBurgerMenuStore from "@/store/zustand/header.store";

const HomePage = () => {
  const loginOrRegistration = useBurgerMenuStore(
    (state) => state.loginOrRegistration
  );
  const isAuthOpen = useBurgerMenuStore((state) => state.isAuthOpen);

  if (loginOrRegistration === "login" && isAuthOpen) {
    return <Login />;
  }

  if (loginOrRegistration === "registration" && isAuthOpen) {
    return <Registration />;
  }

  return (
    <div className="bg-mainScene">
      <Header />

      <Layout>
        <Hero />
        <WhyToChooseUs />
        <CustomSlider
          title={"Акційні пропозиції"}
          rightText={"Більше пропозицій"}
        />
        <PopularProductCategories />
        <CustomSlider title={"Топ продаж"} rightText={"Перейти до каталогу"} />
        <BicycleWorkshop />
        <BicyclesByPurpose />
        <AboutUs />
        <Articles />
        <CommonQuestions />
      </Layout>
    </div>
  );
};

export default HomePage;
