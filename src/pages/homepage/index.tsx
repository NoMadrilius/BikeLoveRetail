import Layout from "@/components/Pages/Homepage/Layout";
import CustomSlider from "@/components/Pages/Homepage/MainContent/CustomSlider";
import Hero from "@/components/Pages/Homepage/MainContent/Hero";
import PopularProductCategories from "@/components/Pages/Homepage/MainContent/PopularProductCategories";
import WhyToChooseUs from "@/components/Pages/Homepage/MainContent/WhyToChooseUs";
import CounterControl from "@/components/UIKit/Buttons/CounterControl";
import ProductCard from "@/components/UIKit/Cards/ProductCard";
import SearchCard from "@/components/UIKit/Cards/SearchCard";
import Header from "@/components/UIKit/NavigationPanel/Header";

const HomePage = () => {
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
      </Layout>
    </div>
  );
};

export default HomePage;
