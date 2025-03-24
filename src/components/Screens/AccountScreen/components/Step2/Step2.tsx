import { styled } from "styled-components";
import { templates } from "../../../../../../theme/templates";
import { colors } from "../../../../../../theme/colors";
import { fonts } from "../../../../../../theme/fonts";
import { FC, useState } from "react";
import Item from "./Item";
import { useTranslation } from "react-i18next";
import {OrderFullData} from "@/dataTransferObjects/entities/OrderFullData";
import { Typography } from "@mui/material";

type Props = {
  data: OrderFullData[];
};

const Step2: FC<Props> = ({ data }) => {
  const { t } = useTranslation();
  const [orderTab, setOrderTab] = useState(0);
  const TITLES = [
    { title: t("account.step2.title1"), tab: 0 },
    { title: t("account.step2.title2"), tab: 1 },
    { title: t("account.step2.title3"), tab: 2 },
    { title: t("account.step2.title4"), tab: 3 },
  ];

  /*

  <Header>
          {TITLES.map((el, index) => (
            <Button
              key={index}
              active={el.tab === orderTab}
              onClick={() => setOrderTab(el.tab)}
            >
              <Typography color={colors.black} fontSize="15px" fontStyle={fonts.f400}>
                {el.title}
              </Typography>
            </Button>
          ))}
        </Header>
   */
  return (
    <>
      <>

        {data.length>0 && (
          <MainContainer>
            {data.map((el, index: number) => (
              <Item key={index} data={el} />
            ))}
          </MainContainer>
        )}
      </>
    </>
  );
};
export default Step2;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  column-gap: 13px;
  @media (max-width: 1150px) {
    column-gap: 5px;
  }
  @media (max-width: 770px) {
    flex-wrap: wrap;
    row-gap: 5px;
  }
`;
const Button = styled.div<{ active: boolean }>`
  width: 179px;
  height: 56px;
  background-color: ${(p) => (p.active ? colors.redBlur : "transparent")};
  ${templates.centerContent};
  border-radius: 5px;
  border: 1px solid ${colors.grayBorder};
  cursor: pointer;
  @media (max-width: 1150px) {
    width: 106px;
    height: 46px;
  }
`;
