import styled, { keyframes } from "styled-components";
import { metrics } from "../../../theme/metrics";
import Image from "next/image";

const bounceAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

export const Wrapper = styled.div`
	width: 100%;
`;
export const BgImage = styled.div<{ bgImage: string }>`
	width: 100%;
	height: calc(100vh + 3px);
	background-image: url(${(p) => p.bgImage});
	background-size: cover;
	background-position: right 67% bottom 45%;
	background-repeat: no-repeat;
	position: relative;
`;
export const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0 124px;
	row-gap: 120px;
	@media (max-width: ${metrics.desktop}) {
		padding: 10px 24px;
	}
	@media (max-width: ${metrics.mobile}) {
		padding: 10px 20px;
		row-gap: 60px;
	}
`;
export const IconBottom = styled(Image)`
	position: absolute;
	bottom: 40px;
	background-color: #e9e9e950;
	border-radius: 50%;
	width: 70px;
	height: 70px;
	cursor: pointer;
	left: calc(50% - 35px);
	transform: translateX(-50%) translateY(50%);
	animation: ${bounceAnimation} 2s infinite;
`;
