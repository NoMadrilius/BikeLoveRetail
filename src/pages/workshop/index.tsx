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

export async function getStaticProps() {
  return {props: {as:await loadAppState(), data:await workshopStore.loadData()}, revalidate:60}
}

const Index = (props:{as:AppState|null, data:WorkshopDataResponse|null}) => {

  useEffect(() => {
    if(props.as){
      appStore.setServerData(props.as)
      currencyStore.setServerData(props.as)
      bikeSelectionStore.setOptions(props.as.bikeSelectState)
    }
    if(props.data) workshopStore.setData(props.data)
  }, []);

  return (
    <WorkshopPage/>
  );
};

export default observer(Index);