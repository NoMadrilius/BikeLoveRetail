import { keyframes, styled } from "styled-components";
import { metrics } from "../../../../theme/metrics";
import { FC } from "react";
import Card from "@/components/Card/Card";
import { Product } from "@/types/types";

const FAKE_PRODUCTS = [{ title: "", image: "", price: "", id: 0 }];

type Props = {
	items: any;
	loading: boolean;
};

const Products: FC<Props> = ({ items, loading }) => {
	const products = items.map((el: any) => el.product);
	console.log(products);
	return (
		<>
			<GridContainer>
				{loading
					? Array.from({ length: 6 }).map((_, index) => (
							<FakeCard key={index} />
					  ))
					: products?.map((el: any, index: any) => (
							<Card
								key={index}
								title={el.name}
								image={el.img}
								price={el.retailPrice}
								colors={el.colors}
								sizes={el.sizes}
								sale={el.sale}
								id={el.id}
							/>
					  ))}
			</GridContainer>
		</>
	);
};
export default Products;

const GridContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, minmax(250px, 1fr));
	gap: 24px;
	width: 100%;
	@media (max-width: ${metrics.desktop}) {
		grid-template-columns: repeat(2, minmax(150px, 1fr));
	}
	@media (max-width: ${metrics.mobile}) {
		grid-template-columns: repeat(1, minmax(150px, 1fr));
		gap: 10px;
	}

	& > div {
		width: 100%;
	}
`;
const skeletonAnimation = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`;
const FakeCard = styled.div`
	width: 322px;
	height: 398px;
	border-radius: 12px;
	background: linear-gradient(to right, #f0f0f0 4%, #e0e0e0 25%, #f0f0f0 36%);
	background-size: 1000px 100%;
	animation: ${skeletonAnimation} 1.5s linear infinite;
`;
