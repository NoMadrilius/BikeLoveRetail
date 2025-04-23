import { ProductOrderRequest } from "@/dataTransferObjects/request/CreateOrderRequest";

export interface PublicPromoRequest {
  promo:string
  clientId?:string
  currencyId?:number
  products:ProductOrderRequest[]
}