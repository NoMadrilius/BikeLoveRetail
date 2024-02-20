import ProductScreen from "@/components/Screens/ProductScreen/ProductScreen";
import { PaddingWrapper } from "../../../theme/templates";
import axios from "axios";
import { GetServerSideProps } from "next";
import { colors } from "../../../theme/colors";
import axiosInstance from "@/api/axiosInstance";

interface Option {
  optionVariantId: number;
  name: string;
  icon: string | null;
  id: any;
  optionName?: any;
  productId?: any;
}

interface GroupedOption {
  optionName: string;
  name: Option[];
}

const groupOptions = (options: Option[]): GroupedOption[] => {
  const groupedOptionsMap = options.reduce<{ [key: string]: GroupedOption }>(
    (acc, option) => {
      const existingOption = acc[option.optionName];
      const { optionVariantId, id, productId } = option;

      if (existingOption) {
        const existingVariant = existingOption.name.find(
          (item) => item.optionVariantId === optionVariantId
        );

        if (existingVariant) {
          const index = existingOption.name.indexOf(existingVariant);
          existingOption.name[index].id.push(productId);
        } else {
          existingOption.name.push({
            optionVariantId,
            name: option.name,
            icon: option.icon || null,
            id: [productId],
          });
        }
      } else {
        acc[option.optionName] = {
          optionName: option.optionName,
          name: [
            {
              optionVariantId,
              name: option.name,
              icon: option.icon || null,
              id: [productId],
            },
          ],
        };
      }

      return acc;
    },
    {}
  );

  const groupedOptions: GroupedOption[] = Object.values(groupedOptionsMap);

  return groupedOptions;
};

export const getServerSideProps: GetServerSideProps = async ({
  params,
}: any) => {
  try {
    const { id } = params;
    const response = await axiosInstance.get(`/public/getproductcardbyid`, {
      params: {
        productId: +id,
      },
    });
    const productData = response.data;
    const options = groupOptions(productData.productOptions);

    return {
      props: {
        productData,
        options,
        images: productData.productImages,
      },
    };
  } catch (error) {
    console.error("Ошибка при получении данных:", error);
    return {
      props: {},
    };
  }
};

const ProductItem = ({ productData, options, images }: any) => {
  return (
    <>
      <PaddingWrapper style={{ backgroundColor: colors.grayBg }}>
        <ProductScreen
          productData={productData}
          options={options}
          images={images}
        />
      </PaddingWrapper>
    </>
  );
};

export default ProductItem;
