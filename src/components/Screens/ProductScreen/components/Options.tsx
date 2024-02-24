import { Text } from "@/components/Text/Text";
import { FC, useEffect } from "react";
import { styled } from "styled-components";
import { colors } from "../../../../../theme/colors";
import { fonts } from "../../../../../theme/fonts";
import { RowContainer, SizeContainer } from "../ProductScreenStyles";
import {useProductPageStore} from "@/store/ProductPageStore";
import Link from "next/link";
import {GenerateLink} from "@/helpers/GenerateLink";

const OptionsProduct = () => {

  const state = useProductPageStore()
  const product = state.product!

  return (
    <>
      {state.uniqueOptions.map((el, index) =>
      {
          return(
        <div key={index}>
            <Text
              color={colors.black}
              size="15px"
              fontStyle={fonts.f400}
              margin="35px 0 22px 0"
            >
              {el.name}
            </Text>
          <RowContainer style={{ gap: "8px", width: "60%", flexWrap: "wrap" }}>
            {state.uniqueVariants.filter(n=>n.optionId === el.id).map((variant, idx: number) =>
            {
                if(!state.selectedVariants.includes(variant.variantId))
                  return (
                      <Link href={GenerateLink('/product',{id:product.product.id, options:state.addVariant(variant)})}>
                          {state.getVariantButton(variant)}
                      </Link>)
                else return state.getVariantButton(variant)
                })
              }
          </RowContainer>
        </div>
      )})}
    </>
  );
};

export default OptionsProduct;
