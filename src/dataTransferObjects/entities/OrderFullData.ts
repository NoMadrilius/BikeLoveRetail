import {Order} from "@/dataTransferObjects/entities/Order";
import {OrderProduct} from "@/dataTransferObjects/entities/OrderProduct";
import {User} from "@/dataTransferObjects/entities/User";

export interface OrderFullData{
    order:Order
    products:OrderProduct[]
    client:User
}