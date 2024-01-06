export type Product = {
    title: string;
    image: string;
    price: string;
    colors?: string[];
    sizes?: string[];
    sale?: string;
    id?: number
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