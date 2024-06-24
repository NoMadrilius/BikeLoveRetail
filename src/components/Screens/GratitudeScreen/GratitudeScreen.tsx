import { UseMetaData } from "@/helpers/hooks/useMetaData";
import { styled } from "styled-components";
import { metrics } from "../../../../theme/metrics";
import { templates } from "../../../../theme/templates";
import { Text } from "@/components/Text/Text";
import { fonts } from "../../../../theme/fonts";
import { colors } from "../../../../theme/colors";
import Image from "next/image";
import React, {FC, useEffect, useState} from "react";
import {OrderFullData} from "@/dataTransferObjects/entities/OrderFullData";
import {OrderAPI} from "@/api/OrderAPI";
import {useRouter} from "next/router";
import PersonalDataSignedIn
  from "@/components/Pages/OrderPage/PersonalData/personal-data-signed-in/personal-data-signed-in";
import PersonalDataNeedToAuthentificate
  from "@/components/Pages/OrderPage/PersonalData/personal-data-need-to-authentificate";
import PersonalDataNotRegister from "@/components/Pages/OrderPage/PersonalData/personal-data-not-register";
import PersonalData from "@/components/Pages/OrderPage/PersonalData/personal-data";
import DeliveryInfo from "@/components/Pages/OrderPage/DeliveryInfo/DeliveryInfo";
import OrderConfirmation from "@/components/Pages/OrderPage/OrderConfirmation/OrderConfirmation";
import OrderInfo from "@/components/Pages/OrderPage/OrderInfo/OrderInfo";
import ContactAndSocial from "@/components/Pages/Homepage/Aside/Sections/ContactAndSocial";
import DarkFooter from "@/components/UIKit/NavigationPanel/Header/MobileHeader/Sections/Footer/darkFooter";
import OrderInfoList from "@/components/Pages/OrderPage/OrderInfo/order-info-list/order-info-list";
import TotalAmountBlock from "@/components/Pages/OrderPage/OrderInfo/total-amount-block/total-amount-block";
import BlockWrapper from "@/components/Pages/OrderPage/block-wrapper";
import ConfProductInfo from "@/components/Pages/OrderPage/OrderConfirmation/ConfProductInfo";

const GratitudeScreen = () => {
  const [order,setOrder] = useState<OrderFullData|null>(null)
  const r = useRouter()
  useEffect(()=>{
    console.log(r.query.id)
    if(r.query.id != undefined)
    OrderAPI.GetByUUID(r.query.id as string).then(r=>{
      setOrder(r.data)
    })
  },[r.query.id])

      /*
      () => {
    if(order)
    {
      let dataUrl = `https://api.bikelove.com.ua/api/payments/liqpay?Target=Order&TargetId=`+order.order.id;
      window.open(dataUrl, "_blank")
    }
  }

       */

  if(!order) return null
  return (
      <div className="scroll-smooth max-w-[1324px] xl:max-w-[1200px] w-full m-auto items-start pt-[60px] pb-10 flex flex-col gap-8 text-black bg-red sm2:px-5 font-inter">
        <h1 className="text-[40px] sm2:text-[32px] font-medium font-robot-c xl1:sticky top-0">
          Ваше замовлення успішно оформлено
        </h1>

        <div className="w-full grid grid-cols-[1.3fr_1fr] xl:grid-cols-[1.4fr_1fr] md1:grid-cols-1 gap-8 xl:gap-5 ">
          <div className="col-span-1 gap-x-5 gap-y-8 flex flex-col xl1:sticky top-[68px] h-fit">
            <OrderConfirmation order={order} />
          </div>
          <div className="col-span-1  xl1:sticky top-4 h-fit">
            <BlockWrapper title="Замовлення" >
              <ConfProductInfo prods={order.products}/>
            </BlockWrapper>
            <div className="flex gap-8 xl:gap-5 mt-8 sm2:hidden">
              <ContactAndSocial className="w-full" />
              <DarkFooter />
            </div>
          </div>
        </div>
      </div>
  );
};
export default GratitudeScreen;

