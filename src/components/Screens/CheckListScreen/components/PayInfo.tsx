import { styled } from "styled-components";
import { Header, NumberContainer } from "./Registration";
import { colors } from "../../../../../theme/colors";
import { Text } from "@/components/Text/Text";
import { fonts } from "../../../../../theme/fonts";
import { templates } from "../../../../../theme/templates";
import { ButtonCustom } from "@/components/ButtonCustom/ButtonCustom";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { IOrderData } from "@/types/types";
import { showToast } from "@/helpers/alertService/alertService";
import { useProductStore } from "@/store/ProductStore";
import Loader from "@/helpers/Loader/Loader";
import { observer } from "mobx-react";
import { useTranslation } from "react-i18next";

type Props = {
  setSendData: any;
  data: IOrderData;
};

const PayInfo: FC<Props> = ({ setSendData, data }) => {
  const { t } = useTranslation();
  const productStore = useProductStore();
  const [desc, setDesc] = useState("");
  useEffect(() => {
    setSendData((prevData: IOrderData) => ({
      ...prevData,
      order: {
        ...prevData.order,
        descriptionCilent: desc,
      },
    }));
  }, [desc]);

  const onPress = () => {
    if (!data.order.clientId) {
      showToast({
        info: t("checkList.toast1"),
        title: t("checkList.toastError"),
        type: "error",
      });
      return;
    }

    if (
      data.order.deliveryInfo == "" &&
      data.order.deliveryType === "ShopPickUp"
    ) {
      showToast({
        info: t("checkList.toast2"),
        title: t("checkList.toastError"),
        type: "error",
      });
      return;
    }
    if (
      data.order.deliveryInfo === undefined &&
      data.order.deliveryType === "DeliveryNP"
    ) {
      showToast({
        info: t("checkList.toast3"),
        title: t("checkList.toastError"),
        type: "error",
      });
      return;
    }

    try {
      productStore.sendOrder(data);
    } catch (error) {
      console.log("error");
    }
  };

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
          {t("checkList.additionalIfo")}
        </Text>
      </Header>
      <Container>
        <ButtonsContainer>
          <TextArea onChange={(e) => setDesc(e.target.value)} />
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
          disabled={productStore?.loadingSendOrder}
          onClick={() => onPress()}
        >
          {productStore?.loadingSendOrder ? (
            <Loader />
          ) : (
            <Text color={colors.white} size="16px" fontStyle={fonts.f500}>
              {t("checkList.goToPay")}
            </Text>
          )}
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
`;
