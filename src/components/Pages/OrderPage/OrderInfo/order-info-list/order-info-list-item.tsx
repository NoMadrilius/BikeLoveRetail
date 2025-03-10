import React from 'react';
import Image from "next/image";
import RoundedButton from "@/components/UIKit/Buttons/RoundedIconButton";
import {Product} from "@/dataTransferObjects/entities/Product";
import {ProductFullData} from "@/dataTransferObjects/response/ProductFullData";
import {useCurrencyStore} from "@/store/CurrencyStore";
import {useCartStore} from "@/store/CartStore";
import { CatalogPageProduct } from "@/dataTransferObjects/response/catalogPage/CatalogPageProduct";
import { prettyPrice } from "@/helpers/stringDecorate/prettyPrice";
import Link from "next/link";

const OrderInfoListItem = (props: {product: CatalogPageProduct, quantity: number}) => {
    const c = useCurrencyStore()
    const cs = useCartStore()

    const add=()=>{
        cs.updateProductQuantity(props.product.id, props.quantity+1)
    }

    const minus=()=>{
        if(props.quantity > 1) cs.updateProductQuantity(props.product.id, props.quantity-1)
    }

    return (
        <div className="w-full h-[148px] py-3 flex justify-between gap-3 sm2:flex-col sm2:h-fit border-gray border-b-[1px]">
            <Link className="min-w-[148px] flex flex-col items-center gap-4 cursor-pointer" href={props.product.url}>
                <Image className="h-[76px] object-contain" src={{
                    src: props.product.image,
                    width: 100,
                    height: 80,
                }} alt="Товар" fill={false} />

                <div className="pb-4">
                    <span className="mr-2.5">Артикул:</span>
                    <span className="font-normal text-t-grey text-sm">{props.product.id}</span>
                </div>
            </Link>
            <div className="text-base/5 font-normal flex flex-col justify-between grow">
                <div className="flex justify-between cursor-pointer">
                    <Link href={props.product.url}>
                        <p>{props.product.name}</p>
                    </Link>
                    <RoundedButton onClick={() =>{cs.removeFromCart(props.product.id)}} bgColor={"!p-0"} imageUrl={"/icons/trash.svg"} altText="Сміник"/>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex items-center justify-between">
                        <RoundedButton onClick={minus} bgColor={""} imageUrl={"/icons/minus.svg"} altText="Мінус"/>
                            <div className="w-8 h-8 text-center rounded-sm border-[1px] border-gray text-xl font-bold font-robot-c">{props.quantity.toString()}</div>
                        <RoundedButton onClick={add} bgColor={""} imageUrl={"/icons/plus.svg"} altText="Плюс"/>
                    </div>
                    <p className="text-xl font-bold whitespace-nowrap font-robot-c">{prettyPrice(props.product.price * props.quantity)}</p>

                </div>
            </div>
        </div>
    );
};

export default OrderInfoListItem;