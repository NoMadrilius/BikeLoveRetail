import React from 'react';
import OrderInfoListItem from "@/components/Pages/OrderPage/OrderInfo/order-info-list/order-info-list-item";
import {useCheckList} from "@/store/CheckListStore";
import {observer} from "mobx-react";
import {useCartStore} from "@/store/CartStore";

const OrderInfoList = () => {
    const cls = useCheckList()
    const cs = useCartStore()
    return (
        <div className="w-full p-5 border-gray border-t-[1px]">
            <div>
                {cs.cart.map(n=><OrderInfoListItem {...n}/>)}
            </div>
        </div>
    );
};

export default observer(OrderInfoList);