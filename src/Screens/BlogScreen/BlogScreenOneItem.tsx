import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import { Text } from "@/components/Text/Text";
import { UseMetaData } from "@/helpers/hooks/useMetaData";
import { newsData } from "@/mock/data";
import { colors } from "../../../theme/colors";
import { fonts } from "../../../theme/fonts";
import { styled } from "styled-components";

const BlogScreenOneItem = ({ id }: any) => {
	const item = newsData.find((item) => item.id === +id);

	const road = [
		{ title: "Велоблог", link: "/blog" },
		{ title: item?.title || "Not Found", link: "" },
	];

	return (
		<>
			<UseMetaData
				title={item?.title || "Not Found"}
				img={""}
				description={""}
			/>
			<BreadCrumbs road={road} />
			<Text
				color={colors.black}
				size='40px'
				fontStyle={fonts.f700}
				margin='0 0 30px 0'>
				{item?.title}
			</Text>
			<Text color={colors.grayMain} size='13px' fontStyle={fonts.f400}>
				{item?.date}
			</Text>

			<RowContainer>
				<Picture src={item?.image} />
				<Text color={colors.black} size='16px' fontStyle={fonts.f400}>
					{item?.description}
				</Text>
			</RowContainer>
			<div style={{ paddingBottom: "100px" }}></div>
		</>
	);
};
export default BlogScreenOneItem;
const RowContainer = styled.div`
	display: flex;
	column-gap: 30px;
	margin-top: 30px;
	& > * {
		flex: 1;
	}
`;
const Picture = styled.img`
	width: 100%;
	border-radius: 20px;
`;
