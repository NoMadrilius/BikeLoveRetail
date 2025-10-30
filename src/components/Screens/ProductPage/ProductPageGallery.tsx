import React, { useRef, useState } from "react";
import { ProductPageData } from "@/dataTransferObjects/response/productPage/ProductPageData";
import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";

const ProductPageGallery = ({p}:{p:ProductPageData}) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="p-2 rounded w-full bg-white">
      <ImageGallery
        showPlayButton={false}
        useBrowserFullscreen={false}
        items={p.images.map(n=>{return{original: n.url, thumbnail: n.url, thumbnailAlt:"Product photo: "+p.product.name, originalAlt:p.product.name}})} />
    </section>
  );
};

export default ProductPageGallery;