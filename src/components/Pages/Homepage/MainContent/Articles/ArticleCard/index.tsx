import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ArticleCardProps {
  article: {
    title: string;
    description: string;
    imageSrc: string;
    link: string;
  };
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <article className="max-w-[316px] rounded-lg overflow-hidden">
      <div className="relative w-full h-[206px]">
        <Image
          src={article.imageSrc}
          alt={"Article"}
          fill
          className="object-cover"
        />
      </div>
      <div className="bg-white p-5 pt-3 flex flex-col">
        <h2 className="text-[20px] font-bold leading-[120%] text-dark-text">
          {article.title}
        </h2>
        <p className="font-light leading-[120%] text-[#6B6B6B] mt-2 line-clamp-3">
          {article.description}
        </p>
        <div className="flex items-center gap-2 shrink-0 mt-auto ml-auto mt-[14.5px]">
          <Link
            href={article.link}
            className="text-dark leading-[19px] cursor-pointer"
          >
            Читати
          </Link>
          <Image
            src={"/images/homepage/icons/right-arrow.svg"}
            alt={"Right Arrow"}
            width={6}
            height={12}
            className="ml-auto shrink-0"
          />
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
