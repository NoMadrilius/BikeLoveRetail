import React from 'react';
import classnames from "classnames";

interface BlockWrapperProps {
    title: string;
    children: React.ReactNode;
    className?: string,
    bodyClassName?: string
    headerAction?: React.ReactNode
}

const BlockWrapper = (props: BlockWrapperProps) => {
    const { title, children,className,bodyClassName,headerAction } = props;
    return (
        <div className={classnames("w-full h-fit p-[20px] bg-white rounded-[8px]",bodyClassName)}>
            <div className="flex items-center justify-between pb-[20px] font-robot-c">
                <h2 className="font-medium text-3xl">{title}</h2>
                {headerAction}
            </div>
            <div className={className}>
                {children}
            </div>
        </div>
    );
};

export default BlockWrapper;