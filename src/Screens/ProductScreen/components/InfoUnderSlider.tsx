import { ColumnContainer } from "@/components/SideBar/SidebarStyles";
import { IconServices, Res1Block, RowContainer } from "../ProductScreenStyles";
import { Text } from "@/components/Text/Text";
import { colors } from "../../../../theme/colors";
import { fonts } from "../../../../theme/fonts";

const InfoUnderSlider = () => {
	return (
		<>
			<Res1Block>
				<RowContainer
					style={{
						width: "100%",
						justifyContent: "space-between",
						padding: "0 42px",
						marginTop: "69px",
					}}>
					<ColumnContainer style={{ alignItems: "center" }}>
						<IconServices src='/images/product/icons/official.png' />
						<Text
							color={colors.black}
							size='15px'
							fontStyle={fonts.f400}
							margin='7px 0 0 0'
							maxWidth='139px'
							textAlign='center'>
							Официальное представительство
						</Text>
					</ColumnContainer>
					<ColumnContainer style={{ alignItems: "center" }}>
						<IconServices src='/images/product/icons/service.png' />
						<Text
							color={colors.black}
							size='15px'
							fontStyle={fonts.f400}
							margin='7px 0 0 0'
							maxWidth='121px'
							textAlign='center'>
							Гарантийное обслуживание
						</Text>
					</ColumnContainer>
					<ColumnContainer style={{ alignItems: "center" }}>
						<IconServices src='/images/product/icons/bike.png' />
						<Text
							color={colors.black}
							size='15px'
							fontStyle={fonts.f400}
							margin='7px 0 0 0'
							maxWidth='121px'
							textAlign='center'>
							Test Ride велосипедов
						</Text>
					</ColumnContainer>
					<ColumnContainer style={{ alignItems: "center" }}>
						<IconServices src='/images/product/icons/money.png' />
						<Text
							color={colors.black}
							size='15px'
							fontStyle={fonts.f400}
							margin='7px 0 0 0'
							maxWidth='121px'
							textAlign='center'>
							Кешбэк на товары
						</Text>
					</ColumnContainer>
				</RowContainer>
			</Res1Block>
		</>
	);
};
export default InfoUnderSlider;
