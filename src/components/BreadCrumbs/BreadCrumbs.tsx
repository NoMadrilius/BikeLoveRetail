import { styled } from "styled-components";
import { Text } from "../Text/Text";
import { colors } from "../../../theme/colors";
import { fonts } from "../../../theme/fonts";
import { metrics } from "../../../theme/metrics";
import { useRouter } from "next/router";
import { Product } from "@/dataTransferObjects/entities/Product";
import { observer } from "mobx-react";
import Link from "next/link";
import { ProductCategory } from "@/dataTransferObjects/entities/ProductCategory";
import { useAppStore } from "@/store/AppStore";
import { HomeIconSVG, RightIconSVG } from "../UIKit/SVGIcons";
import {GenerateCatalogLink} from "@/helpers/LinkGen/GenerateCatalogLink";
import {GenerateProductLink} from "@/helpers/LinkGen/GenerateProductLink";

const BreadCrumbs = (p: { categoryId: number; product?: Product }) => {
  const router = useRouter();
  let road: [{ title: string; link: string }] = [] as unknown as [
    { title: string; link: string }
  ];
  const st = useAppStore();

  const cat = st.categories.find((n) => n.id === p.categoryId);
  let lastCatParent: ProductCategory | undefined = cat;

  while (lastCatParent != undefined) {
    road.unshift({
      title: lastCatParent.name,
      link: GenerateCatalogLink(undefined, { id: lastCatParent.id, slug:lastCatParent.transliterationName}),
    });
    lastCatParent = st.categories.find((n) => n.id === lastCatParent?.parentId);
  }

  if (p.product != undefined) {
    road.push({
      title: p.product.name,
      link: GenerateProductLink(p.product.id, p.product.transliteration)
    });
  }

  return (
    <>
      <Wrapper className="sm:pl-5 ">
        <Link href="/" className="cursor-pointer pr-2">
          <HomeIconSVG />
        </Link>
        {road.map((el, index) => (
          <Container key={index}>
            <RightIconSVG />
            {index !== road.length - 1 ? (
              <Link href={el.link}>
                <Text
                  color={
                    index === road.length - 1 ? colors.grayMain : colors.black
                  }
                  size="13px"
                  fontStyle={fonts.f400}
                  hoverColor={index !== road.length - 1 ? colors.redHover : ""}
                >
                  {el.title}
                </Text>
              </Link>
            ) : (
              <Text
                color={
                  index === road.length - 1 ? colors.grayMain : colors.black
                }
                size="13px"
                fontStyle={fonts.f400}
                hoverColor={index !== road.length - 1 ? colors.redHover : ""}
              >
                {el.title}
              </Text>
            )}
          </Container>
        ))}
      </Wrapper>
    </>
  );
};
export default observer(BreadCrumbs);

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 10px;
  align-items: center;
  margin: 50px 0 30px 0;
  @media (max-width: ${metrics.mobile}) {
    margin: 43px 0 16px 0;
  }
`;
const Line = styled.div`
  width: 17px;
  height: 1px;
  background-color: ${colors.black};
  margin-left: 8px;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
