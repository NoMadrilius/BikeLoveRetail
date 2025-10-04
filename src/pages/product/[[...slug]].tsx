import { ProductFullData } from "@/dataTransferObjects/response/ProductFullData";
import {  productPageStore } from "@/store/ProductPageStore";
import {loadAppState} from "@/functions/loadAppState";
import {AppState} from "@/dataTransferObjects/internal/AppState";
import ProductPage from "@/components/Pages/ProductPage/ProductPage";
import {GetProductLinkParams} from "@/helpers/LinkGen/GetProductLinkParams";
import { setStateBase } from "@/helpers/setState/setStateBase";
import { useEffect } from "react";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import AppStore from "@/store/AppStore";

export const getStaticPaths = async () => {
  const paths = [] as string[];
  return {
    paths,
    fallback: true // or 'blocking' if you want to use incremental static regeneration
  };
};

export const getStaticProps = async (context: any) => {

  const r = await loadAppState()
  const params = GetProductLinkParams(context.params.slug)

  if(!params) return null
  const product = await productPageStore.getProduct(params.id, context.locale)

  return {
    props: {
      product:product,
      selected:params.variants??[],
      as:r,
      locale:context.locale,
      ...(await serverSideTranslations(context.locale, ['product_page', 'common'])),
    }, revalidate:100}
};

const ProductItem = (props: { as:AppState|null, product:ProductFullData|null, selected:number[], locale:string }|null) => {

  console.warn("locale:",props?.locale)

  if(props === null) return null
  if(props.product && typeof window === 'undefined') productPageStore.setData(props.product, props.selected)


  if(props.locale === "ru") AppStore.setLocale("RU")
  else AppStore.setLocale("UA")

  useEffect(() => {
    if(props.as) setStateBase(props.as)
    if(props.product) productPageStore.setData(props.product, props.selected)
  }, [props.product, props.selected]);



  if(!props.product) return null
  return (<ProductPage product={props.product}/>);
};

export default ProductItem;
