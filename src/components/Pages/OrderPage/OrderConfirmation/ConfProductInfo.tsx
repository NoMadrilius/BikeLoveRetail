import React from 'react';
import OrderInfoListItem from "@/components/Pages/OrderPage/OrderInfo/order-info-list/order-info-list-item";
import {observer} from "mobx-react";
import Image from "next/image";
import RoundedButton from "@/components/UIKit/Buttons/RoundedIconButton";
import {OrderProduct} from "@/dataTransferObjects/entities/OrderProduct";
import {useCurrencyStore} from "@/store/CurrencyStore";

const ConfProductInfo = (p:{prods:OrderProduct[]}) => {
    const c = useCurrencyStore()
    return (
        <div className="w-full p-5 border-gray border-t-[1px]">
            <div>
                {p.prods.map(n=>
                    <div className="w-full h-[148px] py-3 flex justify-between gap-3 sm2:flex-col sm2:h-fit border-gray border-b-[1px]">
                        <div className="min-w-[148px] flex flex-col items-center gap-4">
                            <Image className="h-[76px] object-contain" src={{
                                src: n.image??"/",
                                width: 100,
                                height: 80,
                            }} alt="Товар" fill={false} />

                            <div className="pb-4">
                                <span className="mr-2.5">Артикул:</span>
                                <span className="font-normal text-t-grey text-sm">{n.productId}</span>
                            </div>
                        </div>
                        <div className="text-base/5 font-normal flex flex-col justify-between grow">
                            <div className="flex justify-between">
                                <p>{n.name}</p>
                            </div>
                            <p className="text-xl font-bold whitespace-nowrap font-robot-c text-right">{c.useCurrency(n.total * n.quantity)}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default observer(ConfProductInfo);