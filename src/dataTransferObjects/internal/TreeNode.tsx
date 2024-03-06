import {ProductCategory} from "@/dataTransferObjects/entities/ProductCategory";

export interface TreeNode{
    cat:ProductCategory,
    childs:TreeNode[],
    depth:number,
    expanded:boolean
}