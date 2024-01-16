import CatalogScreen from "@/Screens/CatalogScreen/CatalogScreen";
import { PaddingWrapper } from "../../../theme/templates";
import { useRouter } from "next/router";
import { observer } from "mobx-react";
import axios from "axios";
import Error from "next/error";
import { colors } from "../../../theme/colors";
import NotFound from "@/Screens/CatalogScreen/components/NotFound";

const groupOptions = (options: any) => {
	return options.reduce((acc: any, option: any) => {
		const existingOption = acc.find(
			(item: any) => item.optionName === option.optionName
		);

		if (existingOption) {
			existingOption.name.push({
				optionVariantId: option.optionVariantId,
				name: option.name,
			});
		} else {
			acc.push({
				optionName: option.optionName,
				name: [{ optionVariantId: option.optionVariantId, name: option.name }],
			});
		}

		return acc;
	}, []);
};

export const getServerSideProps = async (context: any) => {
	const filtersVariantIds = context.query.filter
		? context.query.filter.split(",").map(Number)
		: [];
	try {
		//catalogStore.fetchProductCards(+catId!, 1, 1, 15, [], []);
		const request: any = {
			categoryId: context.params.id,
			storageId: 1,
			page: 1,
			pageSize: 15,
			filtersVariantIds: filtersVariantIds,
			sortingSettings: [],
		};
		const response = await axios.post(
			"https://bikeshop.1gb.ua/api/public/catalogproducts",
			request
		);
		const data = response.data.products;
		const options = groupOptions(data.flatMap((el: any) => el.productOptions));

		return {
			props: {
				data,
				options,
			},
		};
	} catch (error) {
		return {
			props: {},
		};
	}
};

const Page = ({ data, options }: any) => {
	const router = useRouter();

	return (
		<>
			<PaddingWrapper style={{ backgroundColor: colors.grayBg }}>
				{data.length === 0 ? (
					<NotFound />
				) : (
					<CatalogScreen
						catalogId={router.query.id!}
						catalogData={data}
						options={options}
					/>
				)}
			</PaddingWrapper>
		</>
	);
};

export default observer(Page);
