import DesktopViewCard from "./DesktopViewCard";
import MobileViewCard from "./MobileViewCard";
import {Product} from "@/dataTransferObjects/entities/Product";
import {ProductFullData} from "@/dataTransferObjects/response/ProductFullData";
import { CatalogPageProduct } from "@/dataTransferObjects/response/catalogPage/CatalogPageProduct";

const CartCard = (props:{product:CatalogPageProduct, quantity:number}) => {
  return (
    <>
      <DesktopViewCard {...props} />
      <MobileViewCard {...props} />
    </>
  );
};

export default CartCard;
