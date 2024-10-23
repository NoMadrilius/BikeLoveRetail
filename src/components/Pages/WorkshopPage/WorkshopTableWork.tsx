import React from "react";
import workshopStore from "@/store/WorkshopStore";
import { WorkGroup } from "@/dataTransferObjects/entities/WorkGroup";
import currencyStore from "@/store/CurrencyStore";

const WorkshopTableWork = ({group}:{group:WorkGroup}) => {
  const [full, setFull] = React.useState(false);
  let works = workshopStore.works.filter(n => n.workGroupId === group.id);

  return (
    <div className={"flex flex-col border-t border-neutral-500 border-solid p-2 gap-2 w-full"}>
      <span className={"mx-10 font-bold"}>{group.name}</span>
      {(full?works:works.slice(0,3)).map(j =>
        <div
          className={"border border-red-400 border-solid rounded-[8px] p-2 mx-10 mob:mx-2 flex justify-between gap-2 items-center hover:bg-red-100 cursor-pointer"}>
          <div className={"flex gap-2 items-center"}>
            <div className={"text-neutral-500"}>{j.id}</div>
            <div className={""}>{j.name}</div>
          </div>
          <div className={"font-bold"}>{currencyStore.useCurrency(j.price)}</div>
        </div>,
      )}
      {(works.length > 3 && (!full)) && <span onClick={() => setFull(true)}
                                              className={"mx-10 font-bold hover:bg-neutral-200 cursor-pointer text-center rounded p-2 mt-2"}>Показати ще + {works.length - 3}</span>}
      {(works.length > 3 && full) && <span onClick={() => setFull(false)}
                                           className={"mx-10 font-bold hover:bg-neutral-200 cursor-pointer text-center rounded p-2 mt-2"}>Сховати - {works.length - 3}</span>}
    </div>
  );
};

export default WorkshopTableWork;