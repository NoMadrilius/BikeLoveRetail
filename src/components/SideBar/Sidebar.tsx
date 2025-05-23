import { colors } from "../../../theme/colors";
import { fonts } from "../../../theme/fonts";
import BlurWrapper from "../BlurWrapper/BlurWrapper";
import { useState } from "react";
import {
  ColumnContainer,
  Line,
  RowContainer,
  SmallIconContainer,
  Wrapper,
} from "./SidebarStyles";
import SidebarCatalog from "./components/SidebarCatalog";
import SideBarAuth from "./components/SidebarAuth";
import { useRouter } from "next/router";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import {useAppStore} from "@/store/AppStore";
import {useCartStore} from "@/store/CartStore";
import { Typography } from "@mui/material";

const SideBar = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const [step, setStep] = useState(0);
  const cs = useCartStore()
  const as = useAppStore()

  const openCart = () => {
    cs.setVisible(true)
    as.setIsOpenSidebar(false)
  };

  const TITLES = [
    { title: t("header.catalog"), openArrow: true },
    { title: t("header.about"), openArrow: true, href: "/about" },
    { title: t("header.workshop"), openArrow: true, href: "/workshop" },
    { title: t("header.blog"), openArrow: false, href: "/blog" },
    { title: t("header.contacts"), openArrow: false, href: "/contacts" },
  ];
  const TITLES2 = [
    { title: t("cart.cart"), icon: "/images/home/icons/Cart.png", href: "#" },
    {
      title: t("header.about"),
      icon: "/images/home/icons/Invoice.png",
      href: "/about",
    },
    {
      title: t("header.contacts"),
      icon: "/images/home/icons/Heart.png",
      href: "/contacts",
    },
    {
      title: t("header.blog"),
      icon: "/images/home/icons/Eye.png",
      href: "/blog",
    },
  ];

  const goToLink = (href: string) => {
    router.push(href);
    as.setIsOpenSidebar(false)
  };

  return (
    <BlurWrapper onClick={()=>{as.setIsOpenSidebar(false)}}>
      <Wrapper onClick={(e) => e.stopPropagation()}>
        {step === 0 && (
          <>
            <Typography
              color={colors.redMain}
              fontSize="30px"
              fontStyle={fonts.f700}
              margin="28px 0 0 26px"
            >
              BIKELOVE
            </Typography>

            <SideBarAuth setVisible={as.setIsOpenSidebar} />
            <ColumnContainer
              style={{ rowGap: "20px", padding: "23px 26px 33px" }}
            >
              {TITLES.map((el, index) => (
                <RowContainer
                  key={index}
                  style={{
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  onClick={() =>{}
                    //index === 0 ? setStep(1) : el.href && goToLink(el.href)
                  }
                >
                  <Typography
                    color={colors.black}
                    fontSize="16px"
                    fontStyle={fonts.f500}
                    textTransform="uppercase"
                  >
                    {el.title}
                  </Typography>
                  {el.openArrow && (
                    <Image
                      alt="Sidebar Arrow Icon"
                      width={4}
                      height={8}
                      src="/images/home/icons/sidebarArrow.png"
                      style={{ width: "4px", height: "8px" }}
                    />
                  )}
                </RowContainer>
              ))}
            </ColumnContainer>
          </>
        )}
        {step === 1 && (
          <SidebarCatalog setMainStep={setStep} setVisible={(v:any)=>{as.setIsOpenSidebar(v)}} />
        )}
        <Line />
        <ColumnContainer style={{ padding: "26px 0 46px 25px", rowGap: "7px" }}>
          {TITLES2.map((el, index) => (
            <RowContainer
              key={index}
              style={{ alignItems: "center" }}
              onClick={() => (index === 0 ? openCart() : goToLink(el.href))}
            >
              <SmallIconContainer>
                <Image alt="Title Icon" width={13} height={13} src={el.icon} />
              </SmallIconContainer>
              <Typography
                color={colors.black}
                fontSize="13px"
                fontStyle={fonts.f400}
                margin="0 0 0 10px"
                textTransform="uppercase"
              >
                {el.title}
              </Typography>
            </RowContainer>
          ))}
        </ColumnContainer>
      </Wrapper>
    </BlurWrapper>
  );
};
export default SideBar;
