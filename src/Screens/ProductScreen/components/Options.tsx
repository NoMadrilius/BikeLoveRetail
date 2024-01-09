import { Text } from "@/components/Text/Text";
import { FC, useEffect, useState } from "react";
import { styled } from "styled-components";
import { colors } from "../../../../theme/colors";
import { fonts } from "../../../../theme/fonts";
import { RowContainer, SizeContainer } from "../ProductScreenStyles";
import { useRouter } from "next/router";

type Props = {
	options: any;
	productData: any;
	prepareOptions: any;
	selectedOptionsId: number;
	setSelectedOptionsId: any;
	selectedOptions: any;
	setSelectedOptions: any;
};

const OptionsProduct: FC<Props> = ({
	options,
	prepareOptions,
	selectedOptionsId,
	setSelectedOptionsId,
	selectedOptions,
	setSelectedOptions,
}) => {
	const router = useRouter();

	const onClickOption = (id: any, optionId: any) => {
		if (id !== selectedOptionsId) {
			setSelectedOptions([]);
		}

		setSelectedOptionsId(id);

		setSelectedOptions((prev: any) => {
			if (prev.includes(optionId)) {
				return prev.filter((item: any) => item !== optionId);
			} else {
				return [...prev, optionId];
			}
		});
	};
	useEffect(() => {
		if (selectedOptions.length) {
			const selectedOptionsIds = selectedOptions.join(",");

			router.replace(
				{
					pathname: router.pathname,
					query: { ...router.query, options: selectedOptionsIds },
				},
				undefined,
				{ shallow: true }
			);
		} else {
			const { options, ...queryWithoutOptions } = router.query;

			router.replace(
				{
					pathname: router.pathname,
					query: queryWithoutOptions,
				},
				undefined,
				{ shallow: true }
			);
		}
	}, [selectedOptions]);
	useEffect(() => {
		const optionsFromUrl = router.query.options;

		if (optionsFromUrl) {
			const optionsArray = optionsFromUrl
				//@ts-ignore
				.split(",")
				.map((option: string) => parseInt(option, 10));

			setSelectedOptions(optionsArray);
		}
	}, []);

	return (
		<>
			{options?.map((el: any, index: any) => (
				<div key={index}>
					{el.name.length > 1 && (
						<Text
							color={colors.black}
							size='15px'
							fontStyle={fonts.f400}
							margin='35px 0 22px 0'>
							{el.optionName}
						</Text>
					)}
					<RowContainer style={{ gap: "8px", width: "60%", flexWrap: "wrap" }}>
						{el.name.length > 1
							? el.name.map((name: any, idx: number) => {
									const isActive = prepareOptions.some(
										//@ts-ignore
										(option) => option[0]?.id === name.id
									);

									return (
										<SizeContainer
											key={idx}
											active={isActive}
											chosed={selectedOptions.some(
												(el: any) => el === name.optionVariantId
											)}
											onClick={() =>
												onClickOption(name.id, name.optionVariantId)
											}>
											<Text
												color={
													selectedOptions.some(
														(el: any) => el === name.optionVariantId
													)
														? colors.white
														: colors.black
												}
												size='14px'
												fontStyle={fonts.f500}>
												{name.name}
											</Text>
										</SizeContainer>
									);
							  })
							: null}
					</RowContainer>
				</div>
			))}
		</>
	);
};

export default OptionsProduct;

const Wrapper = styled.div``;
