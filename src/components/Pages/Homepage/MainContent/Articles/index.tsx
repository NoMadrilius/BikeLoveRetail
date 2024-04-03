import React from "react";
import NavigationButtons from "../CustomSlider/NavigationButtons";
import ArticleCard from "./ArticleCard";

const Articles = () => {
  const articles = [
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

  return (
    <section>
      <NavigationButtons
        showButtons={false}
        title={"Корисні статті"}
        rightText={"Дивитись всі"}
      />
      <div className="flex gap-5">
        {articles.map((article, index) => (
          <ArticleCard key={index} article={article} />
        ))}
      </div>
    </section>
  );
};

export default Articles;
