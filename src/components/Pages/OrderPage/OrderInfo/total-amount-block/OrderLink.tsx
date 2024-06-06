import React from 'react';
import Link from "next/link";
import CheckIcon from "@/components/UIKit/SVGIcons/check-icon";

interface CustomLinkProps {
   href: string
    title: string
}

const OrderLink = (props: CustomLinkProps) => {
    const {href,title} = props

    return (
        <div className="flex items-center text-blue-link">
            <CheckIcon/>
            <Link href={href} className="ml-2 text-sm">
                {title}
            </Link>
        </div>
    );
};

export default OrderLink;