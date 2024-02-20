import { styled } from "styled-components";
import { Header, NumberContainer, Wrapper } from "./Registration";
import { Text } from "@/components/Text/Text";
import { colors } from "../../../../../theme/colors";
import { fonts } from "../../../../../theme/fonts";
import { templates } from "../../../../../theme/templates";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";
import { OrderDeliveryInfo } from "@/types/types";
import { useTranslation } from "react-i18next";

const SHOPS = [
  "г. Киев Веломагази Bikelove ул. Данила Щербаковского",
  "г. Киев Веломагази Bikelove ул. Данила Щербаковского",
  "г. Киев Веломагази Bikelove ул. Данила Щербаковского",
];

const DeliveryInfo = ({ setSendData }: any) => {
  const { t } = useTranslation();
  const [adress, setAdress] = useState<string>("");
  const [viewAdress, setViewAdress] = useState<
    { name: string; desc: string; type: string; ref: string }[]
  >([{ name: "", desc: "", type: "", ref: "" }]);
  const [realAdress, setRealAdress] = useState<string>("");
  const [vidd, setVidd] = useState<OrderDeliveryInfo[]>([]);
  const [selectedVidd, setSelectedVidd] = useState<OrderDeliveryInfo>();
  const [selectedShop, setSelectedShop] = useState<string>("");
  const [openVidd, setOpenVidd] = useState(false);
  const [openShop, setOpenShop] = useState(false);
  const [cityRef, setCityRef] = useState<string>("");

  const [selectedDelivery, setSelectedDelivery] = useState<"NP" | "S">("NP");
  const getAdresses = async () => {
    try {
      const response = await axios.get(`/api/getNpAdress`, {
        params: {
          adress,
        },
      });
      setViewAdress(
        response.data.data.map((el: any) => ({
          name: el.Description,
          type: el.SettlementTypeDescription,
          desc: el.AreaDescription,
          ref: el.Ref,
        }))
      );
    } catch (error) {
      console.log("error");
    }
  };
  const getVidd = async () => {
    try {
      const response = await axios.get("/api/getNpVidd", {
        params: {
          cityRef,
        },
      });
      setVidd(
        response.data.data.map((el: any) => ({
          DeliveryService: "NovaPoshta",
          Description: el.Description,
          CityName: el.CityDescription,
          AreaName: el.SettlementAreaDescription,
          CityRef: el.CityRef,
          SettlementType: el.SettlementTypeDescription,
          WarehouseName: el.Description,
          WarehouseAddress: el.ShortAddress,
          WarehousePhone: el.Phone,
          WarehouseRef: el.Ref,
          WarehouseTypeRef: el.TypeOfWarehouse,
        }))
      );
    } catch (error) {
      console.log("error");
    }
  };
  useEffect(() => {
    getAdresses();
    if (!adress.length) {
      setCityRef("");
    }
  }, [adress]);
  useEffect(() => {
    setSelectedVidd(undefined);
    getVidd();
  }, [cityRef]);

  const deliveryInform =
    selectedDelivery === "NP"
      ? JSON.stringify(selectedVidd)
      : `${selectedShop}`;
  const deliveryType = selectedDelivery === "NP" ? `DeliveryNP` : `ShopPickUp`;

  useEffect(() => {
    setSendData((prevData: any) => ({
      ...prevData,
      order: {
        ...prevData.order,
        deliveryType: deliveryType,
        deliveryInfo: deliveryInform,
      },
    }));
  }, [selectedDelivery, selectedShop, selectedVidd, adress]);

  const resSelectText = selectedVidd
    ? selectedVidd.Description
    : selectedDelivery === "S"
    ? t("checkList.chooseShop")
    : t("checkList.chooseVidd");

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
            selected={selectedDelivery === "S"}
            onClick={() => setSelectedDelivery("S")}
          >
            <Image
              alt="Samovivoz Icon"
              width={22}
              height={22}
              src="/images/account/icons/samovivoz.svg"
              style={{ marginRight: "10px" }}
            />
            <Text color={colors.black} size="16px" fontStyle={fonts.f400}>
              {t("checkList.self-delivery")}
            </Text>
          </Button>
          <Button
            selected={selectedDelivery === "NP"}
            onClick={() => setSelectedDelivery("NP")}
          >
            <Image
              alt="Nova Poshta"
              width={29}
              height={29}
              src="/images/account/icons/np.svg"
              style={{ marginRight: "10px" }}
            />
            <Text color={colors.black} size="16px" fontStyle={fonts.f400}>
              Нова пошта
            </Text>
          </Button>
        </ButtonsContainer>

        {selectedDelivery === "NP" && (
          <>
            <Select>
              <Image
                src="/icons/location.svg"
                alt="Location"
                width={30}
                height={30}
              />
              <InputField
                value={adress}
                placeholder={t("checkList.startTyping")}
                onChange={(e) => setAdress(e.target.value)}
              />
              {adress.length && viewAdress.length ? (
                <SelectArea>
                  {viewAdress.map((el: any, index: number) => (
                    <SelectItem
                      key={index}
                      onClick={() => {
                        setCityRef(el.ref);
                        setAdress(
                          `${el.type.charAt(0)}. ${el.name}, ${el.desc} обл.`
                        );
                      }}
                    >
                      {el.type.charAt(0)}. {el.name}, {el.desc} обл.
                    </SelectItem>
                  ))}
                </SelectArea>
              ) : null}
            </Select>
            {cityRef && (
              <Select>
                <Image
                  src="/icons/Viddilennya.svg"
                  alt="Location"
                  width={18}
                  height={18}
                />
                <Text
                  color={colors.black}
                  size="14px"
                  fontStyle={fonts.f500}
                  margin="0 0 0 10px"
                >
                  {resSelectText as string}
                </Text>
                {openVidd && (
                  <SelectArea>
                    {vidd.map((el, index: number) => (
                      <SelectItem
                        key={index}
                        onClick={() => {
                          setOpenVidd(false);
                          setSelectedVidd(el);
                        }}
                      >
                        {el.Description}
                      </SelectItem>
                    ))}
                  </SelectArea>
                )}
                <OpenButton
                  src="/icons/catArrow.svg"
                  alt="Location"
                  width={18}
                  height={18}
                  onClick={() => setOpenVidd(!openVidd)}
                  open={openVidd}
                  style={{ marginLeft: "auto" }}
                />
              </Select>
            )}
          </>
        )}
        {selectedDelivery === "S" && (
          <Select>
            <Image
              src="/icons/Viddilennya.svg"
              alt="Location"
              width={18}
              height={18}
            />
            <Text
              color={colors.black}
              size="14px"
              fontStyle={fonts.f500}
              margin="0 0 0 10px"
            >
              {selectedShop || t("checkList.chooseShop")}
            </Text>
            {openShop && (
              <SelectArea>
                {SHOPS.map((el: any, index: number) => (
                  <SelectItem
                    key={index}
                    onClick={() => {
                      setOpenShop(false);
                      setSelectedShop(el);
                    }}
                  >
                    {el}
                  </SelectItem>
                ))}
              </SelectArea>
            )}
            <OpenButton
              src="/icons/catArrow.svg"
              alt="Location"
              width={18}
              height={18}
              onClick={() => setOpenShop(!openShop)}
              open={openVidd}
              style={{ marginLeft: "auto" }}
            />
          </Select>
        )}
      </Container>
    </Wrapper>
  );
};
export default DeliveryInfo;

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
const Select = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 589px;
  height: 75px;
  box-sizing: border-box;
  padding: 19px 35px;
  border: 1px solid ${colors.grayBorder};
  border-radius: 5px;
  @media (max-width: 756px) {
    width: 100%;
  }
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
const InputField = styled.input`
  all: unset;
  width: 100%;
  height: 20px;
  color: black;
  padding-left: 10px;
  /* border-bottom: 1px solid ${colors.grayBorder}; */
`;
const SelectArea = styled.div`
  position: absolute;
  z-index: 5;
  padding: 10px;
  top: 60px;
  left: 0;
  border: 1px solid ${colors.grayBorder};
  border-radius: 10px;
  width: 100%;
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  max-height: 300px;
  overflow: scroll;
`;
const SelectItem = styled.div`
  /* border: 1px solid ${colors.black};
	border-left: none;
	border-right: none; */
  color: black;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: ${colors.redBlur};
  }
`;
const OpenButton = styled(Image)<{ open: boolean }>`
  width: 25px;
  height: 25px;
  cursor: pointer;
  transition: 0.3s;
  transform: ${(p) => (p.open ? " rotate(180deg)" : "rotate(0) ")};
`;
