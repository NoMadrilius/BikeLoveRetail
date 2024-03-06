import {Order} from "@/dataTransferObjects/entities/Order";
import {OrderProduct} from "@/dataTransferObjects/entities/OrderProduct";

export interface OrderFullData{
    order:Order
    products:OrderProduct[]
}