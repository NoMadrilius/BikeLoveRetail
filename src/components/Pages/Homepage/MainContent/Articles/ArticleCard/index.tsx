import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SvgRightIcon } from "@/components/UIKit/SVGIcons";

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
    <article className="max-w-full lg:max-w-[316px] rounded-lg overflow-hidden hover:shadow-custom">
      <div className="relative w-full h-[206px]">
        <Image
          src={article.imageSrc}
          alt={"Article"}
          fill
          className="object-cover"
        />
      </div>
      <div className="bg-white p-5 pt-3 flex flex-col">
        <h2 className="text-[20px] xl:leading-[24px] font-robot-c pt-1 font-bold leading-[120%] text-dark-text hover:text-link-pink">
          {article.title}
        </h2>
        <p className="font-light leading-[120%] text-[#6B6B6B] mt-2 line-clamp-3">
          {article.description}
        </p>
        <Link
          href={article.link}
          className="flex items-center gap-2 shrink-0  ml-auto mt-[14.5px] xl:mt-6 lg:mt-[23.5px] group"
        >
          <span className="text-dark leading-[19.36px] cursor-pointer group-hover:text-link-pink">
            Читати
          </span>
          <div className="ml-auto py-[6px] px-[9px]">
            <SvgRightIcon className="group-hover:hidden block" />
            <SvgRightIcon
              color="#F9436B"
              className="group-hover:block hidden"
            />
          </div>
        </Link>
      </div>
    </article>
  );
};

<Link
  href="#"
  className="lg:flex items-center gap-2 shrink-0 mt-auto ml-auto hidden group"
>
  <span className="text-dark leading-[19px] cursor-pointer group-hover:text-link-pink">
    Перейти до катологу
  </span>
  <SvgRightIcon className="group-hover:hidden block" />
  <SvgRightIcon color="#F9436B" className="group-hover:block hidden" />
</Link>;

export default ArticleCard;
