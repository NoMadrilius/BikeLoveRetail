import {makeAutoObservable} from "mobx";
import {createContext, useContext} from "react";
import {ProductFullData} from "@/dataTransferObjects/response/ProductFullData";
import {PublicAPI} from "@/api/PublicAPI";
import {SizeContainer} from "@/components/Screens/ProductScreen/ProductScreenStyles";
import {Text} from "@/components/Text/Text";
import {colors} from "../../theme/colors";
import {fonts} from "../../theme/fonts";
import {ProductOptionVariantBind} from "@/dataTransferObjects/entities/ProductOptionVariantBind";
import {Product} from "@/dataTransferObjects/entities/Product";

class ProductPageStore{
    product:ProductFullData|null = null
    selectedVariants:number[] = []
    possibleProducts:Product[] = []
    specifications:ProductOptionVariantBind[] = []

    activeVariants:number[] = []
    uniqueOptions:{ id: number; name: string }[]=[]
    uniqueVariants:{ variantId: number; variantName: string, optionId:number }[]=[]

    constructor() {
        makeAutoObservable(this);
    }

    async getProduct(id:number){
        let res:ProductFullData = {} as ProductFullData
        await PublicAPI.GetProductCardById(id).then((r)=>{
            res = r.data
        }).finally(()=>{})
        return res;
    }
    setData(p:ProductFullData, o:number[]){
        this.product = p
        this.selectedVariants = o
        this.specifications = p.productOptions

        if(p){
            this.initializeActiveVariants()
            this.initializeOptionAndVariants()
            this.updatePossibleProducts()
        }
    }

    updatePossibleProducts(){
        this.possibleProducts = this.product!.bindedProducts.filter(p=>{
            let optBinds = this.product!.productOptions.filter(n=>n.productId === p.id).map(n=>n.optionVariantId)
            return this.selectedVariants.every(n=>optBinds.includes(n))
        })
    }
    initializeActiveVariants(){
        if(this.selectedVariants.length === 0) this.activeVariants = Array.from(new Set(this.product!.productOptions.map(n=>n.optionVariantId)))
        else{
            let binds = this.product!.productOptions.filter(n=>this.selectedVariants.includes(n.optionVariantId))
            let prodWL = this.product!.bindedProducts.filter(n=>{
                let prodBinds = binds.filter(b=>b.productId === n.id).map(n=>n.optionVariantId)
                return this.selectedVariants.every(e=>prodBinds.includes(e))
            }).map(n=>n.id)
            this.activeVariants = this.product!.productOptions.filter(n=>prodWL.includes(n.productId)).map(n=>n.optionVariantId)
        }
    }
    initializeOptionAndVariants(){
        this.uniqueOptions = this.product!.productOptions.reduce(
            (accumulator: { id: number; name: string }[], i) => {
                let ent = accumulator.find((n) => n.id === i.optionId);
                if (ent === undefined) {
                    accumulator.push({ id: i.optionId, name: i.optionName });
                }
                return accumulator;
            },
            []
        );

        this.uniqueVariants = this.product!.productOptions.reduce(
            (accumulator: { variantId: number; variantName: string, optionId:number }[], i) => {
                let ent = accumulator.find((n) => n.variantId === i.optionVariantId);
                if (ent === undefined) {
                    accumulator.push({ variantId: i.optionVariantId, variantName: i.name, optionId:i.optionId });
                }
                return accumulator;
            },
            []
        );
    }
    getBreadCrumbs(){
        if(this.product!=null)
        {
            let ar = this.product.product.categoryWay.split('->')
            ar.push(this.product.product.name)
            return ar.map(n=>{return({title:n, link:""})})
        }


    }
    getVariantButton(variant:{ variantId: number; variantName: string, optionId:number }){
        return (
            <SizeContainer
                active={this.activeVariants.includes(variant.variantId)}
                chosed={this.selectedVariants.includes(variant.variantId)}
            >
                <Text
                    color={this.selectedVariants.includes(variant.variantId) ? colors.white : colors.black}
                    size="14px"
                    fontStyle={fonts.f500}
                >
                    {variant.variantName}
                </Text>
            </SizeContainer>
        )
    }
    addVariant(variant:{ variantId: number; variantName: string, optionId:number }):number[]{
        //clear similar option
        let binds = this.product!.productOptions.filter(n=>this.selectedVariants.includes(n.optionVariantId)).filter(n=>n.optionId != variant.optionId)
        let variants = binds.map(n=>{return({ variantId: n.optionVariantId, variantName: n.name, optionId:n.optionId })})
        variants.push(variant)

        //clear unmatchable variants
        let availableProds = this.product!.productOptions.filter(n=>n.optionVariantId == variant.variantId).map(n=>n.productId)
        let availableVariants = this.product!.productOptions.filter(n=>availableProds.includes(n.productId)).map(n=>n.optionVariantId)
        variants=variants.filter(n=>availableVariants.includes(n.variantId))

        return Array.from(new Set(variants.map(n=>n.variantId)))
    }
}

export const productPageStore = new ProductPageStore();
const StoreContext = createContext(productPageStore);

export const useProductPageStore = () => useContext(StoreContext);