export interface ProductCategory{
    id: number;
    createdAt: string;
    updatedAt: string;
    enabled: boolean;
    name: string;
    iconUrl?: string;
    way: string;
    childrenIds: string;
    parentId: number;
    isCollapsed: boolean;
    isRetailVisible: boolean;
    isB2BVisible: boolean;
    sortOrder: number;

    metaDescription?:string
    metaTitle?:string
}