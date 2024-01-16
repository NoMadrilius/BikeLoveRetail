import { css, styled } from "styled-components";
import { colors } from "../../../theme/colors";
import { fonts } from "../../../theme/fonts";
import { templates } from "../../../theme/templates";

/// Res Blocks
export const Res1Block = styled.div`
	display: block;
	@media (max-width: 1175px) {
		display: none;
	}
`;
export const Res1Text = styled.div`
	display: block;
	@media (max-width: 1000px) {
		display: none;
	}
`;
export const Res2Text = styled.div`
	display: none;
	@media (max-width: 1000px) {
		display: block;
	}
`;
///
export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
`;
export const H1Name = styled.h1`
	color: ${colors.black};
	font-size: 42px;
	font-weight: 500;
	font-family: ${fonts.f500.fontFamily};
	@media(max-width: 700px){
		font-size: 30px;
	}
`;
export const MainContainer = styled.div`
	display: flex;
	column-gap: 60px;
	@media (max-width: 1000px) {
		flex-direction: column;
	}
`;
export const SliderContainer = styled.div<{ images: boolean }>`
	display: flex;
	flex-direction: column;
	width: ${(p) => (p.images ? "50%" : "100%")};
	@media (max-width: 700px) {
		width: 100%;
	}
`;
export const SecondContainer = styled.div`
	display: flex;
	@media (max-width: 1000px) {
		flex-direction: column-reverse;
	}
`;
export const RowContainer = styled.div`
	display: flex;
`;
export const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
`;
export const FakeBlock = styled.div`
	width: 100%;
	padding: 35px;
	height: auto;
	border-radius: 15px;
	background-color: ${colors.white};
    @media(max-width: 700px){
        padding: 15px;
    }
`;
export const SizeContainer = styled.div<{active?: boolean, chosed:boolean}>`
    ${templates.centerContent};
    padding: 10px;
    height: 32px;
	background-color: ${p => p.active ? colors.white: '#c2c2c2'};
	background-color: ${p => p.chosed && colors.redMain};
	border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
        background-color: ${p => {
            if (p.active && p.chosed) {
                return colors.redMain; // если и active и chosed = true
            } else if (p.active) {
                return colors.redBlur; // если только active = true
            } else {
                return '#d8d8d8'; // в остальных случаях
            }
        }};
    }
`;

export const SalePatch = styled.div`
	padding: 6px 12px;
	${templates.centerContent};
	background-color: ${colors.redHover};
	border-radius: 5px;
	margin-left: 18px;
`;
export const CustomP = styled.p`
	font-family: ${fonts.f700.fontFamily};
	font-weight: ${fonts.f700.fontWeight};
	font-size: 16px;
`;
export const LikeBtn = styled.div<{ liked: boolean }>`
	width: 56px;
	height: 56px;
	border-radius: 5px;
	border: 2px solid #cacaca;
	background-color: ${(p) => (p.liked ? colors.redMain : colors.white)};
	cursor: pointer;
	${templates.centerContent}
`;
export const IconServices = styled.img`
	width: 22px;
	height: 22px;
`;
export const ContainerWithBG = styled.div<{ bg: string }>`
	background-image: url(${(p) => p.bg});
	background-size: cover;
	margin-top: 60px;
	width: 100%;
	aspect-ratio: 2/1;
	border-radius: 20px;
`;
export const CharacteristicContainer = styled.div<{ index: number }>`
	display: flex;
	background-color: ${(p) => (p.index % 2 === 0 ? "white" : "transparent")};
	justify-content: space-between;
	padding: 11px 16px;
`;
