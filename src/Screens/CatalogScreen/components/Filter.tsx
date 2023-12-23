import { Text } from "@/components/Text/Text";
import { css, styled } from "styled-components";
import { colors } from "../../../../theme/colors";
import { fonts } from "../../../../theme/fonts";
import { useState } from "react";
import {
	ColumnContainer,
	RowContainer,
} from "@/components/SideBar/SidebarStyles";
import { templates } from "../../../../theme/templates";
import { metrics } from "../../../../theme/metrics";
import BlurWrapper from "@/components/BlurWrapper/BlurWrapper";

const FILTER_ITEMS = [
	{
		title: "Подкатегория",
		type: "string",
		items: ["Все", "Кросс-кантри", "Трейл", "Скоростной спуск", "Дерт"],
	},
	{
		title: "Опыт",
		type: "string",
		items: ["Все", "Кросс-кантри", "Трейл", "Скоростной спуск", "Дерт"],
	},
	{ title: "Размер", type: "container", items: ["16", "12", "14", "20", "10"] },
	{
		title: "Цвет",
		type: "color",
		items: ["red", "yellow", "blue", "green", "black"],
	},
];

const Filter = ({ mobile, setVisible }: any) => {
	const [currentFilters, setCurrentFilters] = useState<
		{ title: string; value: string }[]
	>([]);
	const [isOpen, setIsOpen] = useState(
		new Array(FILTER_ITEMS.length).fill(false)
	);

	const toggleSelectArea = (index: number) => {
		const updatedIsOpen = [...isOpen];
		updatedIsOpen[index] = !updatedIsOpen[index];
		setIsOpen(updatedIsOpen);
	};
	const addItem = (title: string, value: string) => {
		setCurrentFilters((prev) => [...prev, { title: title, value: value }]);
	};
	const removeItem = (indexToRemove: number) => {
		const updatedFilters = currentFilters.filter(
			(_, index) => index !== indexToRemove
		);
		setCurrentFilters(updatedFilters);
	};
	return (
		<BlurWrapper setModal={setVisible}>
			<Wrapper mobile={mobile}>
				{!!currentFilters.length && (
					<>
						<Text color={colors.black} size='15px' fontStyle={fonts.f600}>
							ТЕКУЩИЕ ФИЛЬТРЫ
						</Text>

						<ColumnContainer style={{ rowGap: "12px", marginTop: "23px" }}>
							{currentFilters.map((el, index) => (
								<RowContainer key={index} style={{ columnGap: "29px" }}>
									<Text
										color={colors.grayMain}
										size='16px'
										fontStyle={fonts.f400}
										whiteSpace>
										{el.title} :
									</Text>
									<Text
										color={colors.black}
										size='16px'
										fontStyle={fonts.f500}
										margin='0 0 0 auto'
										textAlign='right'>
										{el.value}
									</Text>
									<IconClose
										src='/images/catalog/icons/close.png'
										onClick={() => removeItem(index)}
									/>
								</RowContainer>
							))}
							<RowContainer style={{ columnGap: "29px", marginTop: "10px" }}>
								<Text color={colors.black} size='13px' fontStyle={fonts.f400}>
									Результатов :
								</Text>
								<Text
									color={colors.grayMain}
									size='13px'
									fontStyle={fonts.f400}>
									6
								</Text>
							</RowContainer>
						</ColumnContainer>
					</>
				)}

				{FILTER_ITEMS.map((el, index) => (
					<FieldWrapper key={index}>
						<RowContainer>
							<Text color={colors.black} size='16px' fontStyle={fonts.f600}>
								{el.title}
							</Text>

							<Text
								color={colors.black}
								size='16px'
								fontStyle={fonts.f400}
								margin='0 0 0 auto'
								func={() => toggleSelectArea(index)}>
								+
							</Text>
						</RowContainer>
						<SelectArea open={isOpen[index]}>
							{el.type === "string" && (
								<>
									{el.items.map((item, index) => (
										<Text
											key={index}
											color={colors.black}
											size='16px'
											fontStyle={fonts.f400}
											hoverColor={colors.redHover}
											func={() => addItem(el.title, item)}>
											{item}
										</Text>
									))}
								</>
							)}
							{el.type === "color" && (
								<RowContainer style={{ flexWrap: "wrap", gap: "8px" }}>
									{el.items.map((item, index) => (
										<ColorPicker
											key={index}
											color={item}
											onClick={() => addItem(el.title, item)}
										/>
									))}
								</RowContainer>
							)}

							{el.type === "container" && (
								<RowContainer style={{ flexWrap: "wrap", gap: "8px" }}>
									{el.items.map((item, index) => (
										<ContainerSelect
											key={index}
											onClick={() => addItem(el.title, item)}>
											<Text
												key={index}
												color={colors.black}
												size='16px'
												fontStyle={fonts.f400}>
												{item}
											</Text>
										</ContainerSelect>
									))}
								</RowContainer>
							)}
						</SelectArea>
					</FieldWrapper>
				))}
			</Wrapper>
		</BlurWrapper>
	);
};
export default Filter;
const Wrapper = styled.div<{ mobile: boolean }>`
	display: flex;
	flex-direction: column;
	padding: 43px 18px 0 24px;
	min-width: 300px;
	max-width: 300px;
	z-index: 5;
	${(p) =>
		p.mobile &&
		css`
			position: absolute;
			top: 74px;
			left: 0;
			background-color: ${colors.white};
			height: 100%;
			overflow-y: scroll;
		`}
`;
const IconClose = styled.img`
	cursor: pointer;
`;
const FieldWrapper = styled.div`
	padding-bottom: 23px;
	margin-top: 20px;
	border-bottom: 1px solid ${colors.grayBorder};
`;
const SelectArea = styled.div<{ open: boolean }>`
	display: ${(p) => (p.open ? "flex" : "none")};
	flex-direction: column;
	row-gap: 12px;
	margin-top: 23px;
`;
const ColorPicker = styled.div<{ color: string }>`
	width: 33px;
	height: 33px;
	border-radius: 50%;
	background-color: ${(p) => p.color};
	cursor: pointer;
`;
const ContainerSelect = styled.div`
	${templates.centerContent};
	width: 64px;
	height: 34px;
	border-radius: 5px;
	background-color: ${colors.white};
	cursor: pointer;
	transition: 0.3s;
	&:hover {
		background-color: ${colors.redBlur};
	}
`;
