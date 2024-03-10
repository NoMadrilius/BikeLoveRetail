"use client"
import { styled } from "styled-components";
import { Header, NumberContainer } from "./Registration";
import { colors } from "../../../../../theme/colors";
import { Text } from "@/components/Text/Text";
import { fonts } from "../../../../../theme/fonts";
import { templates } from "../../../../../theme/templates";
import { observer } from "mobx-react";
import { useTranslation } from "react-i18next";
import {useCheckList} from "@/store/CheckListStore";

const PayInfo= () => {
  const { t } = useTranslation();

  const st = useCheckList()

  return (
    <Wrapper>
      <Header>
        <NumberContainer>
          <Text color={colors.black} size="15px" fontStyle={fonts.f500}>
            3
          </Text>
        </NumberContainer>
        <Text
          color={colors.black}
          size="22px"
          fontStyle={fonts.f600}
          textTransform="uppercase"
        >
          ДОДАТКОВА ІНФОРМАЦІЯ
        </Text>
      </Header>
      <Container>
        <ButtonsContainer>
          <TextArea onChange={(e) => st.setClientDesc(e.target.value)} value={st.clientDesc}/>
          {/* <Button
						selected={selectedPayMethod === "PP"}
						onClick={() => setSelectedPayMethod("PP")}>
						<Text color={colors.black} size='15px' fontStyle={fonts.f500}>
							При получении
						</Text>
					</Button>
					<Button
						selected={selectedPayMethod === "L"}
						onClick={() => setSelectedPayMethod("L")}>
						<Image
							alt='LiqPay'
							width={64}
							height={32}
							src='/images/account/icons/liqpay.svg'
							style={{ marginRight: "10px" }}
						/>
					</Button>
					<Button
						selected={selectedPayMethod === "P"}
						onClick={() => setSelectedPayMethod("P")}>
						<Image
							alt='Portmone.com'
							width={119}
							height={34}
							src='/images/account/icons/portmone.svg'
							style={{ marginRight: "10px" }}
						/>
					</Button> */}
        </ButtonsContainer>
        <Button
            disabled={false}
          onClick={()=>{st.createOrder()}}
        >
          <Text color={colors.white} size="16px" fontStyle={fonts.f500}>
            {t("checkList.goToPay")}
          </Text>
        </Button>
        <Text
          color={colors.grayBorder}
          size="15px"
          fontStyle={fonts.f500}
          margin="41px 0 0 0"
        >
          {t("checkList.whenIPressThis")}
        </Text>
        <Text
          color={colors.grayBorder}
          size="15px"
          fontStyle={fonts.f500}
          margin="24px 0 0 0"
        >
          {t("checkList.label")}
        </Text>
      </Container>

    </Wrapper>
  );
};
export default observer(PayInfo);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 78px;
  @media (max-width: 756px) {
    margin-left: 0;
    align-items: center;
  }
`;
const ButtonsContainer = styled.div`
  display: flex;
  column-gap: 13px;
  margin: 42px 0 54px 0;
  @media (max-width: 640px) {
    flex-direction: column;
    row-gap: 12px;
    width: 100%;
  }
`;
const Button = styled.div<{ disabled: boolean }>`
  width: 188px;
  height: 52px;
  ${templates.centerContent};
  border: 1px solid ${(p) => (p.disabled ? colors.redMain : colors.grayBorder)};
  border-radius: 5px;
  background-color: ${colors.redMain};
  cursor: pointer;
  @media (max-width: 640px) {
    width: 100%;
  }
`;
const TextArea = styled.textarea`
  width: 100%;
  height: 127px;
  resize: none;
  font-family: ${fonts.f400.fontFamily};
  font-size: 16px;
`;
