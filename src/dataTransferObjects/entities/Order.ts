export interface Order{
    id: number;
    createdAt: string;
    updatedAt: string;
    enabled: boolean;
    shopId: number;
    orderType: string;
    orderStatus: string;
    orderStatusList: string;
    deliveryType?: string | null;
    deliveryInfo?: string | null;
    isPayed: boolean;
    paymentId: number;
    descriptionClient?: string | null;
    cancelReason?: string | null;
    discountId: number;
    isPrePay: boolean;
    isCollected: boolean;
    isNeedLogistic: boolean;
    isShipped: boolean;
    productsReserved: boolean;
    isConfirmed: boolean;
    isIssued: boolean;
    confirmationDate?: string | null;
    userConfirmed?: string | null;
    orderDiscount: number;
    totalProductDiscount: number;
    totalProductsPrice: number;
    totalPrice: number;
    clientId: string;
    userCreated?: string | null;
    userUpdated?: string | null;
    managerId?: string | null;

    uuid:string
}