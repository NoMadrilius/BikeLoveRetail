import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import NavigationButtons from "../CustomSlider/NavigationButtons";
import ArticleCard from "./ArticleCard";
import Pagination from "@/components/UIKit/NavigationPanel/Pagination"; // Import your pagination component

import "swiper/css";
import "swiper/css/navigation";

interface Article {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
}

const articles: Article[] = [
  {
    title: "Топ-10 найпопулярніших велосипедів у 2022 році",
    description:
      "Включає в себе безкоштовний ремонт, заміну чи повернення товару в разі виявлення дефектів протягом визначеного періоду після покупки.",
    imageSrc: "/images/homepage/static/article.png",
    link: "#",
  },
  {
    title: "Топ-10 найпопулярніших велосипедів у 2022 році",
    description:
      "Включає в себе безкоштовний ремонт, заміну чи повернення товару в разі виявлення дефектів протягом визначеного періоду після покупки.",
    imageSrc: "/images/homepage/static/article.png",
    link: "#",
  },
  {
    title: "Топ-10 найпопулярніших велосипедів у 2022 році",
    description:
      "Включає в себе безкоштовний ремонт, заміну чи повернення товару в разі виявлення дефектів протягом визначеного періоду після покупки.",
    imageSrc: "/images/homepage/static/article.png",
    link: "#",
  },
];

const Articles = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSlideChange = (swiper: any) => {
    if (swiper.isEnd) {
      setCurrentIndex(articles.length - 1);
    } else {
      setCurrentIndex(swiper.activeIndex || 0);
    }
  };

  return (
    <section className="xl:relative xl:top-[-18px]">
      <NavigationButtons
        showButtons={false}
        title={"Корисні статті"}
        rightText={"Дивитись всі"}
      />
      {isMobile ? (
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          onSlideChange={handleSlideChange}
        >
          {articles.map((article, index) => (
            <SwiperSlide key={index}>
              <ArticleCard article={article} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="flex gap-5">
          {articles.map((article, index) => (
            <ArticleCard key={index} article={article} />
          ))}
        </div>
      )}
      <Pagination currentIndex={currentIndex} totalSlides={articles.length} />
    </section>
  );
};

export default Articles;
