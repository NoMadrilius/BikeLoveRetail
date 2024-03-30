import Image from "next/image";

interface ProductImageProps {
  classname?: string;
}

const ProductImage = ({ classname }: ProductImageProps) => {
  return (
    <div
      className={`relative w-[132px] h-[128px] md:w-[276px] md:h-[194px] mb-5 ${classname}`}
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
