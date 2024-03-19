import ProductScreen from "@/components/Screens/ProductScreen/ProductScreen";
import { PaddingWrapper } from "../../../theme/templates";
import { colors } from "../../../theme/colors";
import { ProductFullData } from "@/dataTransferObjects/response/ProductFullData";
import {
  productPageStore,
  useProductPageStore,
} from "@/store/ProductPageStore";
import {loadAppState} from "@/functions/loadAppState";
import {useAppStore} from "@/store/AppStore";
import {AppState} from "@/dataTransferObjects/internal/AppState";
import {useCurrencyStore} from "@/store/CurrencyStore";

export const getServerSideProps = async (context:any) => {
  const r = await loadAppState()

  let prod = await productPageStore.getProduct(context.query.id);
  let options: number[] = context.query.options
    ? context.query.options.split(",").map(Number)
    : [];
  return { props: { product: prod, options: options,as:r } };
};

const ProductItem = (props: {
  product: ProductFullData;
  options: number[];
  as:AppState
}) => {
  let state = useProductPageStore();
  state.setData(props.product, props.options);
  useAppStore().setServerData(props.as)
  useCurrencyStore().setServerData(props.as)

  return (
    <>
      <PaddingWrapper style={{ backgroundColor: colors.grayBg }}>
        {props.product ? <ProductScreen /> : null}
      </PaddingWrapper>
    </>
  );
};

export default ProductItem;
