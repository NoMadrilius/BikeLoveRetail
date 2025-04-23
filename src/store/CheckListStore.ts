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
import Router from "next/router";
import {UserExistResponse} from "@/dataTransferObjects/response/UserExistResponse";
import {AuthAPI} from "@/api/AuthAPI";
import CartStore from "@/store/CartStore";


declare global {
    interface Window {
        gtag: (...args: any[]) => void;
    }
}


class CheckListStore{
    city:NPCityResponse|null = null
    warehouse:NPWarehouseResponse|null = null
    deliveryType:"ShopPickUp"|"DeliveryNP" = "ShopPickUp"
    pickupShop:Shop|null = null

    clientDesc = ""

    isLoadingCreate:boolean = false;

    initialPhone = ""
    initialPhoneCorrect = false
    isInitialUserExist = false
    initialUser: UserExistResponse|null = null

    name=''
    lastName=''
    patronymic=''

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

    setName(v:string){this.name = v}
    setLastName(v:string){this.lastName = v}
    setPatronymic(v:string){this.patronymic = v}
    setIsLoadingCreate(v:boolean){this.isLoadingCreate = v}

    async setInitialPhone(v:string){
        let clean = v.replace(/[+\s\)\(\-_]/g, '')
        this.initialPhone = v
        console.log(clean)
        if(clean.length === 12) {
            this.initialPhoneCorrect = true

            AuthAPI.CheckUserExist('\+'+clean).then((req)=>{
                if(req.data){
                    this.isInitialUserExist = true
                    this.initialUser = req.data
                }else{
                    this.isInitialUserExist = false
                    this.initialUser = null
                }
            })

        }
        else this.initialPhoneCorrect = false
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
        /*
        if(this.deliveryType === "ShopPickUp" && this.pickupShop === null){
            showToast({title:"Де будете забирати?",info:"Вкажіть магазин для самовивізу",type:"warn"})
            return false
        }
         */

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
                clientId: AuthStore.user!.id,
            }

            let prods = cartStore.cart.map(n=>{
                return {
                    productId: n.product.id,
                    description: "",
                    quantity: n.quantity,
                    discountId:cartStore.discountId,
            } as ProductOrderRequest
            })



            console.log("order:", orderData)
            console.log("products:", prods)


            this.setIsLoadingCreate(true)
            OrderAPI.PublicCreate({order:orderData, products:prods}).then(r=>{
                CartStore.clearCart()
                if (typeof window.gtag === 'function') {
                    window.gtag('event', 'conversion_event_purchase', {
                        'event_callback': ()=>{console.log("google purchase event")},
                        'event_timeout': 2000,
                        // <event_parameters>
                    });
                }
                Router.push('/gratitude/'+r.data.order.uuid)
            }).finally(()=>this.setIsLoadingCreate(false))
        }
    }
}

const checkListStore = new CheckListStore();
const checkListContext = createContext(checkListStore);

export const useCheckList = () => useContext(checkListContext);
export default checkListStore;