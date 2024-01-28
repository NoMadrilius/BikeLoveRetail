import { Text } from "@/components/Text/Text";
import { FC } from "react";
import { styled } from "styled-components";
import { colors } from "../../../../theme/colors";
import { fonts } from "../../../../theme/fonts";
import { templates } from "../../../../theme/templates";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

type Props = {};

const NotFound: FC<Props> = () => {
	const { t } = useTranslation();
	const router = useRouter();
	return (
		<Wrapper>
			<Text color={colors.black} size='41px' fontStyle={fonts.f600}>
				{t("catalog.sorry")}
			</Text>
			<RowContainer onClick={() => router.push("/")}>
				<Image
					alt='Back icon'
					width={100}
					height={47}
					src='/icons/arrowBack.svg'
					style={{ margin: "5px 0 0 0" }}
				/>
				<Text color={colors.redMain} size='32px' fontStyle={fonts.f600}>
					{t("catalog.backToMain")}
				</Text>
			</RowContainer>
		</Wrapper>
	);
};

export default NotFound;

const Wrapper = styled.div`
	${templates.centerContent};
	flex-direction: column;
	row-gap: 20px;
	height: calc(100vh - 70px);
`;
const RowContainer = styled.div`
	${templates.centerContent};
	cursor: pointer;
`;
