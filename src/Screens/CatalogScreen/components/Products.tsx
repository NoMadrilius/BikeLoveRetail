import { styled } from "styled-components";
import { metrics } from "../../../../theme/metrics";
import { FC } from "react";
import Card from "@/components/Card/Card";
import { Product } from "@/types/types";

type Props = {
  items: Product[];
};

const Products: FC<Props> = ({ items }) => {
  return (
    <>
      <GridContainer>
        {items.map((el: any, index: any) => (
          <Card
            key={index}
            title={el.title}
            image={el.image}
            price={el.price}
            colors={el.colors}
            sizes={el.sizes}
            sale={el.sale}
          />
        ))}
      </GridContainer>
    </>
  );
};
export default Products;

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
  }
`;
