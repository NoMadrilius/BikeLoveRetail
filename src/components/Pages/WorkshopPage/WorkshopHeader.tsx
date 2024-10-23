import React from "react";

const WorkshopHeader = () => {
  return (
    <div className={"h-[68px] mob:h-[40px] rounded-[8px] mob:rounded bg-[#2c2727] flex justify-start gap-8 mob:gap-4 items-center px-10 mob:px-2 font-semibold font-inter mob:text-[12px]"}>
      <div className={"cursor-pointer p-4 hover:bg-[#454545] rounded"}>Про нас</div>
      <div className={"cursor-pointer p-4 hover:bg-[#454545] rounded"}>Пакети</div>
      <div className={"cursor-pointer p-4 hover:bg-[#454545] rounded"}>Послуги та ціни</div>
    </div>
  );
};

export default WorkshopHeader;