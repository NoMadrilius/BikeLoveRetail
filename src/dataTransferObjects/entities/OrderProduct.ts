export interface OrderProduct{
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