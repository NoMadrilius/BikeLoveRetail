import { Text } from "@/components/Text/Text";
import { useAuthStore } from "@/store/AuthStore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { colors } from "../../../../theme/colors";
import { fonts } from "../../../../theme/fonts";
import {
  AuthContainer,
  ColumnContainer,
  Icon,
  IconContainer,
  RowContainer,
} from "../SidebarStyles";
import Loader from "@/helpers/Loader/Loader";
import { useTranslation } from "react-i18next";

const SideBarAuth = ({ setVisible }: any) => {
  const { t } = useTranslation();
  const authStore = useAuthStore();

  const router = useRouter();
  const goToAuth = () => {
    router.push("/auth");
    setVisible(false);
  };
  const goToAcc = () => {
    router.push("/account");
    setVisible(false);
  };

  return (
    <>
      {authStore.loading ? (
        <Loader />
      ) : authStore.isAuth ? (
        <AuthContainer
          style={{ justifyContent: "start", cursor: "pointer" }}
          onClick={() => goToAcc()}
        >
          <IconContainer style={{ marginRight: "8px" }}>
            <Text color={colors.white} size="16px" fontStyle={fonts.f500}>
              {authStore.user?.firstName.substring(0, 1)}
            </Text>
          </IconContainer>
          <ColumnContainer style={{ marginLeft: "14px" }}>
            <RowContainer style={{ columnGap: "14px" }}>
              <Text color={colors.black} size="16px" fontStyle={fonts.f500}>
                {authStore.user?.firstName}
              </Text>
            </RowContainer>
            <Text color={colors.grayMain} size="13px" fontStyle={fonts.f400}>
              {authStore.user?.phoneNumber}
            </Text>
          </ColumnContainer>
        </AuthContainer>
      ) : (
        <AuthContainer>
          <IconContainer>
            <Icon src="/images/home/icons/accountIcon.svg" />
          </IconContainer>
          <ColumnContainer style={{ marginLeft: "14px" }}>
            <RowContainer style={{ columnGap: "14px" }}>
              <Text
                color={colors.black}
                size="16px"
                fontStyle={fonts.f500}
                hoverColor={colors.redHover}
                func={() => goToAuth()}
              >
                {t("sidebar.auth.enter")}
              </Text>
              <Text color={colors.black} size="16px" fontStyle={fonts.f500}>
                |
              </Text>
              <Text
                color={colors.black}
                size="16px"
                fontStyle={fonts.f500}
                hoverColor={colors.redHover}
                func={() => goToAuth()}
              >
                {t("sidebar.auth.register")}
              </Text>
            </RowContainer>
            <Text color={colors.black} size="13px" fontStyle={fonts.f400}>
              {t("sidebar.auth.authFor")}
            </Text>
          </ColumnContainer>
        </AuthContainer>
      )}
    </>
  );
};
export default SideBarAuth;
