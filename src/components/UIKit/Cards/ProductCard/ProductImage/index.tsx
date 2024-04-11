import Image from "next/image";

interface ProductImageProps {
  classname?: string;
}

const ProductImage = ({ classname }: ProductImageProps) => {
  return (
    <div
      className={`relative w-full h-[128px] 
      md:w-full md:max-w-[276px] md:h-[194px] 
      xl:w-full xl:h-[194px] 
      lg:w-[276px] lg:h-[194px]
      sm:mb-[9px] mb-5 xl:mb-[13px] 
      ${classname}`}
    >
      <Image
        src={
          "https://www.statebicycle.com/cdn/shop/products/6061-eBikeCommuter-MatteBlack_1.jpg?v=1684443969"
        }
        alt={"Bicycle"}
        fill
        style={{ objectFit: "contain" }}
      />
    </div>
  );
};

export default ProductImage;
