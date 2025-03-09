import React, { useEffect } from "react";
import { loadAppState } from "@/functions/loadAppState";
import { AppState } from "@/dataTransferObjects/internal/AppState";
import { setStateBase } from "@/helpers/setState/setStateBase";
import { PageDataResponse } from "@/dataTransferObjects/response/PageDataResponse";
import ProductPageUni from "@/components/Screens/ProductPage/ProductPageUni";
import CatalogPageUni from "@/components/Screens/CatalogPage/CatalogPageUni";
import { PublicAPI } from "@/api/PublicAPI";

export const getStaticPaths = async () => {
  const paths = [] as string[];
  return { paths, fallback: true };
};

export const getStaticProps= async (context: any) => {
  const r = await loadAppState()

  console.log("there", context.params.slug.join('/'))
  let result = await PublicAPI.GetPageData(context.params.slug.join('/'), context.locale, 2);
  if(!result.data) return {notFound: true};

  return { props: { data: result.data, as: r }, revalidate:60 }
};

const Page = (props: { data: PageDataResponse|null, as:AppState|null }) => {

  useEffect(() => {
    if(props.as) setStateBase(props.as)
  }, [props.as]);

  if(props.data?.productPage&&props.data.type==="Product")
    return (<ProductPageUni p={props.data.productPage}/>);

  if(props.data?.catalogPage&&props.data.type==="Category")
    return (<CatalogPageUni c={props.data.catalogPage}/>);
};

export default Page;