import { Text } from "@/components/Text/Text";
import { FC, useEffect } from "react";
import { styled } from "styled-components";
import { colors } from "../../../../../theme/colors";
import { fonts } from "../../../../../theme/fonts";
import { RowContainer, SizeContainer } from "../ProductScreenStyles";
import { useRouter } from "next/router";

type Props = {
  options: any;
  productData: any;
  prepareOptions: any;
  selectedOptionsId: any;
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

  const onClickOption = (id: any, optionId: any, arrayToDelete: any) => {
    const deleteId = arrayToDelete.filter((num: any) => num !== optionId);

    const containsSelectedId = id.some((singleId: any) =>
      selectedOptionsId.includes(singleId)
    );

    if (!containsSelectedId) {
      setSelectedOptions([]);
    }

    setSelectedOptionsId(id);

    setSelectedOptions((prev: any) => {
      const updatedOptions = prev.filter(
        (item: any) => !deleteId.includes(item)
      );
      return updatedOptions.includes(optionId)
        ? updatedOptions
        : [...updatedOptions, optionId];
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
  const findNameByOptionVariantId = (data: any, optionVariantId: any) => {
    for (const item of data) {
      const foundName = item.name.find(
        (name: any) => name.optionVariantId === optionVariantId
      );
      if (foundName) {
        return foundName;
      }
    }
    return null; // Если не найдено подходящего объекта
  };
  useEffect(() => {
    const optionsFromUrl = router.query.options;

    if (optionsFromUrl) {
      const optionsArray = optionsFromUrl
        //@ts-ignore
        .split(",")
        .map((option: string) => parseInt(option, 10));
      setSelectedOptionsId(
        findNameByOptionVariantId(options, optionsArray[0]).id
      );

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
              size="15px"
              fontStyle={fonts.f400}
              margin="35px 0 22px 0"
            >
              {el.optionName}
            </Text>
          )}
          <RowContainer style={{ gap: "8px", width: "60%", flexWrap: "wrap" }}>
            {el.name.length > 1
              ? el.name.map((name: any, idx: number) => {
                  // Проверка наличия элемента в prepareOptions
                  const isActive = prepareOptions.some((option: any) =>
                    option.names.some(
                      (optionName: any) =>
                        optionName.optionVariantId === name.optionVariantId
                    )
                  );

                  return (
                    <SizeContainer
                      key={idx}
                      active={isActive} //
                      chosed={selectedOptions.some(
                        (el: any) => el === name.optionVariantId
                      )}
                      onClick={() =>
                        onClickOption(
                          name.id,
                          name.optionVariantId,
                          el.name.map((el: any) => el.optionVariantId)
                        )
                      }
                    >
                      <Text
                        color={
                          selectedOptions.some(
                            (el: any) => el === name.optionVariantId
                          )
                            ? colors.white
                            : colors.black
                        }
                        size="14px"
                        fontStyle={fonts.f500}
                      >
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
