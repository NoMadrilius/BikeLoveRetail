import CatalogScreen from "@/Screens/CatalogScreen/CatalogScreen";
import { PaddingWrapper } from "../../../theme/templates";
import { useCategoriesStore } from "@/store/CategoriesStore";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();

  return (
    <>
      <PaddingWrapper>
        <CatalogScreen catalogId={router.query.id!} />
      </PaddingWrapper>
    </>
  );
};

export default Page;
