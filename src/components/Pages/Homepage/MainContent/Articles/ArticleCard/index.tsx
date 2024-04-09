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
    <article className="max-w-full lg:max-w-[316px] rounded-lg overflow-hidden">
      <div className="relative w-full h-[206px]">
        <Image
          src={article.imageSrc}
          alt={"Article"}
          fill
          className="object-cover"
        />
      </div>
      <div className="bg-white p-5 pt-3 flex flex-col">
        <h2 className="text-[20px] xl:leading-[24px] font-robot-c pt-1 font-bold leading-[120%] text-dark-text">
          {article.title}
        </h2>
        <p className="font-light leading-[120%] text-[#6B6B6B] mt-2 line-clamp-3">
          {article.description}
        </p>
        <div className="flex items-center gap-2 shrink-0  ml-auto mt-[14.5px] xl:mt-6">
          <Link
            href={article.link}
            className="text-dark leading-[19.36px] cursor-pointer"
          >
            Читати
          </Link>
          <div className="ml-auto py-[6px] px-[9px]">
            <Image
              src={"/images/homepage/icons/right-arrow.svg"}
              alt={"Right Arrow"}
              width={6}
              height={12}
              className="shrink-0"
            />
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
