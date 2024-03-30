import Image from "next/image";

const ProductImage = () => {
  return (
    <div className="relative w-[276px] h-[194px] mb-5">
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
