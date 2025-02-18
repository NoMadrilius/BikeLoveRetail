import { useAuthStore } from "@/store/AuthStore";
import { useRouter } from "next/router";
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
import { Typography } from "@mui/material";

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
            <Typography color={colors.white} fontSize="16px" fontStyle={fonts.f500}>
              {authStore.user?.firstName.substring(0, 1)}
            </Typography>
          </IconContainer>
          <ColumnContainer style={{ marginLeft: "14px" }}>
            <RowContainer style={{ columnGap: "14px" }}>
              <Typography color={colors.black} fontSize="16px" fontStyle={fonts.f500}>
                {authStore.user?.firstName}
              </Typography>
            </RowContainer>
            <Typography color={colors.grayMain} fontSize="13px" fontStyle={fonts.f400}>
              {authStore.user?.phoneNumber}
            </Typography>
          </ColumnContainer>
        </AuthContainer>
      ) : (
        <AuthContainer>
          <IconContainer>
            <Icon src="/images/home/icons/accountIcon.svg" />
          </IconContainer>
          <ColumnContainer style={{ marginLeft: "14px" }}>
            <RowContainer style={{ columnGap: "14px" }}>
              <Typography
                color={colors.black}
                fontSize="16px"
                fontStyle={fonts.f500}
                onClick={() => goToAuth()}
              >
                {t("sidebar.auth.enter")}
              </Typography>
              <Typography color={colors.black} fontSize="16px" fontStyle={fonts.f500}>
                |
              </Typography>
              <Typography
                color={colors.black}
                fontSize="16px"
                fontStyle={fonts.f500}
                onClick={() => goToAuth()}
              >
                {t("sidebar.auth.register")}
              </Typography>
            </RowContainer>
            <Typography color={colors.black} fontSize="13px" fontStyle={fonts.f400}>
              {t("sidebar.auth.authFor")}
            </Typography>
          </ColumnContainer>
        </AuthContainer>
      )}
    </>
  );
};
export default SideBarAuth;
