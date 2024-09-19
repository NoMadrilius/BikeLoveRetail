import { ProductFullData } from "@/dataTransferObjects/response/ProductFullData";
import {
  productPageStore,
  useProductPageStore,
} from "@/store/ProductPageStore";
import {loadAppState} from "@/functions/loadAppState";
import appStore, {useAppStore} from "@/store/AppStore";
import {AppState} from "@/dataTransferObjects/internal/AppState";
import currencyStore, {useCurrencyStore} from "@/store/CurrencyStore";
import ProductPage from "@/components/Pages/ProductPage/ProductPage";
import {GetProductLinkParams} from "@/helpers/LinkGen/GetProductLinkParams";
import {useEffect} from "react";
import bikeSelectionStore from "@/store/BikeSelectionStore";
import { setStateBase } from "@/helpers/setState/setStateBase";
import { setStateProduct } from "@/helpers/setState/setStateProduct";

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
  if(props.product) setStateProduct(props.product, props.selected)


  return (<ProductPage/>);
};

export default ProductItem;
