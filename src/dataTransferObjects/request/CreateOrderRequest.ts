export interface CreateOrderRequest {
    order: OrderDataRequest;
    products: ProductOrderRequest[];
}

export interface ProductOrderRequest{
    productId: number;
    description: string;
    quantity: number;
    discountId: number;
}

export interface OrderDataRequest{
    deliveryType: string;
    deliveryInfo: string;
    descriptionCilent: string;
    discountId: number;
    clientId: string;
}