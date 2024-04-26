import { showToast } from "@/helpers/alertService/alertService";
import { makeAutoObservable } from "mobx";
import { createContext, useContext } from "react";
import {Product} from "@/dataTransferObjects/entities/Product";
import {ProductFullData} from "@/dataTransferObjects/response/ProductFullData";
import {makePersistable} from "mobx-persist-store";

class CartStore {
  cart: {product:Product, fullData:ProductFullData, quantity:number}[] = [];
  visible:boolean = false;
  totalPrice:number = 0;
  totalDiscount:number = 0;

  constructor() {
    makeAutoObservable(this);
    if(typeof window !== "undefined")
      makePersistable(this, {
        name: "cartStore",
        properties: ["cart"],
        storage:window.localStorage
      }).then(()=>{
        this.updateTotalPrice()
      });
  }
  setVisible(v:boolean){
    this.visible = v
  }
  updateTotalPrice(){
    this.totalPrice = this.cart.reduce((acc, item) => acc + item.product.retailPrice * item.quantity, 0)
    this.totalDiscount = this.cart.reduce((acc, item) => acc + item.product.oldRetailPrice > item.product.retailPrice? item.product.oldRetailPrice - item.product.retailPrice:0, 0)
  }
  addToCart(product: Product, FullData:ProductFullData) {
    if (this.cart.find(n=>n.product.id === product.id)) {
      showToast({
        info: `${product.name}`,
        title: "Товар уже в корзине",
        type: "warn",
      });
    } else {
      this.cart.push({product:product, fullData:FullData, quantity:1});
      showToast({
        info: product.name,
        title: "Товар добавлен",
        type: "success",
      });
    }
    this.updateTotalPrice()
  }

  updateProductQuantity(productId: number, newQuantity: number) {
    const productToUpdate = this.cart.find((item) => item.product.id === productId);

    if (productToUpdate) {
      productToUpdate.quantity = newQuantity;
    }
    this.updateTotalPrice()
  }

  removeFromCart(productId: number) {
    this.cart = this.cart.filter(n=>n.product.id != productId)
    this.updateTotalPrice()
  }
  removeAllFromCart = () => {
    this.cart = []
    this.updateTotalPrice()
  };
}

const cartStore = new CartStore();
const StoreContext = createContext(cartStore);

export const useCartStore = () => useContext(StoreContext);
export default cartStore;
