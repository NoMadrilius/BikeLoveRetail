import { styled } from "styled-components";
import { templates } from "../../../../theme/templates";
import { colors } from "../../../../theme/colors";
import { Text } from "@/components/Text/Text";
import { fonts } from "../../../../theme/fonts";
import { FC } from "react";
import { metrics } from "../../../../theme/metrics";

type Props = {
  value: string;
  onChange: any;
};

const Input: FC<Props> = ({ onChange, value }) => {
  return (
    <Wrapper>
      <InputField
        placeholder="Поиск"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <SearchIcon src="/images/home/searchIcon.svg" />
    </Wrapper>
  );
};
export default Input;

const Wrapper = styled.div`
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
const SearchIcon = styled.img`
  cursor: pointer;
`;
