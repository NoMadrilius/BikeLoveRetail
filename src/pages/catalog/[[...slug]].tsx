import catalogStore, { useCatalogStore } from "@/store/CatalogStore";
import { CatalogPageResponse } from "@/dataTransferObjects/response/CatalogPageResponse";
import {loadAppState} from "@/functions/loadAppState";
import {useAppStore} from "@/store/AppStore";
import {AppState} from "@/dataTransferObjects/internal/AppState";
import {useCurrencyStore} from "@/store/CurrencyStore";
import React from "react";
import CatalogPage from "@/components/Pages/Catalog/CatalogPage";
import type { InferGetStaticPropsType, GetStaticProps } from 'next'
import {ParsedUrlQuery} from "querystring";
import {GetCatalogLinkParams} from "@/helpers/GetCatalogLinkParams";


export const getStaticPaths = async () => {
  // Fetch the dynamic paths from your API or any data source
  const paths = [];

  return {
    paths,
    fallback: true // or 'blocking' if you want to use incremental static regeneration
  };
};

export const getStaticProps= async (context: any) => {

  const r = await loadAppState()
  let result:CatalogPageResponse|null = null

  const params = GetCatalogLinkParams(context.params.slug)


  if(params) result = await catalogStore.loadStateCategory(params);

  console.log('filters',params?.filters, result?.filterSettings)

  return {
    props: {
      iniState: result,
      as:r
    }, revalidate:60}
};

const Page = (props: {
  iniState: CatalogPageResponse|null,
  as:AppState|null
}) => {


  if(props.as != null){
    useAppStore().setServerData(props.as)
    useCurrencyStore().setServerData(props.as)
  }
  if(props.iniState != null)   useCatalogStore().setCatalogState(props.iniState);

  return (
      <CatalogPage/>
  );
};

export default Page;
