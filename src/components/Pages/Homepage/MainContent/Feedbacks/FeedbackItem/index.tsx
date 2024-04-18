import StarRating from "@/components/UIKit/NavigationPanel/StarRating";
import Image from "next/image";
import React from "react";

const FeedbackItem = (p:{name:string, rating:number, desc:string, img?:string}) => {
  return (
    <article className="bg-dark xl:py-[10.5px] xl:px-5 py-[29.5px] px-[20px] rounded-lg xl:max-w-[272px] lg:py-5 select-none">
      <div className="flex items-center gap-4 ">
        <div className="relative xl:size-[86px] size-[88px] rounded-full overflow-hidden">
          <Image
            src={p.img?p.img:"/images/homepage/static/feedback.jpg"}
            alt={"Feedback"}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-1">
          <span className="max-w-[68px] text-[20px] font-bold leading-[120%] text-white lg:leading-[24px]">
            {p.name}
          </span>
          <StarRating rating={p.rating} size={20} />
        </div>
      </div>
      <p className="text-grey-text-header font-light leading-[120%] mt-4 lg:leading-[19.2px]">
        {p.desc}
      </p>
    </article>
  );
};

export default FeedbackItem;
