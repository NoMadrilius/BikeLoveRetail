"use client";
import { styled } from "styled-components";
import { templates } from "../../../../../theme/templates";
import { colors } from "../../../../../theme/colors";
import { fonts } from "../../../../../theme/fonts";
import { FC, useEffect, useState } from "react";
import { metrics } from "../../../../../theme/metrics";
import Image from "next/image";
import axios from "axios";
import { Text } from "@/components/Text/Text";
import { useCurrencyStore } from "@/store/CurrencyStore";
import { prettyPrice } from "@/helpers/stringDecorate/stringDecorate";
import { observer } from "mobx-react";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import Link from "next/link";

type Props = {
  value: string;
  onChange: any;
};
type Preview = {
  image: string | null;
  productName: string;
  productId: number;
  retailPrice: number;
};

const Input: FC<Props> = ({ onChange, value }) => {
  const { t } = useTranslation();
  const [previwData, setPreviewData] = useState<Preview[]>();
  const [focused, setFocused] = useState(false);
  const [areaIsOpen, setAreaIsOpen] = useState(false);
  const router = useRouter();
  const currStore = useCurrencyStore();
  const [priceStr, setPriceStr] = useState<any>();
  const handlePrice = (price: string) => {
    setPriceStr(prettyPrice(price));
  };
  useEffect(() => {
    handlePrice;
  }, []);
  const getSearchPreview = async (value: string) => {
    try {
      const response = await axios.get(`/api/search?query=${value}`);
      setPreviewData(response.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getSearchPreview(value);
  }, [value]);
  useEffect(() => {
    onChange("");
  }, [router.pathname]);

  const handleClickSearchIcon = () => {
    if (value.trim() !== "") {
      router.push(`/catalog?searchparam=${encodeURIComponent(value)}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && value.trim() !== "") {
      router.push(`/catalog?searchparam=${encodeURIComponent(value)}`);
    }
  };
  return (
    <>
      <Wrapper>
        <InputField
          placeholder={t("header.search")}
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChange(e.target.value)
          }
          onFocus={() => setFocused(true)}
          onKeyDown={handleKeyDown} // Add onKeyDown event handler
        />
        <SearchIcon
          width={20}
          height={20}
          alt="Search Icon"
          src="/images/home/searchIcon.svg"
          onClick={handleClickSearchIcon} // Add onClick event handler
        />
        {previwData?.length && focused && value.length ? (
          <PreviewArea>
            {previwData?.map((el, index) => (
              <PreviewItemWrapper
                href={`/product/${el.productId}`}
                key={index}
                onClick={() => {
                  setFocused(false);
                }}
              >
                <ImagePreview
                  alt="PrewievImage"
                  width={100}
                  height={100}
                  src={el.image || "/mock/NoPhoto.png"}
                />
                <Text color={colors.black} size="14px" fontStyle={fonts.f500}>
                  {el.productName}
                  <Text
                    color={colors.black}
                    size="14px"
                    fontStyle={fonts.f400}
                    margin="5px  0 0 0"
                  >
                    {prettyPrice(el.retailPrice)}
                  </Text>
                </Text>
              </PreviewItemWrapper>
            ))}
          </PreviewArea>
        ) : null}
      </Wrapper>
    </>
  );
};
export default observer(Input);

const Wrapper = styled.div`
  position: relative;
  ${templates.centerContent};
  border: 1px solid ${colors.white};
  padding: 10px 24px;
  border-radius: 20px;
  background-color: ${colors.opacityBg};
  margin-left: auto;
  @media (max-width: ${metrics.mobile}) {
    display: none;
  }
`;
const InputField = styled.input`
  all: unset;
  &::placeholder {
    color: white;
    font-weight: ${fonts.f400.fontWeight};
    font-family: ${fonts.f400.fontFamily};
  }
`;
const SearchIcon = styled(Image)`
  cursor: pointer;
`;

const PreviewArea = styled.div`
  width: 200%;
  top: 50px;
  position: absolute;
  display: flex;
  flex-direction: column;
  height: 300px;
  overflow: scroll;
  background-color: white;
  color: black;
  border-radius: 10px;
  padding: 10px;
`;
const PreviewItemWrapper = styled(Link)`
  display: flex;
  align-items: center;
  padding: 10px 0;
  border: 1px solid black;
  border-left: none;
  border-right: none;
  column-gap: 5px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: ${colors.redBlur};
  }
`;
const ImagePreview = styled(Image)`
  width: 30%;
  min-width: 30%;
  max-width: 30%;
  border-radius: 10px;
  height: fit-content;
`;
