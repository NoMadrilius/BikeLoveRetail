"use client";
import { styled } from "styled-components";
import { FC, useEffect, useState } from "react";
import { Product } from "@/types/types";
import { Text } from "../Text/Text";
import { prettyPrice } from "@/helpers/stringDecorate/stringDecorate";
import { fonts } from "../../../theme/fonts";
import { colors as colorsTheme } from "../../../theme/colors";
import { templates } from "../../../theme/templates";
import { useRouter } from "next/router";
import { useWishListStore } from "@/store/WishListStore";
import { useCartStore } from "@/store/CartStore";
import { useCurrencyStore } from "@/store/CurrencyStore";
import { observer } from "mobx-react";
import Image from "next/image";
import Link from "next/link";

const Card: FC<Product> = ({
  colors,
  image,
  price,
  sale,
  sizes,
  title,
  id,
  avaliability,
}) => {
  const wishStore = useWishListStore();
  const cart = useCartStore();
  const productInCart = cart.cart?.some((i) => i.id === id);
  const productInWishList = wishStore.wishList?.some((i) => i.id === id);
  const currStore = useCurrencyStore();
  const [priceStr, setPriceStr] = useState<string>();
  useEffect(() => {
    setPriceStr(price ? prettyPrice(price) : 0);
  }, [price, currStore.selectedCurrency, currStore]);

  return (
    <Wrapper href={`/product/${id}`} off={(avaliability as number) > 0}>
      {/* {avaliability} */}
      {sale && (
        <SalePatch>
          <Text size="12px" color={colorsTheme.white} fontStyle={fonts.f500}>
            -{sale}%
          </Text>
        </SalePatch>
      )}

      <Picture
        alt="Product Image"
        // width={200}
        // height={100}
        src={image || "/mock/NoPhoto.png"}
      />
      <ContainerRow>
        {colors && colors.map((el, index) => <Color key={index} color={el} />)}
        {sizes &&
          sizes.map((el, index) => (
            <Size key={index}>
              <Text
                size="12px"
                color={colorsTheme.black}
                fontStyle={fonts.f500}
              >
                {el}
              </Text>
            </Size>
          ))}
      </ContainerRow>
      <Text
        size="16px"
        color={colorsTheme.black}
        fontStyle={fonts.f600}
        margin="10px 0 0 0"
      >
        {title}
      </Text>
      <Text size="16px" color={colorsTheme.black} fontStyle={fonts.f400}>
        {priceStr}
      </Text>
      <ContainerRow>
        {productInWishList ? (
          <Image
            width={20}
            height={20}
            alt="Icon"
            src="/images/home/icons/icon1-red.svg"
          />
        ) : (
          <Image
            width={20}
            height={20}
            alt="Icon"
            src="/images/home/icons/icon1-gray.svg"
          />
        )}
        {productInCart ? (
          <Image
            width={20}
            height={20}
            alt="Icon"
            src="/images/home/icons/icon2-red.svg"
          />
        ) : (
          <Image
            width={20}
            height={20}
            alt="Icon"
            src="/images/home/icons/icon2-gray.svg"
          />
        )}
      </ContainerRow>
    </Wrapper>
  );
};
export default observer(Card);

const Wrapper = styled(Link)<{ off: boolean }>`
  position: relative;
  display: flex;
  padding: 38px 24px 32px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 322px;
  height: 398px;
  border-radius: 12px;
  background-color: ${colorsTheme.white};
  row-gap: 10px;
  cursor: pointer;
  opacity: ${(p) => (p.off ? "1" : "0.5")};
`;
const Picture = styled.img`
  width: 100%;
  border-radius: 10px;
  height: 183px;
  object-fit: contain;
`;
const ContainerRow = styled.div`
  display: flex;
  column-gap: 16px;
`;
const Color = styled.div<{ color: string }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(p) => p.color};
`;
const Size = styled.div`
  padding: 4px 9px;
  ${templates.centerContent};
  border: 1px solid ${colorsTheme.grayBorder};
  border-radius: 5px;
`;
const SalePatch = styled.div`
  position: absolute;
  top: 9px;
  right: 12px;
  padding: 4px 9px;
  background-color: ${colorsTheme.redHover};
  border-radius: 5px;
`;
