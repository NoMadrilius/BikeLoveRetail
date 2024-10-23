import React from "react";
import GradientButton from "@/components/UIKit/Buttons/GradientButton";
import ok from "../../../../public/images/workshop/ok.svg"
import timeI from "../../../../public/images/workshop/time.svg"
import Image from "next/image";


const WorkshopComplexItem = ({name,desc,time,oldprice,price,works,notif}:{name:string,desc:string,time:string,oldprice:string,price:string,works:string[],notif:string}) => {
  return (
    <div className={"h-[500px] w-[400px] mob:w-[300px] shrink-0 grow-0 rounded-[8px] border border-gray p-4 flex flex-col cursor-pointer hover:bg-[#f5f5f5]  box-border"}>
      <div className={"border-b border-neutral-300 flex justify-between pb-4"}>
        <div>
          <div className={"text-xl font-robot-c"}>{name}</div>
          <div className={"text-neutral-600 font-inter text-sm"}>{desc}</div>
        </div>
        <div>
          <div className={"flex gap-2 text-neutral-600 font-inter text-sm pb-2"}><Image src={timeI} alt={"ok"} width={12} height={12}/>{time}</div>
          <div className={"text-sm font-bold text-red-600 line-through text-right font-robot-c"}>{oldprice}</div>
          <div className={"text-xl font-bold font-robot-c"}>{price}</div>
        </div>
      </div>

      <div className={"flex flex-col p-2 font-inter h-full overflow-y-auto overflow-x-hidden w-full box-border"}>
        {works.map(w =>
          <div className={"flex gap-2 hover:bg-[#d9d9d9] rounded p-1 w-full"}>
            <Image src={ok} alt={"ok"} width={18} height={18} />
            {w}</div>)}
      </div>

      <span className={"text-neutral-600 font-inter text-sm"}>{notif}</span>
    </div>
  );
};

export default WorkshopComplexItem;