import { keyframes, styled } from "styled-components";
import { metrics } from "../../../../../theme/metrics";
import { FC, useState } from "react";
import Card from "@/components/Card/Card";
import { Text } from "@/components/Text/Text";
import { colors } from "../../../../../theme/colors";
import { fonts } from "../../../../../theme/fonts";
import { useRouter } from "next/router";
import { useCatalogStore } from "@/store/CatalogStore";
import Pagination from "@/components/Pagination/Pagination";
import {GenerateLink} from "@/helpers/GenerateLink";

const Products = () => {
  const state = useCatalogStore();
  const r = useRouter();

  return (
    <MainWrapper>
      <GridContainer>
        {state.loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <FakeCard key={index} />
            ))
          : state.catalogState!.products.map((value, index) => (
              <Card key={index} p={value} />
            ))}
      </GridContainer>

      <PagiContainer>
        <Pagination selected={state.catalogState!.page} pageList={Array.from({length: state.catalogState!.totalPages}, (_, i) => i + 1).map((n)=>GenerateLink(r,{queryParameters:{page:n}}))} />
      </PagiContainer>
    </MainWrapper>
  );
};
export default Products;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const PagiContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
  margin: 0 auto;
  margin-top: 50px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(250px, 1fr));
  gap: 24px;
  width: 100%;
  @media (max-width: ${metrics.desktop}) {
    grid-template-columns: repeat(2, minmax(150px, 1fr));
  }
  @media (max-width: ${metrics.mobile}) {
    grid-template-columns: repeat(1, minmax(150px, 1fr));
    gap: 10px;
  }

  & > div {
    width: 100%;
    min-width: 320px;
    height: auto;
  }
`;
const skeletonAnimation = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`;
const FakeCard = styled.div`
  width: 322px;
  height: 398px;
  border-radius: 12px;
  background: linear-gradient(to right, #f0f0f0 4%, #e0e0e0 25%, #f0f0f0 36%);
  background-size: 1000px 100%;
  animation: ${skeletonAnimation} 1.5s linear infinite;
`;
