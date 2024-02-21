export interface CatalogProductsByCategoryRequest{
    categoryId: number;
    storageId: number;
    page: number;
    pageSize: number;
    filtersVariantIds: number[];
    sortingSettings: string[];
}