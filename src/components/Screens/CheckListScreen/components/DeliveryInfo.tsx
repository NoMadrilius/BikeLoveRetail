"use client"
import { styled } from "styled-components";
import { Header, NumberContainer, Wrapper } from "./Registration";
import { Text } from "@/components/Text/Text";
import { colors } from "../../../../../theme/colors";
import { fonts } from "../../../../../theme/fonts";
import { templates } from "../../../../../theme/templates";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import {AsyncSelectSearchCityNP} from "@/components/Screens/CheckListScreen/components/AsyncSelectSearchCityNP";
import {
  AsyncSelectSearchWarehouseNP
} from "@/components/Screens/CheckListScreen/components/AsyncSelectSearchWarehoseNP";
import Select from "react-select/creatable";
import {useCheckList} from "@/store/CheckListStore";
import {observer} from "mobx-react";
import {useAppStore} from "@/store/AppStore";

const DeliveryInfo = () => {
  const { t } = useTranslation();

  const st = useCheckList()
  const appSt = useAppStore()

  return (
    <Wrapper>
        <Header>
          <NumberContainer>
            <Text color={colors.black} size="15px" fontStyle={fonts.f500}>
              2
            </Text>
          </NumberContainer>
          <Text
              color={colors.black}
              size="22px"
              fontStyle={fonts.f600}
              textTransform="uppercase"
          >
            {t("checkList.chooseShop")}
          </Text>
        </Header>
        <Container>
        <ButtonsContainer>
        <Button
        selected={st.deliveryType === "ShopPickUp"}
        onClick={() => st.setDeliveryType("ShopPickUp")}
        >
        <Image
        alt="Samovivoz Icon"
        width={22}
        height={22}
        src="/images/account/icons/samovivoz.svg"
        style={{marginRight: "10px"}}
        />
        <Text color={colors.black} size="16px" fontStyle={fonts.f400}>
      {t("checkList.self-delivery")}
        </Text>
        </Button>
        <Button
        selected={st.deliveryType === "DeliveryNP"}
        onClick={() => st.setDeliveryType("DeliveryNP")}
        >
        <Image
        alt="Nova Poshta"
        width={29}
        height={29}
        src="/images/account/icons/np.svg"
        style={{marginRight: "10px"}}
        />
        <Text color={colors.black} size="16px" fontStyle={fonts.f400}>
        Нова пошта
        </Text>
        </Button>
        </ButtonsContainer>

      {st.deliveryType === "DeliveryNP" && (
        <>
        <div><AsyncSelectSearchCityNP onSelect={r=>st.setCity(r)} value={st.city}/></div>
      {st.city &&
        <div><AsyncSelectSearchWarehouseNP onSelect={r=>st.setWarehouse(r)} value={st.warehouse} cityId={st.city.Ref}/></div>
      }
        </>
        )}
      {st.deliveryType === "ShopPickUp" && (
        <div style={{color:'black'}}>
        <Select placeholder={"Оберіть магазин"}
        options={appSt.shops!}
        getOptionLabel={label => label!.address}
        getOptionValue={value => value!.address}
        value={st.pickupShop!}
        onChange={r=>st.setPickupShop(r)}
        /></div>
        )}
        </Container>

    </Wrapper>
  );
};
export default observer(DeliveryInfo);

const ButtonsContainer = styled.div`
  display: flex;
  column-gap: 13px;
`;
const Button = styled.div<{ selected: boolean }>`
  width: 217px;
  height: 56px;
  ${templates.centerContent};
  border: 1px solid ${(p) => (p.selected ? colors.redMain : colors.grayBorder)};
  cursor: pointer;
  border-radius: 5px;
`;

const Container = styled.div`
  margin-top: 42px;
  display: flex;
  flex-direction: column;
  margin-left: 78px;
  row-gap: 32px;
  @media (max-width: 756px) {
    margin-left: 0;
  }
`;
