import CatalogScreen from "@/Screens/CatalogScreen/CatalogScreen";
import { PaddingWrapper } from "../../../theme/templates";
import { useRouter } from "next/router";
import { observer } from "mobx-react";
import axios from "axios";

export const getServerSideProps = async (context: any) => {
	console.log(context.params.id);

	try {
		//catalogStore.fetchProductCards(+catId!, 1, 1, 15, [], []);
		const request: any = {
			categoryId: context.params.id,
			storageId: 1,
			page: 1,
			pageSize: 15,
			filtersVariantIds: [],
			sortingSettings: [],
		};
		const response = await axios.post(
			"https://bikeshop.1gb.ua/api/public/catalogproducts",
			request
		);
		console.log(response.data);

		return {
			props: {
				data: response.data.products,
			},
		};
	} catch (error) {
		return {
			props: {},
		};
	}
};

const Page = (data: any) => {
	const router = useRouter();
	console.log(data);
	return (
		<>
			<PaddingWrapper>
				<CatalogScreen catalogId={router.query.id!} catalogData={data} />
			</PaddingWrapper>
		</>
	);
};

export default observer(Page);
