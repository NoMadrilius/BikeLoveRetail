import React from 'react';

interface TotalAmountRowProps {
    text: string
    value: string,
    className?: string
}

const TotalAmountRow = (props: TotalAmountRowProps) => {
    const { text, value,className="text-[16px] text-t-black font-normal" } = props;

    return (
        <div className="w-full flex justify-between items-center">
            <span className={"text-[14px] text-t-grey font-normal"}>{text}</span>
            <span className={className}>{value}</span>
        </div>
    );
};

export default TotalAmountRow;