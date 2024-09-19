import { ProductFullData } from "@/dataTransferObjects/response/ProductFullData";
import {  productPageStore } from "@/store/ProductPageStore";
import {loadAppState} from "@/functions/loadAppState";
import {AppState} from "@/dataTransferObjects/internal/AppState";
import ProductPage from "@/components/Pages/ProductPage/ProductPage";
import {GetProductLinkParams} from "@/helpers/LinkGen/GetProductLinkParams";
import { setStateBase } from "@/helpers/setState/setStateBase";
import { useEffect } from "react";

export const getStaticPaths = async () => {
  // Fetch the dynamic paths from your API or any data source
  const paths = [] as string[];

  return {
    paths,
    fallback: true // or 'blocking' if you want to use incremental static regeneration
  };
};

export const getStaticProps = async (context: any) => {

  const r = await loadAppState()
  const params = GetProductLinkParams(context.params.slug)
  console.warn(params)

  if(!params) return null

  const product = await productPageStore.getProduct(params.id)


  return {
    props: {
      product:product,
      selected:params.variants??[],
      as:r
    }, revalidate:1}
};

const ProductItem = (props: {
  as:AppState|null,
  product:ProductFullData|null,
  selected:number[]
}|null) => {

  if(props === null) return null
  if(props.as) setStateBase(props.as)

  if(props.product && typeof window === 'undefined') productPageStore.setData(props.product, props.selected)

  useEffect(() => {
    if(props.product) productPageStore.setData(props.product, props.selected)
  }, [props.product, props.selected]);


  return (<ProductPage/>);
};

export default ProductItem;
