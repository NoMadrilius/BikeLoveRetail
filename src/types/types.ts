export type Product = {
    title: string;
    image: string;
    price: string;
    colors?: string[];
    sizes?: string[];
    sale?: string;
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