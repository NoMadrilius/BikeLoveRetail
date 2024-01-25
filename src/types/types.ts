export type Product = {
    title: string;
    image: string;
    price: string;
    oldPrice?: string;
    colors?: string[];
    sizes?: string[];
    sale?: string;
    id?: number
    avaliability?: number 
}
export type INewsItem = {
    id: number
    date: string;
    title: string; 
    description: string;
    image: string
    blog?: boolean
}

export interface Category {
    childrenIds: string,
    childrenIdsList: number[],
    childrenList: Category[]
    createdAt: string
    enabled: boolean
    id: number,
    isB2BVisible: boolean,
    isCollapsed: boolean,
    isRetailVisible: boolean
    name: string,
    parentId: number,
    sortOrder: number,
    updatedAt: string,
    way: string
}
export interface IProduct
{
    b2BVisibility?: boolean,
    barcode?: string,
    brandId?: number,
    catalogKey?: string,
    categoryId?: number,
    categoryImport?: string,
    categoryName?: string,
    categoryWay?: string,
    checkStatus?: string,
    createdAt?: string,
    dealerPrice?: number,
    enabled?: boolean,
    id: number,
    incomePrice?: number,
    isMaster?: boolean,
    manufacturerBarcode?: string,
    name: string,
    oldDealerPrice?: number,
    oldIncomePrice?: number,
    quantityUnitId?: number,
    quantityUnitName?: string,
    retailPrice: number,
    retailVisibility?: boolean,
    updatedAt?: string,
    userCreated?: string,
    userUpdated?: string,
    quantity: number
    image: string
}

export interface RegisterRequest {
    firstName: string,
    lastName: string,
    patronymic: string,
    email: string,
    phone: string,
    password: string,
    confirmPassword?: string
}
export type ToastMessageProps = {
    title: string;
    info: string;
    type: "success" | "error" | "warn";
  };

export interface LoginRequest
{
    phone: string,
    email?: string,
    password: string
}
export interface IOrderData
{
    order: {
        deliveryType: string;
        deliveryInfo: string;
        descriptionCilent: string;
        discountId: number;
        clientId: string;
    };
    products: {
        productId: number;
        description: string;
        quantity: number;
        discountId: number
    }[];
}
export interface OrderDeliveryInfo {
    DeliveryService?: "NovaPoshta"
    Description: string
    CityName?: string
    AreaName?: string
    CityRef?: string
    SettlementType?: string
    WarehouseName?: string
    WarehouseAddress?: string
    WarehousePhone?: string
    WarehouseRef?: string
    WarehouseTypeRef?: string
}
export interface Order {
    id: number;
    createdAt: string;
    updatedAt: string;
    enabled: boolean;
    shopId: number;
    orderType: string;
    orderStatus?: string | null;
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
  }
  export interface OrderProduct {
    id: number;
    createdAt: string;
    updatedAt: string;
    enabled: boolean;
    orderId: number;
    productId: number;
    description?: string | null;
    catalogKey?: string | null;
    serialNumber?: string | null;
    name?: string | null;
    quantity: number;
    quantityUnitId: number;
    quantityUnitName?: string | null;
    price: number;
    discount: number;
    total: number;
  }
  export interface User {
    // ... свойства пользователя
  }
  
  export interface Payment {
    // ... свойства платежа
  }

  
  export interface StatusHistory {
    // ... свойства истории статуса
  }
  
  export interface IOrderViewData {
    order: Order;
  client: User;
  userCreated: User;
  userUpdated: User;
  manager: User;
  payment: Payment;
  products: OrderProduct[];
  statusHistories: StatusHistory[];
  }
