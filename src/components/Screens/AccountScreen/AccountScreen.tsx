import { useEffect, useState } from "react";
import { colors } from "../../../../theme/colors";
import { fonts } from "../../../../theme/fonts";
import { styled } from "styled-components";
import { UseMetaData } from "@/helpers/hooks/useMetaData";
import Navigation from "./components/Navigation";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2/Step2";
import { useAuthStore } from "@/store/AuthStore";
import { observer } from "mobx-react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import {OrderAPI} from "@/api/OrderAPI";
import {OrderFullData} from "@/dataTransferObjects/entities/OrderFullData";
import { Typography } from "@mui/material";
import LoyaltyScreen from "@/components/Screens/AccountScreen/components/LoyaltyScreen";
import MyArticles from "@/components/Screens/AccountScreen/components/MyArticles";

const AccountScreen = () => {
  const { t } = useTranslation();

  const [products, setProducts] = useState<OrderFullData[]>([]);
    const router = useRouter()
  const authStore = useAuthStore()

    useEffect(()=>{
        if(!authStore.isAuth) router.push('/')
    },[])

  useEffect(() => {
      OrderAPI.GetSelf().then((r)=>{
          setProducts(r.data)
      })
  }, []);

  const [step, setStep] = useState(1);
  return (
    <>
      <UseMetaData title={"Аккаунт"} img={""} description={"sadasdasd"} />
      <Typography
        color={colors.black}
        fontSize="40px"
        fontStyle={fonts.f500}
        textTransform="uppercase"
      >
        {t("Персональний кабінет")}
      </Typography>

      <MainWrapper>
        <Left>
          <Navigation setStep={setStep} step={step} />
        </Left>
        <Line />
        <Right>
          {step === 1 && <LoyaltyScreen/>}
          {step === 2 && <Step1 step={step} />}
          {step === 3 && <Step2 data={products} />}
          {step === 4 && <MyArticles/>}
        </Right>
      </MainWrapper>
    </>
  );
};
export default observer(AccountScreen);

const MainWrapper = styled.div`
  display: flex;
  margin-top: 53px;
  padding-bottom: 100px;
  column-gap: 40px;
  @media (max-width: 750px) {
    flex-direction: column;
    margin-top: 35px;
  }
`;
const Left = styled.div``;
const Right = styled.div`
  width: 100%;
`;
const Line = styled.div`
  min-width: 1px;
  height: auto;
  background-color: ${colors.grayBorder};
`;
