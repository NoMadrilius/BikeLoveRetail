import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import { styled } from "styled-components";
import Slider from "@/Screens/HomeScreen/components/Slider";
import { sliderData } from "@/mock/data";
import { UseMetaData } from "@/helpers/hooks/useMetaData";
import { metrics } from "../../../theme/metrics";
import { useWishListStore } from "@/store/WishListStore";
import { useEffect, useState } from "react";
import { IProduct } from "@/types/types";

const WishListScreen = () => {
	const wishStore = useWishListStore();
	const [wishList, setWishList] = useState<IProduct[]>();
	const road = [
		{ title: "Личный кабинет", link: "/account" },
		{ title: "Список желайний", link: "/" },
	];
	useEffect(() => {
		setWishList(wishStore.wishList);
	}, [wishStore]);
	console.log(wishList);

	return (
		<>
			<UseMetaData title={"Wish List"} img={""} description={"sdasd"} />

			<Wrapper>
				<BreadCrumbs road={road} />
				<Slider title={"список желаний"} items={wishList} variant={"cards"} />
			</Wrapper>
		</>
	);
};
export default WishListScreen;

const Wrapper = styled.div`
	margin: 60px 0 160px 0;
	@media (max-width: ${metrics.mobile}) {
		margin: 30px 0 111px 0;
	}
`;
