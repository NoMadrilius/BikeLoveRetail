import React from 'react';
import Image from "next/image";
import RoundedButton from "@/components/UIKit/Buttons/RoundedIconButton";

const OrderInfoListItem = () => {
    const [counter, setCounter] = React.useState(1)
    const add=()=>{
        setCounter(counter+1)
    }

    const minus=()=>{
        const newCounter=counter-1

        setCounter(counter==0?0:newCounter)
    }

    return (
        <div className="w-full h-[148px] py-3 flex justify-between gap-3 sm2:flex-col sm2:h-fit border-gray border-b-[1px]">
            <div className="min-w-[148px] flex flex-col items-center gap-4">
                <Image className="h-[76px]" src={{
                    src: "https://s3-alpha-sig.figma.com/img/a168/be58/58c7c90ff79a7dd10a4490dfa8a1d508?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nlgwwg4k9Xv4bqfaOflDIOFUy8R9fuLhwQPd0eceBJyRUzIih4RQDWkmlqjHsfTryErSN7LvxLTOlPTiJQIpAsRFOaFhEMqVB3tntQCeP-wywTpIf4T1D7BdxxJem8PilS54pcF8IQzE2tSFbKjXS3p8yF8pbILjaOUQEYy6nNSVYVBWYYxRfYiBFknujQgxDTkyZ3S2ZOsmp0EDk7sKdqLckleliflGVIqDnD8tjh6P08823D4u87ZCZYBibW7W72-xzee3PkZ4Dpdym2RrZy2MV1pb01oSxqrxIiK0UldiCfyi7BCIHwf56za~3qoTkFslGzxhfJ--zXYK5~oasw__",
                    width: 100,
                    height: 80,
                }} alt="Товар" fill={false} />

                <div className="pb-4">
                    <span className="mr-2.5">Артикул:</span>
                    <span className="font-normal text-t-grey text-sm">SM-MM-TT</span>
                </div>
            </div>
            <div className="text-base/5 font-normal flex flex-col justify-between">
                <div className="flex">
                    <p>Тримач гаджета GUB PRO-3 на кермо алюмінієвий для PowerBank/телефонів у чохлах. Чорний</p>
                    <RoundedButton onClick={()=>{}} bgColor={"!p-0"} imageUrl={"/icons/trash.svg"} altText="Сміник"/>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex items-center justify-between">
                        <RoundedButton onClick={minus} bgColor={""} imageUrl={"/icons/minus.svg"} altText="Мінус"/>
                        <div className="w-8 h-8 text-center rounded-sm border-[1px] border-gray text-xl font-bold">{counter}</div>
                        <RoundedButton onClick={add} bgColor={""} imageUrl={"/icons/plus.svg"} altText="Плюс"/>
                    </div>
                    <p className="text-xl font-bold whitespace-nowrap">100 000 UAH</p>

                </div>
            </div>
        </div>
    );
};

export default OrderInfoListItem;