import React, { useState } from "react";
import styled from "styled-components";
import { fonts } from "../../../../../../theme/fonts";
import { colors } from "../../../../../../theme/colors";
import Image from "next/image";
import { Text } from "@/components/Text/Text";
import { useTranslation } from "react-i18next";
import BlurWrapper from "@/components/BlurWrapper/BlurWrapper";
import s from '../CatalogScreen.module.scss'
import Link from "next/link";
import {GenerateLink} from "@/helpers/GenerateLink";
import {useRouter} from "next/router";

const Dropdown = (items : { items: {name:string, code:string}[] }) => {
    const r = useRouter()
  return (
    <div className={s.drop_down_content}>
      {items.items.map((item, index) => (
        <Link href={GenerateLink(r,{queryParameters:{sort:item.code}})} className={s.item} key={index}>{item.name}</Link>
      ))}
    </div>
  );
};

const DropdownOption = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const options = [
      {name:"Від дорощих",code:"SortByRetailPriceDescend"},
      {name:"Від дешевших",code:"SortByRetailPriceAscend"},
      {name:"За популярністю",code:"SortByPopularityDescend"},
      {name:"Зі знижкою",code:"SortByDiscountDescend"}
  ];

  return (
      <div className={s.drop_down_container}>
        <OptionContainer onClick={handleToggleDropdown}>
          <Text color={colors.grayMain} size="13px" fontStyle={fonts.f400}>
            Не обрано
          </Text>
          <RotatingImage
              alt="Eye Icon"
              width={16}
              height={16}
              src="/icons/catArrow.svg"
              $isOpen={isOpen}
          />
        </OptionContainer>
        {isOpen && <Dropdown items={options} />}
      </div>
  );
};

export default DropdownOption;

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

const RotatingImage = styled(Image)<{ $isOpen: boolean }>`
  transition: transform 0.3s;
  transform: ${({ $isOpen }) => ($isOpen ? "rotate(180deg)" : "rotate(0)")};
`;
