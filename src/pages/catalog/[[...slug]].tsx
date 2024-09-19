import catalogStore from "@/store/CatalogStore";
import { CatalogPageResponse } from "@/dataTransferObjects/response/CatalogPageResponse";
import {loadAppState} from "@/functions/loadAppState";
import {AppState} from "@/dataTransferObjects/internal/AppState";
import React, {useEffect} from "react";
import CatalogPage from "@/components/Pages/Catalog/CatalogPage";
import {GetCatalogLinkParams} from "@/helpers/LinkGen/GetCatalogLinkParams";
import { setStateBase } from "@/helpers/setState/setStateBase";

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

  if(!result) return {notFound: true};

  return {
    props: {
      iniState: result,
      as:r
    }, revalidate:1}
};

const Page = (props: { iniState: CatalogPageResponse|null, as:AppState|null }) => {

  if(props.as) setStateBase(props.as)

  if(props.iniState && typeof window === 'undefined') catalogStore.setCatalogState(props.iniState)

  useEffect(() => {
    if(props.iniState) catalogStore.setCatalogState(props.iniState)
  }, [props.iniState]);

  return (
      <CatalogPage/>
  );
};

export default Page;
