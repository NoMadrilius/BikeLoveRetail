import { Text } from "@/components/Text/Text";
import { styled } from "styled-components";
import { colors } from "../../../../theme/colors";
import { fonts } from "../../../../theme/fonts";
import { IProduct } from "@/types/types";
import { FC } from "react";
import { prettyPrice } from "@/helpers/stringDecorate/stringDecorate";
import { useRouter } from "next/router";

type Props = {
	data: IProduct;
};

const ListItems: FC<Props> = ({ data }) => {
	console.log(data);
	const router = useRouter();
	return (
		<>
			<Wrapper onClick={() => router.push(`/product/${data.id}`)}>
				<ItemWrapper>
					<Picture src={data.image || "/mock/NoPhoto.png"} />
					<ColumnContainer>
						<Text color={colors.black} size='16px' fontStyle={fonts.f600}>
							{data.name}
						</Text>
						<Text color={colors.black} size='15px' fontStyle={fonts.f400}>
							Размер:
						</Text>
						<RowContainer>
							<Text color={colors.black} size='16px' fontStyle={fonts.f400}>
								{prettyPrice(data.retailPrice)} UAH
							</Text>
							<Text color={colors.black} size='16px' fontStyle={fonts.f400}>
								{data.quantity} шт
							</Text>
						</RowContainer>
					</ColumnContainer>
				</ItemWrapper>
			</Wrapper>
		</>
	);
};
export default ListItems;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 20px;
	cursor: pointer;
`;
const ItemWrapper = styled.div`
	display: flex;
	column-gap: 32px;
	margin-top: 20px;
	padding: 21px 0;
	border-bottom: 1px solid ${colors.grayBorder};
`;
const Picture = styled.img`
	border: 1px solid ${colors.grayBorder};
	border-radius: 10px;
	width: 201px;
	height: 137px;
	@media (max-width: 756px) {
		width: 123px;
		height: 85px;
	}
`;
const ColumnContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding-bottom: 20px;
`;
const RowContainer = styled.div`
	display: flex;
	column-gap: 50px;
`;
