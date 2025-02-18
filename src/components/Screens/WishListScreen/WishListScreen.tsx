import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import { styled } from "styled-components";
import { UseMetaData } from "@/helpers/hooks/useMetaData";
import { metrics } from "../../../../theme/metrics";
import { useWishListStore } from "@/store/WishListStore";
import { useEffect, useState } from "react";
import { colors } from "../../../../theme/colors";
import { fonts } from "../../../../theme/fonts";
import { templates } from "../../../../theme/templates";
import {Product} from "@/dataTransferObjects/entities/Product";
import { Typography } from "@mui/material";

const WishListScreen = () => {
  const wishStore = useWishListStore();
  const [wishList, setWishList] = useState<Product[]>();
  const road = [
    { title: "Личный кабинет", link: "/account" },
    { title: "Список желайний", link: "/" },
  ];
  useEffect(() => {
    setWishList(wishStore.wishList);
  }, [wishStore]);
  console.log(wishList);
  return (
    <>
      <UseMetaData title={"Wish List"} img={""} description={"sdasd"} />

      <Wrapper>
        {//<Slider title={"список желаний"} items={wishList} variant={"wish"} />
        !wishList?.length && (
          <EmptyContainer style={{ paddingBottom: "300px" }}>
            <Typography color={colors.black} fontSize="40px" fontStyle={fonts.f500}>
              {" "}
              Здесь пока пусто :(
            </Typography>
          </EmptyContainer>
        )}
      </Wrapper>
    </>
  );
};
export default WishListScreen;

const Wrapper = styled.div`
  margin: 60px 0 0 0;
  padding-bottom: 160px;
  @media (max-width: ${metrics.mobile}) {
    margin: 30px 0 0 0;
    padding-bottom: 111px;
  }
`;
const EmptyContainer = styled.div`
  ${templates.centerContent};
`;
