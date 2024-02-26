import { Text } from "@/components/Text/Text";
import { styled } from "styled-components";
import { colors } from "../../../../../theme/colors";
import { fonts } from "../../../../../theme/fonts";
import { prettyPrice } from "@/helpers/stringDecorate/stringDecorate";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import {Product} from "@/dataTransferObjects/entities/Product";

const ListItems = (p:{ data:Product }) => {
  const { t } = useTranslation();
  const router = useRouter();
  return (
    <>
      <Wrapper onClick={() => router.push(`/product/${p.data.id}`)}>
        <ItemWrapper>
          {//<Picture src={p.data || "/mock/NoPhoto.png"} />
          }
          <ColumnContainer>
            <Text color={colors.black} size="16px" fontStyle={fonts.f600}>
              {p.data.name}
            </Text>
            <Text color={colors.black} size="15px" fontStyle={fonts.f400}>
              {t("checkList.size")}
            </Text>
            <RowContainer>
              <Text color={colors.black} size="16px" fontStyle={fonts.f400}>
                {prettyPrice(p.data.retailPrice)}
              </Text>
              <Text color={colors.black} size="16px" fontStyle={fonts.f400}>
                {//p.data
                   } шт
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
