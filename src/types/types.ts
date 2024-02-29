import {User} from "@/dataTransferObjects/entities/User";

export type INewsItem = {
  id: number;
  date: string;
  title: string;
  description: string;
  image: string;
  blog?: boolean;
};

export type ToastMessageProps = {
  title: string;
  info: string;
  type: "success" | "error" | "warn";
};

export interface IOrderData {
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
    discountId: number;
  }[];
}
export interface OrderDeliveryInfo {
  DeliveryService?: "NovaPoshta";
  Description: string;
  CityName?: string;
  AreaName?: string;
  CityRef?: string;
  SettlementType?: string;
  WarehouseName?: string;
  WarehouseAddress?: string;
  WarehousePhone?: string;
  WarehouseRef?: string;
  WarehouseTypeRef?: string;
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
