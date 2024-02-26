import { FC, useState } from "react";
import { Text } from "@/components/Text/Text";
import { colors } from "../../../../../theme/colors";
import { fonts } from "../../../../../theme/fonts";
import styled, { css } from "styled-components";
import { ShopData } from "@/helpers/hooks/useShopData";

type Props = {
  shopData: ShopData;
  sidebar?: boolean;
};

const BlockWithFrame = ({ shopData, sidebar }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <MainWrapper sidebar={sidebar}>
      <Wrapper>
        <BlockInfo>
          <Text
            color={colors.black}
            size="16px"
            fontStyle={fonts.f400}
            whiteSpace
          >
            Веломагазин {shopData.name}
          </Text>
          <Text
            color={colors.black}
            size="16px"
            fontStyle={fonts.f400}
            whiteSpace
          >
            {shopData.address.split(", ")[0]}. {shopData.address.split(", ")[1]}
          </Text>
        </BlockInfo>
        <Text
          color={colors.black}
          size="15px"
          fontStyle={fonts.f400}
          whiteSpace
          style={{ lineHeight: "24px" }}
        >
          Режим роботи
          <br />
          ПН-ПТ: 10:00-18:00
          <br />
          СБ-ВС: 10:00-18:00
        </Text>
        {/* <HiddenText sidebar={sidebar}></HiddenText> */}
        {/* <OpenArrow
          src="/images/contacts/arrow.svg"
          open={open}
          sidebar={sidebar}
          onClick={() => setOpen(!open)}
        /> */}
        {/* <FrameWrapper sidebar={sidebar}>
          <iframe
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2538.9874851367085!2d30.4052962!3d50.4785767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cd0186deb2bb%3A0xa0965395ee27686a!2z0YPQuy4g0JTQsNC90LjQu9CwINCp0LXRgNCx0LDQutC40LLRgdC60L7Qs9C-LCA1OSwg0JrQuNC10LIsIDAyMDAw!5e0!3m2!1sru!2sua!4v1702890029350!5m2!1sru!2sua`}
            width="100%"
            height="248"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </FrameWrapper> */}
      </Wrapper>
      {/* {open && (
        <FrameWrapper2>
          <iframe
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2538.9874851367085!2d30.4052962!3d50.4785767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cd0186deb2bb%3A0xa0965395ee27686a!2z0YPQuy4g0JTQsNC90LjQu9CwINCp0LXRgNCx0LDQutC40LLRgdC60L7Qs9C-LCA1OSwg0JrQuNC10LIsIDAyMDAw!5e0!3m2!1sru!2sua!4v1702890029350!5m2!1sru!2sua`}
            width="100%"
            height="248"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </FrameWrapper2>
      )} */}
    </MainWrapper>
  );
};

export default BlockWithFrame;

const BlockInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const MainWrapper = styled.div<{ sidebar?: boolean }>`
  display: flex;
  flex-direction: column;
  border: 1px solid ${colors.grayBorder};
  border-radius: 15px;
  margin-top: 50px;
  @media (max-width: 900px) {
    border-radius: 0;
    margin-top: 0;
  }
  ${(p) =>
    p.sidebar &&
    css`
      border-radius: 0;
      margin-top: 0;
    `}
`;

const Wrapper = styled.div`
  display: flex;
  column-gap: 40px;
  justify-content: space-between;
  padding: 20px;
`;
const FrameWrapper = styled.div<{ sidebar?: boolean }>`
  width: 100%;
  height: auto;
  @media (max-width: 900px) {
    display: none;
  }
  ${(p) =>
    p.sidebar &&
    css`
      display: none;
    `}
`;
const FrameWrapper2 = styled.div`
  width: 100%;
  height: auto;
  padding: 20px;
`;
const HiddenText = styled.div<{ sidebar?: boolean }>`
  @media (max-width: 500px) {
    display: none;
  }
  ${(p) =>
    p.sidebar &&
    css`
      display: none;
    `}
`;
const OpenArrow = styled.img<{ open: boolean; sidebar?: boolean }>`
  display: none;
  width: 15px;
  height: 9px;
  transition: transform 0.3s ease;
  transform: rotate(${(p) => (p.open ? "180deg" : "0deg")});
  cursor: pointer;
  @media (max-width: 900px) {
    display: block;
  }
  ${(p) =>
    p.sidebar &&
    css`
      display: block;
    `}
`;
