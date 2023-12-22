import { styled } from "styled-components";
import { FC } from "react";
import { Product } from "@/types/types";
import { Text } from "../Text/Text";
import { prettyPrice } from "@/helpers/stringDecorate/stringDecorate";
import { fonts } from "../../../theme/fonts";
import { colors as colorsTheme } from "../../../theme/colors";
import { templates } from "../../../theme/templates";
import { useRouter } from "next/router";

const Card: FC<Product> = ({
	colors,
	image,
	price,
	sale,
	sizes,
	title,
	id,
}) => {
	const router = useRouter();
	return (
		<Wrapper onClick={() => router.push(`/product/${id}`)}>
			{sale && (
				<SalePatch>
					<Text size='12px' color={colorsTheme.white} fontStyle={fonts.f500}>
						-{sale}%
					</Text>
				</SalePatch>
			)}

			<Picture src={image} />
			<ContainerRow>
				{colors && colors.map((el, index) => <Color key={index} color={el} />)}
				{sizes &&
					sizes.map((el, index) => (
						<Size key={index}>
							<Text
								size='12px'
								color={colorsTheme.black}
								fontStyle={fonts.f500}>
								{el}
							</Text>
						</Size>
					))}
			</ContainerRow>
			<Text size='16px' color={colorsTheme.black} fontStyle={fonts.f600}>
				{title}
			</Text>
			<Text size='16px' color={colorsTheme.black} fontStyle={fonts.f400}>
				{prettyPrice(price)} UAH
			</Text>
			<ContainerRow>
				<img src='/images/home/icons/icon1-gray.svg' />
				<img src='/images/home/icons/icon2-gray.svg' />
			</ContainerRow>
		</Wrapper>
	);
};
export default Card;

const Wrapper = styled.div`
	position: relative;
	display: flex;
	padding: 38px 24px 32px;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	width: 322px;
	height: 398px;
	border-radius: 12px;
	background-color: ${colorsTheme.white};
	cursor: pointer;
`;
const Picture = styled.img``;
const ContainerRow = styled.div`
	display: flex;
	column-gap: 16px;
`;
const Color = styled.div<{ color: string }>`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: ${(p) => p.color};
`;
const Size = styled.div`
	padding: 4px 9px;
	${templates.centerContent};
	border: 1px solid ${colorsTheme.grayBorder};
	border-radius: 5px;
`;
const SalePatch = styled.div`
	position: absolute;
	top: 9px;
	right: 12px;
	padding: 4px 9px;
	background-color: ${colorsTheme.redHover};
	border-radius: 5px;
`;
