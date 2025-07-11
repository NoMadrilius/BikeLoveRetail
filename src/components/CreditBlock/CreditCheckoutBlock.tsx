import React from "react";
import Image from "next/image";
import img1 from "../../../public/images/credit/ppTime.png";

const CreditCheckoutBlock = () => {
  return (
    <div className={"text-black flex gap-4 justify-center items-center border-pink border-2 rounded-lg cursor-pointer hover:bg-red-200"}>
      <div className={"font-bold text-xl p-4 mob:text-sm"}>Після підтвердження замовлення, ви зможете оплатити в кредит під 0%</div>
      <div>
        <Image height={80} src={img1} alt={"creditImage"} />
      </div>
    </div>
  );
};

export default CreditCheckoutBlock;