import { styled } from "styled-components";
import { colors } from "../../../theme/colors";
import BlurWrapper from "../BlurWrapper/BlurWrapper";
import { metrics } from "../../../theme/metrics";
import { Text } from "../Text/Text";
import { fonts } from "../../../theme/fonts";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const Categories = ({ setVisible, categories }: any) => {
	const [selectedTitle, setSelectedTitle] = useState(0);
	const [expandedCategoryId, setExpandedCategoryId] = useState(null);
	const [expandedSmallCategoryId, setExpandedSmallCategoryId] = useState(null);
	const router = useRouter();
	const filteredCategory = categories.parentCategories.filter(
		(el: any) => el.id === selectedTitle
	)[0];

	const childCategories = categories.categories?.filter(
		(el: any) => el.parentId === selectedTitle
	);

	const smallChildCategories = (el: any) => {
		const ids =
			el && el.childrenIds ? el.childrenIds.split(";").map(Number) : [];
		console.log(
			categories.categories?.filter((el: any) => ids.includes(el.id))
		);
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
		console.log(el.id);
		router.push(`/catalog/${el.id}`);
		setVisible(false);
	};
	const smallChildClick = (id: number) => {
		router.push(`/catalog/${id}`);
		setVisible(false);
	};
	return (
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
					<TitleWrapper>
						<Text
							color={colors.black}
							hoverColor={colors.redHover}
							size='15px'
							fontStyle={fonts.f600}
							func={() => childClick(filteredCategory)}>
							Все в категорії
						</Text>
						<Image
							alt='Arrow Icon'
							width={20}
							height={20}
							src='/icons/catArrow.svg'
							style={{
								transform: "rotate(270deg)",
								marginLeft: "5px",
								width: "20px",
								height: "20px",
							}}
						/>
					</TitleWrapper>
				)}

				{childCategories.map((el: any, index: any) => {
					const isExpanded = expandedCategoryId === el.id;

					return (
						<>
							<TitleWrapper>
								{el.childrenIds && el.childrenIds !== "" && (
									<TitleIcon open={isExpanded} src='/icons/catArrow.svg' />
								)}
								<Text
									key={index}
									color={colors.black}
									hoverColor={colors.redHover}
									size='15px'
									fontStyle={fonts.f600}
									func={() => {
										el.childrenIds && el.childrenIds !== ""
											? setExpandedCategoryId(isExpanded ? null : el.id)
											: childClick(el);
									}}>
									{el.name}
								</Text>
							</TitleWrapper>

							{isExpanded && el.childrenIds && el.childrenIds !== "" && (
								<>
									<TitleWrapper>
										<Text
											color={colors.black}
											hoverColor={colors.redHover}
											size='15px'
											fontStyle={fonts.f400}
											margin='0 0 0 8px'
											func={() => childClick(el)}>
											Все в категорії
										</Text>
										<Image
											alt='Arrow Icon'
											width={20}
											height={20}
											src='/icons/catArrow.svg'
											style={{
												transform: "rotate(270deg)",
												marginLeft: "5px",
												width: "20px",
												height: "20px",
											}}
										/>
									</TitleWrapper>
									{smallChildCategories(el)?.map(
										(child: any, childIndex: any) => {
											const isExpanded = expandedSmallCategoryId === child.id;
											return (
												<>
													<TitleWrapper>
														{child.childrenIds !== "" && (
															<TitleIcon
																open={isExpanded}
																src='/icons/catArrow.svg'
															/>
														)}
														<Text
															key={childIndex}
															color={colors.black}
															hoverColor={colors.redHover}
															size='15px'
															fontStyle={fonts.f400}
															margin='0 0 0 8px'
															// func={() => smallChildClick(child.id)}
															func={() => {
																child.childrenIds && child.childrenIds !== ""
																	? setExpandedSmallCategoryId(
																			isExpanded ? null : child.id
																	  )
																	: childClick(child);
															}}>
															{child.name}
														</Text>
													</TitleWrapper>
													{isExpanded && child.childrenIds !== "" && (
														<>
															{smallChildCategories(child)?.map(
																(childer: any, childerIndex: any) => (
																	<Text
																		key={childerIndex}
																		color={colors.black}
																		hoverColor={colors.redHover}
																		size='15px'
																		fontStyle={fonts.f400}
																		margin='0 0 0 12px'
																		func={() => smallChildClick(childer.id)}>
																		{childer.name}
																	</Text>
																)
															)}
														</>
													)}
												</>
											);
										}
									)}
								</>
							)}
						</>
					);
				})}
			</DetailsContainer>
		</Wrapper>
	);
};
export default Categories;

const TitleWrapper = styled.div`
	display: flex;
	position: relative;
`;
const TitleIcon = styled.img<{ open: boolean }>`
	width: 20px;
	height: 20px;
	position: absolute;
	left: -20px;
	transform: ${(p) => (p.open ? "rotate(180deg)" : "rotate(0deg)")};
`;

const Wrapper = styled.div`
	position: absolute;
	display: flex;
	top: 90px;
	background-color: ${colors.white};
	z-index: 5;
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
