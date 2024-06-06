import React from 'react';
import DeliveryRowInfoRadio from "@/components/Pages/OrderPage/DeliveryInfo/DeliveryRowInfoRadio";
import LocationIcon from "@/components/UIKit/SVGIcons/location-icon";
import ClockIcon from "@/components/UIKit/SVGIcons/clock-icon";

const SelfPickupDelivery = () => {
    const rowClasses= "flex items-center mb-2 gap-3"
    return (
        <DeliveryRowInfoRadio radiobutton={{
            label: "Самовивіз з магазину",
            checked: true
        }} className="border border-gray py-2 px-3 rounded-lg">
            <div className={rowClasses}>
                <LocationIcon color="#F9436B"/>
                <span className="text-base font-semibold">вул. Степана Бандери, 123</span>
            </div>
            <div className={rowClasses}>
                <ClockIcon/>
                <span className="text-sm">10.00 - 22.00</span>
            </div>
        </DeliveryRowInfoRadio>
    );
};

export default SelfPickupDelivery;