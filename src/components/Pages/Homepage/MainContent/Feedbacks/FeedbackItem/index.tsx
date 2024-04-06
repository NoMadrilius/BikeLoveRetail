import StarRating from "@/components/UIKit/NavigationPanel/StarRating";
import Image from "next/image";
import React from "react";

const FeedbackItem = () => {
  return (
    <article className="bg-dark py-[29.5px] px-[20px] rounded-lg ">
      <div className="flex items-center gap-4 ">
        <div className="relative size-[88px] rounded-full overflow-hidden">
          <Image
            src={"/images/homepage/static/feedback.jpg"}
            alt={"Feedback"}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-1">
          <span className="max-w-[68px] text-[20px] font-bold leading-[120%] text-white">
            Фамілія Ім’я
          </span>
          <StarRating rating={4} size={20} />
        </div>
      </div>
      <p className="text-grey-text-header font-light leading-[120%] mt-4">
        Я був приємно вражений відвіданням цього магазину велосипедів. Персонал
        тут дуже професійний і допоміг мені з вибором велосипеда, який ідеально
        відповідає моїм потребам. Великий вибір велосипедів різних брендів та
        моделей, а також широкий асортимент аксесуарів.
      </p>
    </article>
  );
};

export default FeedbackItem;
