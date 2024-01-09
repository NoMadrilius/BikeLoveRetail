import { ColumnContainer } from "@/components/SideBar/SidebarStyles";
import { FC } from "react";
import { styled } from "styled-components";
import { CharacteristicContainer, RowContainer } from "../ProductScreenStyles";
import { Text } from "@/components/Text/Text";
import { colors } from "../../../../theme/colors";
import { fonts } from "../../../../theme/fonts";

type Props = {
	activeTab: number;
	setActiveTab: any;
	productData: any;
	options: any;
};

const DescChar: FC<Props> = ({
	activeTab,
	setActiveTab,
	options,
	productData,
}) => {
	return (
		<>
			<ColumnContainer style={{ width: "100%" }}>
				<RowContainer
					style={{
						marginTop: "60px",
						columnGap: "34px",
						marginBottom: "33px",
					}}>
					<Text
						color={activeTab === 0 ? colors.black : colors.grayMain}
						size='40px'
						fontStyle={fonts.f500}
						func={() => setActiveTab(0)}>
						Описание
					</Text>
					<Text
						color={activeTab === 1 ? colors.black : colors.grayMain}
						size='40px'
						fontStyle={fonts.f500}
						func={() => setActiveTab(1)}>
						Характеристики
					</Text>
				</RowContainer>
				{activeTab === 0 && (
					<>
						<Text
							color={colors.black}
							size='16px'
							fontStyle={fonts.f400}
							margin='0 0 0 0'>
							<div
								dangerouslySetInnerHTML={{
									__html: productData.productCard.description,
								}}
							/>
						</Text>

						<Text
							color={colors.grayMain}
							size='13px'
							fontStyle={fonts.f400}
							margin='26px 0 0 0'
							hoverColor={colors.redHover}>
							Читать далее
						</Text>
					</>
				)}
				{activeTab === 1 && (
					<>
						{options?.map(
							(el: any, index: any) =>
								el.name.some(
									(item: any) => item.id === productData.product.id
								) && (
									<CharacteristicContainer key={index} index={index}>
										<Text
											color={colors.black}
											size='15px'
											fontStyle={fonts.f400}
											hoverColor={colors.redHover}
											maxWidth='100%'>
											{el.optionName}
										</Text>
										<Text
											color={colors.black}
											size='15px'
											fontStyle={fonts.f400}
											hoverColor={colors.redHover}>
											{el.name.map((item: any) =>
												item.id === productData.product.id ? item.name : ""
											)}
										</Text>
									</CharacteristicContainer>
								)
						)}
					</>
				)}
			</ColumnContainer>
		</>
	);
};

export default DescChar;

const Wrapper = styled.div``;
