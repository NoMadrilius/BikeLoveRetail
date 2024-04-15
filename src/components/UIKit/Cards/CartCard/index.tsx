import DesktopViewCard from "./DesktopViewCard";
import MobileViewCard from "./MobileViewCard";
import {Product} from "@/dataTransferObjects/entities/Product";
import {ProductFullData} from "@/dataTransferObjects/response/ProductFullData";

const CartCard = (props:{product:Product, fullData:ProductFullData, quantity:number}) => {
  return (
    <>
      <DesktopViewCard {...props} />
      <MobileViewCard {...props} />
    </>
  );
};

export default CartCard;
