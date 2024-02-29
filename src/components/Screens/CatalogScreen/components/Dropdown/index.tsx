import React, { useState } from "react";
import styled from "styled-components";
import { fonts } from "../../../../../../theme/fonts";
import { colors } from "../../../../../../theme/colors";
import Image from "next/image";
import { Text } from "@/components/Text/Text";
import { useTranslation } from "react-i18next";

const Dropdown = ({ items }: { items: string[] }) => {
  return (
    <DropdownContent>
      {items.map((item, index) => (
        <DropdownItem key={index}>{item}</DropdownItem>
      ))}
    </DropdownContent>
  );
};

const DropdownOption = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const options = ["Option 1", "Option 2", "Option 3"];

  return (
    <DropdownContainer>
      <OptionContainer onClick={handleToggleDropdown}>
        <Text color={colors.grayMain} size="13px" fontStyle={fonts.f400}>
          {t("catalog.fromPrice")}
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
    </DropdownContainer>
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

const DropdownContainer = styled.div`
  position: relative;
`;

const DropdownContent = styled.div`
  position: absolute;
  width: 100%;
  top: calc(100% + 5px);
  left: 0;
  background-color: white;
  border: 1px solid ${colors.grayMain};
  border-radius: 5px;
  overflow: hidden;
  z-index: 999;
`;

const DropdownItem = styled.div`
  cursor: pointer;
  padding: 8px 12px;
  color: #000000;
  font-size: 13px;
  font-weight: 400;
  &:hover {
    background-color: ${colors.grayBg};
  }
`;

const RotatingImage = styled(Image)<{ $isOpen: boolean }>`
  transition: transform 0.3s;
  transform: ${({ $isOpen }) => ($isOpen ? "rotate(180deg)" : "rotate(0)")};
`;
