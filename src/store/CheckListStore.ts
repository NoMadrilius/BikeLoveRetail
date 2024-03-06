import {makeAutoObservable} from "mobx";
import {createContext, useContext} from "react";
import {NPCityResponse} from "@/dataTransferObjects/internal/NovaPoshta/Response/NPCityResponse";
import {NPWarehouseResponse} from "@/dataTransferObjects/internal/NovaPoshta/Response/NPWarehouseResponse";
import {Shop} from "@/dataTransferObjects/entities/Shop";
import {
    OrderDataRequest,
    ProductOrderRequest
} from "@/dataTransferObjects/request/CreateOrderRequest";
import AuthStore from "@/store/AuthStore";
import cartStore from "@/store/CartStore";
import {OrderDeliveryInfo} from "@/dataTransferObjects/internal/OrderDeliveryInfo";
import {OrderAPI} from "@/api/OrderAPI";
import authStore from "@/store/AuthStore";
import {showToast} from "@/helpers/alertService/alertService";
import {makePersistable} from "mobx-persist-store";

class CheckListStore{
    city:NPCityResponse|null = null
    warehouse:NPWarehouseResponse|null = null
    deliveryType:"ShopPickUp"|"DeliveryNP" = "ShopPickUp"
    pickupShop:Shop|null = null

    clientDesc = ""

    constructor() {
        makeAutoObservable(this)

        if(typeof window !== "undefined"){
            makePersistable(this, {
                name: "checkListStore",
                properties: ["city", "warehouse", "deliveryType", "pickupShop","clientDesc"],
                storage:window.localStorage
            });
        }
    }

    setClientDesc(v:string){this.clientDesc = v}

    setCity(v:NPCityResponse|null){
        this.city = v
        this.warehouse = null
    }

    setWarehouse(v:NPWarehouseResponse|null){
        this.warehouse = v
    }

    setDeliveryType(v:"ShopPickUp"|"DeliveryNP"){
        this.deliveryType = v
    }

    setPickupShop(v:Shop|null){
        this.pickupShop = v
    }

    isValid(){
        if(!authStore.isAuth){
            showToast({title:"Кому замовлення?",info:"Надайте інформацію про замовника",type:"warn"})
            return false
        }

        if(this.deliveryType === "DeliveryNP"){
            if(this.city === null) showToast({title:"Куди відправляємо?",info:"Вкажіть місто",type:"warn"})
            if(this.warehouse === null) showToast({title:"Куди відправляємо?",info:"Вкажіть віділення",type:"warn"})
            if(this.city === null || this.warehouse === null)return false
        }
        if(this.deliveryType === "ShopPickUp" && this.pickupShop === null){
            showToast({title:"Де будете забирати?",info:"Вкажіть магазин для самовивізу",type:"warn"})
            return false
        }

        return true
    }

    createOrder(){
        if(this.isValid()){
            let delData:OrderDeliveryInfo={
                DeliveryService: this.deliveryType === "DeliveryNP"?"NovaPoshta":undefined,
                Description: this.clientDesc,
                CityName: this.deliveryType === "DeliveryNP"?this.city!.Description:undefined,
                AreaName: this.deliveryType === "DeliveryNP"?this.city!.AreaDescription:undefined,
                CityRef: this.deliveryType === "DeliveryNP"?this.city!.Ref:undefined,
                SettlementType: this.deliveryType === "DeliveryNP"?this.city!.SettlementTypeDescription:undefined,
                WarehouseName: this.deliveryType === "DeliveryNP"?this.warehouse!.Description:undefined,
                WarehouseAddress: this.deliveryType === "DeliveryNP"?this.warehouse!.ShortAddress:undefined,
                WarehousePhone: this.deliveryType === "DeliveryNP"?this.warehouse!.Phone:undefined,
                WarehouseRef: this.deliveryType === "DeliveryNP"?this.warehouse!.Ref:undefined,
                WarehouseTypeRef: this.deliveryType === "DeliveryNP"?this.warehouse!.TypeOfWarehouse:undefined,
            }
            let delInfo = JSON.stringify(delData)

            let orderData:OrderDataRequest={
                deliveryType: this.deliveryType,
                deliveryInfo: delInfo,
                descriptionCilent: this.clientDesc,
                discountId: 0,
                clientId: AuthStore.user!.id,
            }

            let prods = cartStore.cart.map(n=>{
                return {
                    productId: n.product.id,
                    description: "",
                    quantity: n.quantity,
                    discountId: 0
                } as ProductOrderRequest
            })

            console.log("order:", orderData)
            console.log("products:", prods)

            OrderAPI.PublicCreate({order:orderData, products:prods}).then(r=>{

            })
        }
    }
}

const checkListStore = new CheckListStore();
const checkListContext = createContext(checkListStore);

export const useCheckList = () => useContext(checkListContext);
export default checkListStore;