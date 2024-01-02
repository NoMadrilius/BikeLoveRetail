import ProductScreen from "@/Screens/ProductScreen/ProductScreen";
import { PaddingWrapper } from "../../../theme/templates";
import axios from "axios";
import { GetServerSideProps } from "next";

const groupOptions = (options: any) => {
	console.log(options);

	return options.reduce((acc: any, option: any) => {
		const existingOption = acc.find(
			(item: any) => item.optionName === option.optionName
		);

		if (existingOption) {
			existingOption.name.push(option.name);
		} else {
			acc.push({
				optionName: option.optionName,
				name: [option.name],
			});
		}

		return acc;
	}, []);
};

export const getServerSideProps: GetServerSideProps = async ({
	params,
}: any) => {
	try {
		const { id } = params;
		const response = await axios.get(
			`https://bikeshop.1gb.ua/api/public/getproductcardbyid`,
			{
				params: {
					productId: +id,
				},
			}
		);
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
			<PaddingWrapper>
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
