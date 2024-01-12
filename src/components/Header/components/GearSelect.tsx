import BlurWrapper from "@/components/BlurWrapper/BlurWrapper";
import { Text } from "@/components/Text/Text";
import { FC, useState } from "react";
import { styled } from "styled-components";
import { colors } from "../../../../theme/colors";
import { fonts } from "../../../../theme/fonts";
import { useCurrencyStore } from "@/store/CurrencyStore";
import { observer } from "mobx-react";

type Props = {
	onClick: any;
	setVisible: any;
};

const GearSelect: FC<Props> = ({ onClick, setVisible }) => {
	const currStore = useCurrencyStore();
	const [open, setOpen] = useState(false);

	const clickCurr = (curr: string) => {
		onClick(curr);
		setVisible(false);
	};

	return (
		<BlurWrapper setModal={setVisible}>
			<Wrapper onClick={(e) => e.stopPropagation()}>
				<SelectField>
					<Text
						color={colors.black}
						fontStyle={fonts.f500}
						size='18px'
						margin='0 auto 0 10px'>
						{currStore?.selectedCurrency}
					</Text>
					<Icon src='/icons/catArrow.svg' onClick={() => setOpen(!open)} />
					{open && (
						<SelectArea>
							<Text
								color={colors.black}
								size='18px'
								fontStyle={fonts.f500}
								func={() => clickCurr("UAH")}
								hoverColor={colors.redMain}
								margin='5px 0 0 0'>
								UAH
							</Text>
							<Text
								color={colors.black}
								size='18px'
								fontStyle={fonts.f500}
								func={() => clickCurr("USD")}
								hoverColor={colors.redMain}
								margin='5px 0 0 0'>
								USD
							</Text>
						</SelectArea>
					)}
				</SelectField>
			</Wrapper>
		</BlurWrapper>
	);
};

export default observer(GearSelect);

const Wrapper = styled.div`
	position: absolute;
	display: flex;
	flex-direction: column;
	row-gap: 20px;
	padding: 20px 10px;
	right: 20px;
	width: 200px;
	border-radius: 10px;
	z-index: 6;
	height: 200px;
	background-color: rgba(245, 241, 241, 0.58);
	top: 70px;
	box-sizing: border-box;
`;
const SelectField = styled.div`
	display: flex;
	width: 100%;
	position: relative;
	height: 40px;
	border-radius: 10px;
	background-color: white;
	justify-content: flex-end;
	align-items: center;
`;
const Icon = styled.img`
	position: absolute;
	width: 30px;
	height: 30px;
	cursor: pointer;
`;
const SelectArea = styled.div`
	width: 100%;
	height: 100px;
	background-color: white;
	top: 33px;
	padding: 10px;
	position: absolute;
	border-radius: 0 0 10px 10px;
`;
