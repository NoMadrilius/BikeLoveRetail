import { styled } from "styled-components";
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import { UseMetaData } from "@/helpers/hooks/useMetaData";
import { Text } from "@/components/Text/Text";
import { colors } from "../../../theme/colors";
import { fonts } from "../../../theme/fonts";
import Filter from "./components/Filter";
import Products from "./components/Products";
import { useEffect, useState } from "react";
import TextBlock from "./components/TextBlock";
import categoriesStore, { useCategoriesStore } from "@/store/CategoriesStore";
import { useRouter } from "next/router";

const CatalogScreen = ({ catalogId }: any) => {
  const router = useRouter();
  const catId = router.query.id;
  const [filterVisible, setFilterVisible] = useState(false);
  const [cards, setCards] = useState([]);
  const catalogStore = useCategoriesStore();
  useEffect(() => {
    catalogStore.fetchCategories();
    if (catId) {
      catalogStore.fetchProductCards(+catId!, 1, 1, 15, [], []);
    }
  }, [catId]);
  const catalog = categoriesStore.categories
    ? catalogStore.categories.filter((el) => el.id === +catId!)
    : [];
  useEffect(() => {
    setCards(catalogStore.cardsByCategory);
  }, [catalogStore.cardsByCategory]);

  ////
  console.log(cards);
  console.log(catId);
  /////

  const parts = catalog[0]?.way.split("->");

  const breadCrumbs = parts?.map((part, index) => ({
    title: part,
    link: "/",
  }));
  return (
    <>
      <UseMetaData
        title={catalog[0]?.name}
        img={""}
        description={"asdasdasd"}
      />
      <Wrapper>
        {parts && <BreadCrumbs road={breadCrumbs} />}

        <Text
          color={colors.black}
          size="42px"
          fontStyle={fonts.f500}
          textTransform="uppercase"
          margin="0 0 50px 0"
        >
          {catalog[0]?.name}
        </Text>

        <RowContainer>
          <TriggerHidden2>
            <OptionContainer onClick={() => setFilterVisible(true)}>
              <img src="/images/home/icons/Eye.png" />
              <Text color={colors.black} size="13px" fontStyle={fonts.f400}>
                фильтр
              </Text>
            </OptionContainer>
          </TriggerHidden2>
          <OptionContainer style={{ marginLeft: "auto" }}>
            <img src="/images/home/icons/Eye.png" />
            <Text color={colors.black} size="13px" fontStyle={fonts.f400}>
              Сортировать
            </Text>
          </OptionContainer>
          <TriggerHidden width="500px">
            <OptionContainer>
              <Text color={colors.grayMain} size="13px" fontStyle={fonts.f400}>
                По возростанию цены
              </Text>
              <img src="/images/home/icons/Eye.png" />
            </OptionContainer>
          </TriggerHidden>
        </RowContainer>
        <MainContainer>
          <TriggerHidden width="1000px">
            <Filter />
          </TriggerHidden>
          <Products items={catalogStore.cardsByCategory} />
        </MainContainer>
        <TextBlock />
      </Wrapper>
      {filterVisible && <Filter mobile={true} />}
    </>
  );
};
export default CatalogScreen;

const Wrapper = styled.div`
  margin: 60px 0;
`;
const MainContainer = styled.div`
  display: flex;
  column-gap: 40px;
`;
const TriggerHidden = styled.div<{ width: string }>`
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
