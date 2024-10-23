import React from "react";
import WorkshopTableItem from "@/components/Pages/WorkshopPage/WorkshopTableItem";
import workshopPage from "@/components/Pages/WorkshopPage/WorkshopPage";
import workshopStore from "@/store/WorkshopStore";
import { className } from "postcss-selector-parser";
import classNames from "classnames";
import { observer } from "mobx-react";

const WorkshopTable = () => {

  let pages = workshopStore.groups.filter(n=>n.parentId === 0)
  const [page, setPage] = React.useState(0);
  let groups = workshopStore.groups.filter(n=>n.parentId === pages[page].id)
  let direct = workshopStore.works.filter(n=>n.workGroupId === pages[page].id)

  return (
    <div className={"text-black h-full w-full overflow-hidden"}>
      <span className={"font-robot-c text-[32px] ml-4"}>Усі наші послуги</span>
      <div className={"bg-white h-[800px] flex flex-col rounded-[8px]"}>
        <div className={"flex justify-between"}>
          {
            pages.map((g,index) =>
              <div onClick={()=>setPage(index)} className={classNames(page===index?"bg-neutral-200 hover:bg-neutral-300 text-red-600":"","font-semibold p-3 w-full text-center cursor-pointer hover:bg-neutral-100")}>{g.name}</div>,
            )
          }
        </div>

        <div className={"flex gap-2 flex-col p-4 w-full overflow-y-auto h-full"}>
          {direct.length>0&&<WorkshopTableItem group={pages[page]} defOpen={true} defFull={true}/>}
          {groups.map(g=><WorkshopTableItem group={g} defOpen={false} defFull={false}/>)}
        </div>

      </div>
    </div>
  );
};

export default observer(WorkshopTable);