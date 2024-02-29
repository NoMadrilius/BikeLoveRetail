import BlogScreenOneItem from "@/components/Screens/BlogScreen/BlogScreenOneItem";
import { useRouter } from "next/router";
import { PaddingWrapper } from "../../../theme/templates";

const OneItem = () => {
  const router = useRouter();
  return (
    <PaddingWrapper>
      <BlogScreenOneItem id={router.query.id} />
    </PaddingWrapper>
  );
};
export default OneItem;
