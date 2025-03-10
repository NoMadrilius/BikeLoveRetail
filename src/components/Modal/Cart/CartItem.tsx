import { styled } from "styled-components";
import { colors } from "../../../../theme/colors";
import { fonts } from "../../../../theme/fonts";
import { templates } from "../../../../theme/templates";
import { useCartStore } from "@/store/CartStore";
import { observer } from "mobx-react";
import { useWishListStore } from "@/store/WishListStore";
import { useRouter } from "next/router";
import {Product} from "@/dataTransferObjects/entities/Product";
import {ProductFullData} from "@/dataTransferObjects/response/ProductFullData";
import { Typography } from "@mui/material";
import { CatalogPageProduct } from "@/dataTransferObjects/response/catalogPage/CatalogPageProduct";
import { prettyPrice } from "@/helpers/stringDecorate/prettyPrice";

const CartItem = (p:{d:{product:CatalogPageProduct, quantity:number}}) => {
  const state = useCartStore();
  const wishStore = useWishListStore();
  const router = useRouter();
  const id = p.d.product.id
  const product = p.d.product
  const q = p.d.quantity

  const counterHandler = (symbol: string) => {
    if (symbol === "plus") {
      state.updateProductQuantity(id, q + 1);
    }
    if (symbol === "minus" && q > 1) {
      state.updateProductQuantity(id, q - 1);
    }
  };
  const removeItem = () => {
    state.removeFromCart(id);
  };
  const likeItem = () => {
    //wishStore.addToWishList(p.d.product, null);
  };

  const productInWishList = wishStore.wishList?.some(
    (i) => i.id === id
  );
  const goToProduct = () => {
    router.push(`/product/${id}`);
    state.setVisible(false);
  };
  return (
    <Wrapper>
      <Options>
        <Icon src="/images/card/can.svg" onClick={() => removeItem()} />
        {productInWishList ? (
          <Icon
            src="/images/card/heart-red.svg"
            onClick={() => wishStore?.removeFromWishList(id)}
          />
        ) : (
          <Icon src="/images/card/heart.svg" onClick={() => likeItem()} />
        )}
      </Options>
      <Picture
        src={"/mock/NoPhoto.png"}
        onClick={() => goToProduct()}
      />
      <InfoContainer>
        <Typography color={colors.black} fontSize="16px" fontStyle={fonts.f600}>
          {product.name}
        </Typography>
        <InfoBottomContainer>
          {/* {product.sale && (
						<SalePatch>
							<Text color={colors.white} size='14px' fontStyle={fonts.f400}>
								-{product.sale}%
							</Text>
						</SalePatch> 
					)}*/}
          {product?.oldPrice && (
            <Typography
              color={colors.grayMain}
              fontSize="16px"
              fontStyle={fonts.f400}
            >
              {prettyPrice(product.oldPrice)}
            </Typography>
          )}

          <Typography color={colors.black} fontSize="16px" fontStyle={fonts.f400}>
            {prettyPrice(product.price)}
          </Typography>
        </InfoBottomContainer>
      </InfoContainer>
      <RightContainer>
        <CounterContainer>
          <Typography
            color={colors.black}
            fontSize="21px"
            fontStyle={fonts.f400}
            onClick={() => counterHandler("minus")}
            style={{userSelect:"none"}}
          >
            -
          </Typography>
          <CounterBox>
            <Typography color={colors.black} fontSize="17px" fontStyle={fonts.f400}>
              {q}
            </Typography>
          </CounterBox>
          <Typography
            color={colors.black}
            fontSize="21px"
            fontStyle={fonts.f400} style={{userSelect:"none"}}
            onClick={() => counterHandler("plus")}
          >
            +
          </Typography>
        </CounterContainer>
        <Typography
          color={colors.black}
          fontSize="21px"
          fontStyle={fonts.f400}
          maxWidth="146px"
        >
          {prettyPrice(q* product.price)}
        </Typography>
      </RightContainer>
    </Wrapper>
  );
};
export default observer(CartItem);

const Options = styled.div`
  position: absolute;
  width: 75px;
  height: 35px;
  top: 5px;
  right: 5px;
  border-radius: 5px;
  ${templates.centerContent};
  column-gap: 15px;
  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.07);
`;
const Icon = styled.img`
  cursor: pointer;
`;

const Wrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  padding: 25px 0;
  border-bottom: 1px solid ${colors.grayBorder};
  @media (max-width: 765px) {
    row-gap: 13px;
    flex-wrap: wrap;
  }
`;
const Picture = styled.img`
  padding: 10px;
  width: 164px;
  height: 112px;
  border: 1px solid ${colors.grayBorder};
  border-radius: 10px;
`;
const InfoBottomContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 21px;
  align-items: center;
  gap: 6px;
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin: 0 auto 0 20px;
  @media (max-width: 765px) {
    margin: 0 auto 0 0;
  }
`;
const SalePatch = styled.div`
  background-color: ${colors.redMain};
  padding: 5px 7px;
  border-radius: 5px;
`;
const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 23px;
  @media (max-width: 1085px) {
    column-gap: 7px;
  }
`;
const CounterBox = styled.div`
  width: 45px;
  height: 45px;
  ${templates.centerContent};
  border: 1px solid ${colors.grayBorder};
  border-radius: 5px;
  @media (max-width: 850px) {
    width: 32px;
    height: 32px;
  }
`;
const RightContainer = styled.div`
  display: flex;
  column-gap: 71px;
  align-items: center;
  @media (max-width: 1085px) {
    column-gap: 14px;
  }
`;
