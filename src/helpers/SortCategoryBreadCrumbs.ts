import { CatalogPageCategory } from "@/dataTransferObjects/response/catalogPage/CatalogPageCategory";

export const SortCategoryBreadCrumbs = (items: CatalogPageCategory[]): CatalogPageCategory[] => {
  const map = new Map<number, CatalogPageCategory>();
  items.forEach(item => map.set(item.id, item));

  const result: CatalogPageCategory[] = [];
  const addChildren = (parentId: number) => {
    items.filter(item => item.parentId === parentId)
      .forEach(item => {
        result.push(item);
        addChildren(item.id);
      });
  };

  addChildren(0);
  return result;
};
