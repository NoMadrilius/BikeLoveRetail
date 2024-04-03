import React from "react";
import Image from "next/image";
import Link from "next/link";

const ImageLink = () => {
  return (
    <>
      <Image
        src={"/images/homepage/static/guy.jpg"}
        alt={"Про нас"}
        width={447}
        height={415}
        className="rounded-lg shrink-0 h-[415px] object-cover mx-auto"
      />

      <div className="flex items-center gap-2 shrink-0 mt-auto ml-auto">
        <Link href="#" className="text-dark leading-[19px] cursor-pointer">
          Дізнатись більше
        </Link>
        <Image
          src={"/images/homepage/icons/right-arrow.svg"}
          alt={"Right Arrow"}
          width={6}
          height={12}
          className="ml-auto shrink-0"
        />
      </div>
    </>
  );
};

export default ImageLink;
