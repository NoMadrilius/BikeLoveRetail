export interface Product{
    id: number;
    createdAt: string;
    updatedAt: string;
    enabled: boolean;
    name: string;
    catalogKey: string;
    categoryImport: string;
    categoryId: number;
    categoryName: string;
    categoryWay: string;
    barcode: string;
    manufacturerBarcode: string;
    quantityUnitId: number;
    quantityUnitName: string;
    incomePrice: number;
    dealerPrice: number;
    retailPrice: number;
    oldRetailPrice: number;
    oldDealerPrice: number;
    storageTotal: number;
    internalStorageTotal: number;
    outerStorageTotal: number;
    isMaster: boolean;
    brandId: number;
    checkStatus: string;
    cardFillPercentage: number;
    retailVisibility: boolean;
    b2BVisibility: boolean;
    userCreated: string;
    userUpdated: string;

    metaDescription?:string
    metaTitle?:string
}