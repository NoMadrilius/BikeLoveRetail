export interface BikeSelectState{
    typesVariants: { [key: number]: string };
    sizeVariants: { [key: number]: string };
    brandVariants: { [key: number]: string };
    maxPrice: number;
    minPrice: number;
}