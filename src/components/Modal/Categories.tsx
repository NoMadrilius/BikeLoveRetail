import { styled } from "styled-components";
import { colors } from "../../../theme/colors";
import BlurWrapper from "../BlurWrapper/BlurWrapper";
import { metrics } from "../../../theme/metrics";
import { Text } from "../Text/Text";
import { fonts } from "../../../theme/fonts";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Categories = ({ setVisible, categories }: any) => {
	const [selectedTitle, setSelectedTitle] = useState(0);
	const router = useRouter();
	const filteredCategory = categories.parentCategories.filter(
		(el: any) => el.id === selectedTitle
	)[0];

	const childrenId =
		filteredCategory && filteredCategory.childrenIds
			? filteredCategory.childrenIds.split(";").map(Number)
			: [];

	const childCategories = categories.categories?.filter((el: any) =>
		childrenId.includes(el.id)
	);

	const smallChildCategories = (el: any) => {
		const ids =
			el && el.childrenIds ? el.childrenIds.split(";").map(Number) : [];
		return categories.categories?.filter((el: any) => ids.includes(el.id));
	};

	const parentClick = (el: any) => {
		if (el.childrenIds !== "") {
			setSelectedTitle(el.id);
		} else {
			router.push(`/catalog/${el.id}`);
			setVisible(false);
		}
	};
	const childClick = (el: any) => {
		router.push(`/catalog/${el.id}`);
		setVisible(false);
	};
	const smallChildClick = (id: number) => {
		router.push(`/catalog/${id}`);
		setVisible(false);
	};
	console.log(filteredCategory);
	return (
		<BlurWrapper setModal={setVisible}>
			<Wrapper onClick={(e) => e.stopPropagation()}>
				<MainColumn>
					{categories?.parentCategories?.map((el: any) => (
						<Text
							key={el.id}
							color={el.id === selectedTitle ? colors.redMain : colors.black}
							hoverColor={colors.redHover}
							size='15px'
							fontStyle={fonts.f600}
							func={() => parentClick(el)}>
							{el.name}
						</Text>
					))}
				</MainColumn>
				<DetailsContainer>
					{childCategories.length && (
						<Text
							color={colors.black}
							hoverColor={colors.redHover}
							size='15px'
							fontStyle={fonts.f600}
							func={() => childClick(filteredCategory)}>
							Все в категорії
							<img
								src='/images/contacts/arrow.svg'
								style={{ transform: "rotate(270deg)" }}
							/>
						</Text>
					)}
					{childCategories.map((el: any, index: any) => (
						<>
							<Text
								key={index}
								color={colors.black}
								hoverColor={colors.redHover}
								size='15px'
								fontStyle={fonts.f600}
								func={() => childClick(el)}>
								{el.name}
							</Text>
							{el.childrenIds &&
								el.childrenIds !== "" &&
								smallChildCategories(el)?.map((child: any, childIndex: any) => (
									<Text
										key={childIndex}
										color={colors.black}
										hoverColor={colors.redHover}
										size='15px'
										fontStyle={fonts.f400}
										margin='0 0 0 8px'
										func={() => smallChildClick(child.id)}>
										{child.name}
									</Text>
								))}
						</>
					))}
				</DetailsContainer>
			</Wrapper>
		</BlurWrapper>
	);
};
export default Categories;

const Wrapper = styled.div`
	position: absolute;
	display: flex;
	top: 90px;
	background-color: ${colors.white};
	width: 100%;
	height: 742px;
	padding: 0 124px;
	@media (max-width: ${metrics.desktop}) {
		padding: 0 24px;
	}
	@media (max-width: ${metrics.mobile}) {
		padding: 0 20px;
		top: 74px;
	}
`;
const MainColumn = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${colors.redBlur};
	height: 100%;
	width: 322px;
	padding: 38px 47px;
	row-gap: 20px;
`;
const DetailsContainer = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;

	padding: 38px 0 0 77px;
	row-gap: 16px;
	overflow: scroll;
	column-gap: 20px;
`;
