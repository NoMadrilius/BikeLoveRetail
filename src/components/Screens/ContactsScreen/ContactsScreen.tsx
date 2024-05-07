"use client"
import { Text } from "@/components/Text/Text";
import { UseMetaData } from "@/helpers/hooks/useMetaData";
import { colors } from "../../../../theme/colors";
import { fonts } from "../../../../theme/fonts";
import BlockWithFrame from "./components/BlockWithFrame";
import { useTranslation } from "react-i18next";
import { observer } from "mobx-react";
import {useAppStore} from "@/store/AppStore";

const ContactsScreen = () => {
  const { t } = useTranslation();
  const as = useAppStore();

  return (
    <>
        <UseMetaData title={"Контакты"} img={""} description={""} />
        <Text
          color={colors.black}
          size="42px"
          fontStyle={fonts.f500}
          margin="0 0 40px 0"
          textTransform="uppercase"
        >
          {t("contacts")}
        </Text>
          {as.shops.map(s=><BlockWithFrame shop={s} />)}
        <div style={{ paddingBottom: "100px" }}></div>
    </>
  );
};
export default observer(ContactsScreen);
