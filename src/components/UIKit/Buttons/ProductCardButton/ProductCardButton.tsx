import React from "react";
import { Button } from "@mui/material";
import { CatalogPageProduct } from "@/dataTransferObjects/response/catalogPage/CatalogPageProduct";
import cartStore from "@/store/CartStore";
import { observer } from "mobx-react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const ProductCardButton = ({p}:{p:CatalogPageProduct}) => {
  const cs = cartStore;

  return (
    <>
      {cs.isInCart(p.id)?
        <Button variant={"contained"} size={"small"} color={"info"} onClick={()=>cs.setVisible(true)} startIcon={<CheckCircleIcon />}>
          Вже в кошику
        </Button>
        :
        <Button variant={"contained"} size={"small"} onClick={()=>cs.addToCart(p)}>
          В кошик
        </Button>
      }
    </>
  );
};

export default observer(ProductCardButton);