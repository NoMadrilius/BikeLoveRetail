import React from "react";
import Image from "next/image";
import img1 from "@/../public/images/credit/ppTime.png"

const CreditBlock = ({onClick}:{onClick:()=>void}) => {
  return (
    <div onClick={onClick} className={"text-black flex gap-4 justify-center items-center border-pink border-2 rounded-lg cursor-pointer hover:bg-red-200 p-2"}>
      <div className={"font-bold text-xl mob:text-m"}>Купити в кредит під 0%</div>
      <div>
        <Image height={80} src={img1} alt={"creditImage"}/>
      </div>
    </div>
  );
};

export default CreditBlock;