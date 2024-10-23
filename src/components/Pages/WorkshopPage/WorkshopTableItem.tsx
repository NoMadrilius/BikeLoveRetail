import React from "react";
import currencyStore from "@/store/CurrencyStore";
import workshopStore from "@/store/WorkshopStore";
import { observer } from "mobx-react";
import arrow from "../../../../public/images/workshop/arrow.svg"
import { WorkGroup } from "@/dataTransferObjects/entities/WorkGroup";
import Image from "next/image";
import classNames from "classnames";
import WorkshopTableWork from "@/components/Pages/WorkshopPage/WorkshopTableWork";

const WorkshopTableItem = ({group,defOpen,defFull}:{group:WorkGroup, defOpen:boolean, defFull:boolean}) => {

  const [open, setOpen] = React.useState(defOpen);
  const [full, setFull] = React.useState(defFull);

  let list = workshopStore.groups.filter(n=>n.parentId === group.id)
  let works = workshopStore.works.filter(n=>n.workGroupId === group.id)

  return (
    <div className={"border border-neutral-500 border-solid rounded-[8px] w-full"}>
      <div className={"m-2 flex justify-between  hover:text-red-600 cursor-pointer"} onClick={()=>{
        setFull(defFull)
        setOpen(!open)
      }}>
        <div className={"font-bold"}>{group.name}</div>
        <Image className={classNames("select-none hover:bg-neutral-200 rounded transition", open?"rotate-180":"")} alt={"arrow"} src={arrow} height={24} width={24}/>
      </div>
      {
        open&&
        <div className={"transition"}>
          {
            works.length > 0 &&
            <div className={"flex flex-col border-t border-neutral-500 border-solid p-2 gap-2"}>
              {(full?works:works.slice(0,3)).map(j =>
                <div
                  className={"border border-red-400 border-solid rounded-[8px] p-2 mx-10 mob:mx-2 flex gap-2 items-center justify-between hover:bg-red-100 cursor-pointer"}>
                  <div className={"flex gap-2 items-center"}>
                    <div className={"text-neutral-500"}>{j.id}</div>
                    <div className={""}>{j.name}</div>
                  </div>
                  <div className={"font-bold"}>{currencyStore.useCurrency(j.price)}</div>
                </div>
              )}
              {(works.length > 3&& (!full)) && <span onClick={()=>setFull(true)} className={"mx-10 font-bold hover:bg-neutral-200 cursor-pointer text-center rounded p-2 mt-2"}>Показати ще + {works.length - 3}</span>}
              {(works.length > 3&& full) && <span onClick={()=>setFull(false)} className={"mx-10 font-bold hover:bg-neutral-200 cursor-pointer text-center rounded p-2 mt-2"}>Сховати - {works.length - 3}</span>}
            </div>
          }
          {list.map(i => <WorkshopTableWork group={i}/>)}
        </div>

      }
    </div>
  );
};

export default observer(WorkshopTableItem);