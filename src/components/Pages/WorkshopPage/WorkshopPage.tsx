import React from "react";
import Image from "next/image";
import master from '../../../../public/images/workshop/master.png'
import master2 from '../../../../public/images/workshop/master2.png'
import logo from '../../../../public/images/workshop/Logo.svg'
import WorkshopStartBanner from "@/components/Pages/WorkshopPage/WorkshopStartBanner";
import WorkshopHeader from "@/components/Pages/WorkshopPage/WorkshopHeader";
import WorkshopComplex from "@/components/Pages/WorkshopPage/WorkshopComplex";
import WorkshopTable from "@/components/Pages/WorkshopPage/WorkshopTable";



const WorkshopPage = () => {
  return (
    <div className={"flex flex-col gap-8 w-full"}>
      <WorkshopStartBanner/>
      <WorkshopHeader/>
      <WorkshopComplex/>
      <WorkshopTable/>
    </div>
  );
};

export default WorkshopPage;