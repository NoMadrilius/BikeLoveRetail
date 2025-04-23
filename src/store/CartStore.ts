import { showToast } from "@/helpers/alertService/alertService";
import { makeAutoObservable } from "mobx";
import { createContext, useContext } from "react";
import {makePersistable} from "mobx-persist-store";
import {PublicAPI} from "@/api/PublicAPI";
import { CatalogPageProduct } from "@/dataTransferObjects/response/catalogPage/CatalogPageProduct";
import { OrderAPI } from "@/api/OrderAPI";
import authStore from "@/store/AuthStore";

class CartStore {
  cart: {product:CatalogPageProduct, quantity:number}[] = [];

  visible:boolean = false;
  totalPrice:number = 0;
  totalDiscount:number = 0;
  discountId:number = 0;

  promo:string = "";
  promoMessage:string = "";
  isLoadingPromo:boolean = false;

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

  clearCart(){
    this.cart = []
    this.updateTotalPrice()
  }

  setPromo(promo:string){this.promo = promo}
  setDiscountId(id:number){this.discountId = id}
  setPromoMessage(m:string){this.promoMessage = m}
  setIsLoadingPromo(v:boolean){this.isLoadingPromo = v}

  updatePromo(){
    if(this.cart.length > 0 && this.promo.length > 0){
      this.setIsLoadingPromo(true);
      OrderAPI.GetPromo({currencyId:2,
        promo:this.promo, clientId:authStore.user?.id??undefined, products: this.cart.map(n=>{return{quantity:n.quantity, productId:n.product.id, description:"", discountId:0}}),
      }).then(r=>{
        if(r.status === 204){
          this.setPromoMessage("Нажаль промокод не діє")
          this.totalDiscount = 0
          this.setDiscountId(0)
          return
        }

        console.log(r.data)

        if(r.data!.discount === 0){
          this.totalDiscount = 0
          console.log("1")
          this.setDiscountId(0)
          this.setPromoMessage("Промокод задіяно, але знижку не знайдено")
        }

        if(r.data!.discount > 0){
          console.log("2")
          this.totalDiscount = r.data?.discount??0
          this.setDiscountId(r.data?.discountId??0)
          this.setPromoMessage("Промокод задіяно")
        }
      }).catch(()=>{
        this.totalDiscount = 0
        this.setPromoMessage("Помилка при використанні промокоду")
      }).finally(()=>this.setIsLoadingPromo(false))
    }
  }

  checkInCart(id:number):boolean{
    let res = this.cart.find(n=>n.product.id===id)

    if(res!=undefined) return true
    else return false
  }
  setVisible(v:boolean){
    this.visible = v
  }
  updateTotalPrice(){
    this.totalPrice = this.cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0)
    this.totalDiscount = this.cart.reduce((acc, item) => acc + item.product.oldPrice > item.product.price? item.product.oldPrice - item.product.price:0, 0)
  }

  addToCart(product: CatalogPageProduct) {
    if (this.cart.find(n=>n.product.id === product.id)) {
    } else {
      this.cart.push({product:product, quantity:1});
      this.setVisible(true)
    }
    this.updateTotalPrice()
  }

  addToCartRequest(id:number){
    if (this.cart.find(n=>n.product.id === id)) {
      showToast({
        info: `Товар вже додано`,
        title: "Товар уже в корзине",
        type: "warn",
      });
    } else {
      PublicAPI.GetProductCardById(id,undefined).then((r)=>{
       //this.addToCart(r.data.product, r.data)
      })
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

  isInCart(id:number){
    return !!this.cart.find(n => n.product.id === id);
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
