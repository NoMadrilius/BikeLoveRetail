import React from 'react';
import {ProductFullData} from "@/dataTransferObjects/response/ProductFullData";

const ProductSchema = (p:{name:string, img:string, desc:string}) => {
    const ldJson = {
        "@context": "http://www.schema.org",
        "@type": "product",
        "name": p.name,
        "image": p.img,
        "description": p.desc,
        "aggregateRating": {
            "@type": "aggregateRating",
            "ratingValue": "4.7",
            "reviewCount": "143"
        }
    };
    return (
        <script type='application/ld+json'>
            {JSON.stringify(ldJson)}
        </script>
    );
};

export default ProductSchema;