"use client"
import { UseMetaData } from "@/helpers/hooks/useMetaData";
import { colors } from "../../../../theme/colors";
import { fonts } from "../../../../theme/fonts";
import BlockWithFrame from "./components/BlockWithFrame";
import { useTranslation } from "react-i18next";
import { observer } from "mobx-react";
import {useAppStore} from "@/store/AppStore";
import { Typography } from "@mui/material";

const ContactsScreen = () => {
  const { t } = useTranslation();
  const as = useAppStore();

  return (
    <>
        <UseMetaData title={"Контакти Щербаківського 59"} img={""} description={"Наші контакти BikeLove Щербаківського 59, Київ, Нивки, 0932118930"} />
        <Typography color={colors.black}
          fontSize="42px"
          fontStyle={fonts.f500}
          margin="0 0 40px 0"
          textTransform="uppercase"
        >
          {t("contacts")}
        </Typography>
          {as.shops.map(s=><BlockWithFrame shop={s} />)}
        <div style={{ paddingBottom: "100px" }}></div>
    </>
  );
};
export default observer(ContactsScreen);
