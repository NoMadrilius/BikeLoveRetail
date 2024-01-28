import { FC, useState } from "react";
import { styled } from "styled-components";
import { templates } from "../../../../theme/templates";
import { colors } from "../../../../theme/colors";
import { Text } from "@/components/Text/Text";
import { fonts } from "../../../../theme/fonts";

type Props = {
	func: any;
	title: string;
	hover?: boolean;
};

const MenuTitle: FC<Props> = ({ func, title, hover }) => {
	const [clicked, setClicked] = useState(false);
	const click = () => {
		if (hover) {
			setClicked(true);
			func(true);
		}
		if (hover && clicked) {
			func(false);
			setClicked(false);
		}
		if (!hover) {
			func();
		}
	};
	return (
		<Wrapper
			onClick={() => click()}
			{...(hover &&
				!clicked && {
					onMouseEnter: () => func(true),
					onMouseLeave: () => func(false),
				})}>
			<Title>{title}</Title>
		</Wrapper>
	);
};

export default MenuTitle;

const Title = styled.div`
	font-size: 20px;
	font-family: ${fonts.f600.fontFamily};
	font-weight: ${fonts.f600.fontWeight};
	color: ${colors.white};
	transition: 0.3s; // Добавляем анимацию для плавного перехода стилей
`;

const Wrapper = styled.div`
	${templates.centerContent};
	padding: 10px;
	border-radius: 8px;
	cursor: pointer;
	transition: 0.3s;

	&:hover {
		// Применяем стили для Title при наведении на Wrapper
		${Title} {
			color: ${colors.redMain};
			// другие стили при hover
		}
	}
`;
