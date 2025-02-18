export interface ProductPageDataProduct{
  id: number;
  name: string;
  description: string;
  metaDescription?: string | null;
  metaTitle?: string | null;
  availability: string;
  price: number;
  oldPrice: number;
  currencySymbol: string;
  catalogKey: string;
}