import { Text } from "../Text/Text";
import { colors } from "../../../theme/colors";
import { fonts } from "../../../theme/fonts";
import BlurWrapper from "../BlurWrapper/BlurWrapper";
import { useState } from "react";
import {
	ColumnContainer,
	Line,
	RowContainer,
	SmallIconContainer,
	Wrapper,
} from "./SidebarStyles";
import SidebarCatalog from "./components/SidebarCatalog";
import SideBarAuth from "./components/SidebarAuth";
import { useRouter } from "next/router";
import Image from "next/image";

export const TITLES = [
	{ title: "КАТАЛОГ", openArrow: true },
	{ title: "О МАГАЗИНЕ", openArrow: true, href: "/about" },
	{ title: "МАСТЕРСКАЯ", openArrow: true, href: "/workshop" },
	{ title: "ВЕЛОБЛОГ", openArrow: false, href: "/blog" },
	{ title: "КОНТАКТЫ", openArrow: false, href: "/contacts" },
];
export const TITLES2 = [
	{ title: "КАТАЛОГ", icon: "/images/home/icons/Cart.png", href: "#" },
	{
		title: "О МАГАЗИНЕ",
		icon: "/images/home/icons/Invoice.png",
		href: "/about",
	},
	{
		title: "МАСТЕРСКАЯ",
		icon: "/images/home/icons/Heart.png",
		href: "/workshop",
	},
	{ title: "ВЕЛОБЛОГ", icon: "/images/home/icons/Eye.png", href: "/blog" },
];

const SideBar = ({ setVisible }: any) => {
	const router = useRouter();
	const [step, setStep] = useState(0);

	const goToLink = (href: string) => {
		router.push(href);
		setVisible(false);
	};

	return (
		<BlurWrapper setModal={setVisible}>
			<Wrapper onClick={(e) => e.stopPropagation()}>
				{step === 0 && (
					<>
						<Text
							color={colors.redMain}
							size='30px'
							fontStyle={fonts.f700}
							margin='28px 0 0 26px'>
							BIKELOVE
						</Text>

						<SideBarAuth setVisible={setVisible} />
						<ColumnContainer
							style={{ rowGap: "20px", padding: "23px 26px 33px" }}>
							{TITLES.map((el, index) => (
								<RowContainer
									key={index}
									style={{
										justifyContent: "space-between",
										alignItems: "center",
									}}>
									<Text
										color={colors.black}
										size='16px'
										fontStyle={fonts.f500}
										hoverColor={colors.redHover}
										func={() =>
											index === 0 ? setStep(1) : el.href && goToLink(el.href)
										}>
										{el.title}
									</Text>
									{el.openArrow && (
										<Image
											alt='Sidebar Arrow Icon'
											width={4}
											height={8}
											src='/images/home/icons/sidebarArrow.png'
											style={{ width: "4px", height: "8px" }}
										/>
									)}
								</RowContainer>
							))}
						</ColumnContainer>
					</>
				)}
				{step === 1 && (
					<SidebarCatalog setMainStep={setStep} setVisible={setVisible} />
				)}
				<Line />
				<ColumnContainer style={{ padding: "26px 0 46px 25px", rowGap: "7px" }}>
					{TITLES2.map((el, index) => (
						<RowContainer key={index} style={{ alignItems: "center" }}>
							<SmallIconContainer>
								<Image alt='Title Icon' width={13} height={13} src={el.icon} />
							</SmallIconContainer>
							<Text
								color={colors.black}
								size='13px'
								fontStyle={fonts.f400}
								hoverColor={colors.redHover}
								margin='0 0 0 10px'
								func={() => goToLink(el.href)}>
								{el.title}
							</Text>
						</RowContainer>
					))}
				</ColumnContainer>
			</Wrapper>
		</BlurWrapper>
	);
};
export default SideBar;
