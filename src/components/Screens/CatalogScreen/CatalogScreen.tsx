import { styled } from "styled-components";
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import { UseMetaData } from "@/helpers/hooks/useMetaData";
import { Text } from "@/components/Text/Text";
import { colors } from "../../../../theme/colors";
import { fonts } from "../../../../theme/fonts";
import Filter from "./components/Filter";
import Products from "./components/Products";
import { useEffect, useState } from "react";
import TextBlock from "./components/TextBlock";
import categoriesStore, { useCategoriesStore } from "@/store/CategoriesStore";
import { useRouter } from "next/router";
import { observer } from "mobx-react";
import BlurWrapper from "@/components/BlurWrapper/BlurWrapper";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import catalogStore, { useCatalogStore } from "@/store/CatalogStore";
import { MainTitle, SecondaryTitle } from "../HomeScreen/HomeScreenStyles";

const CatalogScreen = () => {
  const { t } = useTranslation();
  const state = useCatalogStore();
  const router = useRouter();
  const catId = router.query.id;

  const [filterVisible, setFilterVisible] = useState(false);
  //const catalogStore = useCategoriesStore();
  /*
    const catalog = categoriesStore.categories
      ? catalogStore.categories.filter((el) => el.id === +catId!)
      : [];

      const categoryPath = catalogData[0]?.productCategory.way.split("->");

      const breadCrumbs = categoryPath
        .slice(-2)
        .map((category: any, index: any, array: any) => {
          let link = "/catalog/";
          if (index === 0) {
            link += catalogData[0]?.productCategory.parentId;
          } else if (index === 1) {
            link += catalogData[0]?.productCategory.id;
          }

          return {
            title: category,
            link: link,
          };
        });
    */
  return (
    <>
      <UseMetaData title={"name"} img={""} description={"asdasdasd"} />
      <Wrapper>
        {
          //<BreadCrumbs road={breadCrumbs} />
        }

        <MainTitle
          $color={colors.black}
          $fontSize="42px"
          $fontStyle={fonts.f500}
          $margin="0 0 50px 0"
          $textTransform="uppercase"
        >
          {state.catalogState?.category?.name}
        </MainTitle>

        <RowContainer>
          <TriggerHidden2>
            <OptionContainer onClick={() => setFilterVisible(true)}>
              <Image
                alt="Eye Icon"
                width={16}
                height={16}
                src="/images/home/icons/Eye.png"
              />

              <Text color={colors.black} size="13px" fontStyle={fonts.f400}>
                {t("catalog.filter")}
              </Text>
            </OptionContainer>
          </TriggerHidden2>
          <OptionContainer style={{ marginLeft: "auto" }}>
            <Image
              alt="Eye Icon"
              width={16}
              height={16}
              src="/images/home/icons/Eye.png"
            />
            <Text color={colors.black} size="13px" fontStyle={fonts.f400}>
              {t("catalog.sort")}
            </Text>
          </OptionContainer>
          <TriggerHidden width="500px">
            <OptionContainer>
              <Text color={colors.grayMain} size="13px" fontStyle={fonts.f400}>
                {t("catalog.fromPrice")}
              </Text>
              <Image
                alt="Eye Icon"
                width={16}
                height={16}
                src="/images/home/icons/Eye.png"
              />
            </OptionContainer>
          </TriggerHidden>
        </RowContainer>
        <MainContainer>
          <TriggerHidden width="1000px">{<Filter />}</TriggerHidden>
          <Products />
        </MainContainer>
        <TextBlock />
      </Wrapper>
      {filterVisible && (
        <BlurWrapper setModal={setFilterVisible}>
          <Filter />
        </BlurWrapper>
      )}
    </>
  );
};
export default CatalogScreen;

const Wrapper = styled.section`
  padding: 60px 0;
`;
const MainContainer = styled.section`
  display: flex;
  column-gap: 40px;
`;
const TriggerHidden = styled.aside<{ width: string }>`
  display: block;
  @media (max-width: ${(p) => p.width}) {
    display: none;
  }
`;
const TriggerHidden2 = styled.div`
  display: none;
  @media (max-width: 1000px) {
    display: block;
  }
`;
const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
  column-gap: 40px;
`;
const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 9px;
  padding: 6px;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.3s;
  &:hover {
    background-color: ${colors.redBlur};
  }
`;
