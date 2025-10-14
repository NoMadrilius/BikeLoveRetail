import React, { useEffect } from "react";
import { loadAppState, loadAppState2 } from "@/functions/loadAppState";
import { AppState } from "@/dataTransferObjects/internal/AppState";
import { setStateBase } from "@/helpers/setState/setStateBase";
import { PageDataResponse } from "@/dataTransferObjects/response/PageDataResponse";
import ProductPageUni from "@/components/Screens/ProductPage/ProductPageUni";
import CatalogPageUni from "@/components/Screens/CatalogPage/CatalogPageUni";
import { PublicAPI } from "@/api/PublicAPI";
import AppStore from "@/store/AppStore";
import { useRouter } from "next/router";
import { AxiosResponse } from "axios";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getStaticPaths = async () => {
  const paths = [] as string[];
  return { paths, fallback: true };
};

export const getStaticProps= async (context: any) => {
  const r = await loadAppState2();
  let result: AxiosResponse<PageDataResponse> | null = null;

  try {
    // Try to fetch data from the API
    result = await PublicAPI.GetPageData(
      context.params.slug.join('/'),
      context.locale,
      2
    );

    // If no data or invalid result, return 404 (notFound)
    if (!result || !result?.data) {
      return { notFound: true };
    }

    // Return the data and other props
    return {
      props: { data: result!.data, as: r, locale: context.locale, ...(await serverSideTranslations(context.locale, ['product_page','common','catalog_page'])) },
      revalidate: 1, //day
    };
  } catch (error) {
    // Log the error for debugging
    console.error('Error fetching page data:', error);
    // If API fails (500 or other error), return 404
    return { notFound: true };
  }

};

const Page = (props: { data: PageDataResponse|null, as:AppState|null, locale:string }) => {

  if(props.locale === "ru") AppStore.setLocale("RU")
  else AppStore.setLocale("UA")

  useEffect(() => {
    if(props.as) setStateBase(props.as)
  }, [props.as]);

  const router = useRouter();

  if (router.isFallback) {
    return <div className="p-6 text-center text-black">Loading...</div>;
  }

  if(props.data?.productPage&&props.data.type==="Product")
    return (<ProductPageUni p={props.data.productPage}/>);

  if(props.data?.catalogPage&&props.data.type==="Category")
    return (<CatalogPageUni c={props.data.catalogPage}/>);

  if(props.data?.catalogPage&&props.data.type==="Sitemap")
    return new Response(props.data.sitemap, {headers:{"Content-Type": "application/xml"}})
};

export default Page;