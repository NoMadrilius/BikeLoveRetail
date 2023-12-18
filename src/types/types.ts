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
