import catalogStore, { useCatalogStore } from "@/store/CatalogStore";
import { CatalogPageResponse } from "@/dataTransferObjects/response/CatalogPageResponse";
import {loadAppState} from "@/functions/loadAppState";
import appStore, {useAppStore} from "@/store/AppStore";
import {AppState} from "@/dataTransferObjects/internal/AppState";
import currencyStore, {useCurrencyStore} from "@/store/CurrencyStore";
import React, {useEffect} from "react";
import CatalogPage from "@/components/Pages/Catalog/CatalogPage";
import {GetCatalogLinkParams} from "@/helpers/LinkGen/GetCatalogLinkParams";
import bikeSelectionStore from "@/store/BikeSelectionStore";

export const getStaticPaths = async () => {
  // Fetch the dynamic paths from your API or any data source
  const paths = [] as string[];

  return {
    paths,
    fallback: true // or 'blocking' if you want to use incremental static regeneration
  };
};

export const getStaticProps= async (context: any) => {

  const r = await loadAppState()
  let result:CatalogPageResponse|null = null

  let params = GetCatalogLinkParams(context.params.slug)

  if(!params && context.params.id){
    params = {
      id:context.params.id,
      filters:[]
    }
  }


  if(params) result = await catalogStore.loadStateCategory(params);

  console.log('filters',params?.filters, result?.filterSettings)

  if(!result) return {notFound: true};

  return {
    props: {
      iniState: result,
      as:r
    }, revalidate:1}
};

const Page = (props: {
  iniState: CatalogPageResponse|null,
  as:AppState|null
}) => {

  useEffect(() => {
    if(props.as){
      appStore.setServerData(props.as)
      currencyStore.setServerData(props.as)
      bikeSelectionStore.setOptions(props.as.bikeSelectState)
    }
  }, []);

  if(props.iniState != null)   useCatalogStore().setCatalogState(props.iniState);

  return (
      <CatalogPage/>
  );
};

export default Page;
