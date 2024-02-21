import CatalogScreen from "@/components/Screens/CatalogScreen/CatalogScreen";
import { PaddingWrapper } from "../../../theme/templates";
import { useRouter } from "next/router";
import { observer } from "mobx-react";
import axios from "axios";
import Error from "next/error";
import { colors } from "../../../theme/colors";
import NotFound from "@/components/Screens/CatalogScreen/components/NotFound";
import axiosInstance from "@/api/axiosInstance";
import { GetServerSideProps } from "next";

const groupOptions = (options: any) => {
  return options.reduce((acc: any, option: any) => {
    const existingOption = acc.find(
      (item: any) => item.optionName === option.optionName
    );

    if (existingOption) {
      existingOption.name.push({
        optionVariantId: option.optionVariantId,
        name: option.name,
      });
    } else {
      acc.push({
        optionName: option.optionName,
        name: [{ optionVariantId: option.optionVariantId, name: option.name }],
      });
    }

    return acc;
  }, []);
};

const Page = ({ data, options, totalPages }: any) => {
  const router = useRouter();

  return (
    <>
      <PaddingWrapper style={{ backgroundColor: colors.grayBg }}>
        <CatalogScreen
          showError={true}
          catalogId={router.query.id!}
          catalogData={data}
          options={options}
          totalPages={totalPages}
        />
      </PaddingWrapper>
    </>
  );
};

export default observer(Page);

export const getServerSideProps: GetServerSideProps = async (context) => {
  const filtersVariantIds = context.query.filter
    ? (context.query.filter as string).split(",").map(Number)
    : [];
  const page = context.query.page || 1;
  try {
    const requestBody = {
      querry: context.query.searchparam || "",
      storageId: 1,
      page: page,
      pageSize: 15,
      filtersVariantIds: filtersVariantIds,
      sortingSettings: [],
    };

    const searchResponse = await axiosInstance.post(
      "/public/search?query=dasd",
      requestBody
    );
    const searchData = searchResponse.data;
    const options = groupOptions(
      searchData.products.flatMap((el: any) => el.productOptions)
    );
    const totalPages = searchData.totalPages;

    return {
      props: {
        options,
        totalPages,
        data: searchData.products,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        error: "Error fetching data",
      },
    };
  }
};
