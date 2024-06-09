import React from 'react';
import OrderInfoListItem from "@/components/Pages/OrderPage/OrderInfo/order-info-list/order-info-list-item";

const OrderInfoList = () => {
    return (
        <div className="w-full p-5 border-gray border-t-[1px]">
            <div>
                <OrderInfoListItem/>
                <OrderInfoListItem/>
                <OrderInfoListItem/>
                <OrderInfoListItem/>
                <OrderInfoListItem/>
                <OrderInfoListItem/>
            </div>
        </div>
    );
};

export default OrderInfoList;