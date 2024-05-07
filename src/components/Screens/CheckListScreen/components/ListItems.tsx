import { Text } from "@/components/Text/Text";
import { styled } from "styled-components";
import { colors } from "../../../../../theme/colors";
import { fonts } from "../../../../../theme/fonts";
import { useRouter } from "next/router";
import {Product} from "@/dataTransferObjects/entities/Product";
import {ProductFullData} from "@/dataTransferObjects/response/ProductFullData";
import {useCurrencyStore} from "@/store/CurrencyStore";
import {GenerateLink} from "@/helpers/LinkGen/GenerateLink";

const ListItems = (p:{ data: {product: Product, fullData: ProductFullData, quantity: number} }) => {
  const router = useRouter();
  const c = useCurrencyStore()

  let img:string =  "/mock/NoPhoto.png"
  let persImg = p.data.fullData.productImages.find(n=>n.productId === p.data.product.id)
  if(persImg) img = persImg.url
  else if(p.data.fullData.productImages.length >0) img = p.data.fullData.productImages[0].url

  return (
    <>
      <Wrapper onClick={() => router.push(GenerateLink(router, {basePath:'/product', queryParameters:{id:p.data.product.id}, slug:p.data.product.transliteration}))}>
        <ItemWrapper>
          <Picture src={img} />

          <ColumnContainer>
            <Text color={colors.black} size="16px" fontStyle={fonts.f600}>
              {p.data.product.name}
            </Text>
            {
              /*
              <Text color={colors.black} size="15px" fontStyle={fonts.f400}>
              {t("checkList.size")}
            </Text>
               */
            }

            <RowContainer>
              <Text color={colors.black} size="16px" fontStyle={fonts.f400}>
                {c.useCurrency(p.data.product.retailPrice)}
              </Text>
              <Text color={colors.black} size="16px" fontStyle={fonts.f400}>
                {p.data.quantity} шт
              </Text>
            </RowContainer>
          </ColumnContainer>
        </ItemWrapper>
      </Wrapper>
    </>
  );
};
export default ListItems;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  cursor: pointer;
`;
const ItemWrapper = styled.div`
  display: flex;
  column-gap: 32px;
  margin-top: 20px;
  padding: 21px 0;
  border-bottom: 1px solid ${colors.grayBorder};
`;
const Picture = styled.img`
  border: 1px solid ${colors.grayBorder};
  border-radius: 10px;
  width: 201px;
  height: 137px;
  @media (max-width: 756px) {
    width: 123px;
    height: 85px;
  }
`;
const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 20px;
`;
const RowContainer = styled.div`
  display: flex;
  column-gap: 50px;
`;
