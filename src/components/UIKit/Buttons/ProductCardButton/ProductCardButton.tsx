import React from "react";
import { Button } from "@mui/material";
import { CatalogPageProduct } from "@/dataTransferObjects/response/catalogPage/CatalogPageProduct";
import cartStore from "@/store/CartStore";
import { observer } from "mobx-react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useTranslation } from "next-i18next";

const ProductCardButton = ({p}:{p:CatalogPageProduct}) => {
  const cs = cartStore;
  const { t } = useTranslation('catalog_page');

  return (
    <>
      {cs.isInCart(p.id)?
        <Button variant={"contained"} size={"small"} color={"info"} onClick={()=>cs.setVisible(true)} startIcon={<CheckCircleIcon />}>
          {t("Вже в кошику")}
        </Button>
        :
        <Button variant={"contained"} size={"small"} onClick={()=>cs.addToCart(p)}>
          {t("В кошик")}
        </Button>
      }
    </>
  );
};

export default observer(ProductCardButton);