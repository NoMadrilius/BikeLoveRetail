import ProductScreen from "@/components/Screens/ProductScreen/ProductScreen";
import { PaddingWrapper } from "../../../theme/templates";
import { colors } from "../../../theme/colors";
import { ProductFullData } from "@/dataTransferObjects/response/ProductFullData";
import {
  productPageStore,
  useProductPageStore,
} from "@/store/ProductPageStore";

export const getServerSideProps = async (context: any) => {
  let prod = await productPageStore.getProduct(context.query.id);
  let options: number[] = context.query.options
    ? context.query.options.split(",").map(Number)
    : [];
  return { props: { product: prod, options: options } };
};

const ProductItem = (props: {
  product: ProductFullData;
  options: number[];
}) => {
  let state = useProductPageStore();
  state.setData(props.product, props.options);

  console.log(props.product);

  return (
    <>
      <PaddingWrapper style={{ backgroundColor: colors.grayBg }}>
        {props.product ? <ProductScreen /> : null}
      </PaddingWrapper>
    </>
  );
};

export default ProductItem;
