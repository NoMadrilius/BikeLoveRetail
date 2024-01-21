import { keyframes, styled } from "styled-components";
import { metrics } from "../../../../theme/metrics";
import { FC, useState } from "react";
import Card from "@/components/Card/Card";
import { Text } from "@/components/Text/Text";
import { colors } from "../../../../theme/colors";
import { fonts } from "../../../../theme/fonts";
import { useRouter } from "next/router";
import Image from "next/image";

type Props = {
	items: any;
	loading: boolean;
	totalPages: any;
};

const Products: FC<Props> = ({ items, loading, totalPages }) => {
	const router = useRouter();
	const products = items?.map((el: any) => ({
		...el.product,
		img: el.productImages[0],
	}));
	console.log(totalPages);
	const [currentPage, setCurrentPage] = useState(1);

	const onPagiClick = (number: number) => {
		setCurrentPage(number);
		router.push({
			pathname: router.pathname,
			query: { ...router.query, page: number },
		});
	};
	const onPagiArrowClick = (direction: "left" | "right") => {
		let newPage;

		if (direction === "left") {
			newPage = Math.max(currentPage - 1, 1);
		} else {
			newPage = Math.min(currentPage + 1, totalPages);
		}

		setCurrentPage(newPage);
		router.push({
			pathname: router.pathname,
			query: { ...router.query, page: newPage },
		});
	};
	return (
		<MainWrapper>
			<GridContainer>
				{loading
					? Array.from({ length: 6 }).map((_, index) => (
							<FakeCard key={index} />
					  ))
					: products?.map((el: any, index: any) => (
							<Card
								key={index}
								title={el.name}
								image={el.img?.url}
								price={el.retailPrice}
								colors={el.colors}
								sizes={el.sizes}
								sale={el.sale}
								id={el.id}
							/>
					  ))}
			</GridContainer>

			<PagiContainer>
				<HoverableSvg
					width='7'
					height='12'
					viewBox='0 0 7 12'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					onClick={() => onPagiArrowClick("left")}>
					<path d='M6.25 0.375L1.25 6L6.25 11.625' />
				</HoverableSvg>
				{Array.from({ length: totalPages }).map((x, index: number) => (
					<Text
						key={index}
						color={currentPage === index + 1 ? colors.black : colors.grayBorder}
						size='18'
						fontStyle={currentPage === index + 1 ? fonts.f600 : fonts.f400}
						func={() => onPagiClick(index + 1)}>
						{index + 1}
					</Text>
				))}
				<HoverableSvgRight
					width='7'
					height='12'
					viewBox='0 0 7 12'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					onClick={() => onPagiArrowClick("right")}>
					<path d='M6.25 0.375L1.25 6L6.25 11.625' />
				</HoverableSvgRight>
			</PagiContainer>
		</MainWrapper>
	);
};
export default Products;

const MainWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;
const PagiContainer = styled.div`
	display: flex;
	align-items: center;
	column-gap: 20px;
	margin: 0 auto;
	margin-top: 50px;
`;
const HoverableSvg = styled.svg`
	cursor: pointer;
	path {
		stroke: #aeaeae;
		transition: stroke 0.3s ease;
	}

	&:hover {
		path {
			stroke: black;
		}
	}
`;
const HoverableSvgRight = styled.svg`
	cursor: pointer;
	transform: rotate(180deg);
	path {
		stroke: #aeaeae;
		transition: stroke 0.3s ease;
	}

	&:hover {
		path {
			stroke: black;
		}
	}
`;

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
		min-width: 320px;
		height: auto;
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
