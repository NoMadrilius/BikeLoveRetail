import React, { useEffect } from "react";
import WorkshopPage from "@/components/Pages/WorkshopPage/WorkshopPage";
import { loadAppState } from "@/functions/loadAppState";
import appStore from "@/store/AppStore";
import currencyStore from "@/store/CurrencyStore";
import bikeSelectionStore from "@/store/BikeSelectionStore";
import { AppState } from "@/dataTransferObjects/internal/AppState";
import { WorkshopDataResponse } from "@/dataTransferObjects/response/WorkshopDataResponse";
import workshopStore from "@/store/WorkshopStore";
import { observer } from "mobx-react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { setStateBase } from "@/helpers/setState/setStateBase";

export async function getStaticProps(context:any) {
  return {props: {as:await loadAppState(), data:await workshopStore.loadData(), locale: context.locale, ...(await serverSideTranslations(context.locale, ['common','workshop_page'])) }, revalidate:864000}
}

const Index = (props:{as:AppState|null, data:WorkshopDataResponse|null}) => {

  useEffect(() => {
    if(props.as) setStateBase(props.as)
  }, [props.as]);

  return (
    <WorkshopPage/>
  );
};

export default observer(Index);