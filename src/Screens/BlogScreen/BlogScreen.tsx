import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import { styled } from "styled-components";
import { metrics } from "../../../theme/metrics";
import { newsData } from "@/mock/data";
import NewsItem from "@/components/NewsItem/NewsItem";
import { Text } from "@/components/Text/Text";
import { colors } from "../../../theme/colors";
import { fonts } from "../../../theme/fonts";
import { UseMetaData } from "@/helpers/hooks/useMetaData";

const BlogScreen = () => {
	const road = [{ title: "Велоблог", link: "" }];
	return (
		<>
			<UseMetaData title={"Блог"} img={""} description={""} />
			<BreadCrumbs road={road} />
			<Text color={colors.black} size='42px' fontStyle={fonts.f500}>
				ВЕЛОБЛОГ
			</Text>
			<GridContainer>
				{newsData.map((el, index) => (
					<NewsItem {...el} blog key={index} />
				))}
			</GridContainer>
			<div style={{ paddingBottom: "90px" }}></div>
		</>
	);
};
export default BlogScreen;

const GridContainer = styled.div`
	margin-top: 50px;
	display: grid;
	grid-template-columns: repeat(3, minmax(250px, 1fr));
	gap: 24px;
	width: 100%;
	@media (max-width: ${metrics.desktop}) {
		grid-template-columns: repeat(2, minmax(150px, 1fr));
	}
	@media (max-width: ${metrics.mobile}) {
		margin-top: 25px;
		grid-template-columns: repeat(1, minmax(150px, 1fr));
		gap: 10px;
	}

	& > div {
		width: 100%;
	}
`;
