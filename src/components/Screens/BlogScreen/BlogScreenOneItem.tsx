import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import { Text } from "@/components/Text/Text";
import { UseMetaData } from "@/helpers/hooks/useMetaData";
import { newsData } from "@/mock/data";

import { styled } from "styled-components";
import { colors } from "../../../../theme/colors";
import { fonts } from "../../../../theme/fonts";
import { MainTitle, Paragraph } from "../HomeScreen/HomeScreenStyles";

const BlogScreenOneItem = ({ id }: any) => {
  const item = newsData.find((item) => item.id === +id);

  const road = [
    { title: "Велоблог", link: "/blog" },
    { title: item?.title || "Not Found", link: "" },
  ];

  return (
    <>
      <UseMetaData
        title={item?.title || "Not Found"}
        img={""}
        description={""}
      />
      <BreadCrumbs road={road} />

      <MainTitle
        $color={colors.black}
        $fontSize="40px"
        $fontStyle={fonts.f700}
        $margin="0 0 30px 0"
      >
        {item?.title}
      </MainTitle>
      <Text color={colors.grayMain} size="13px" fontStyle={fonts.f400}>
        {item?.date}
      </Text>

      <RowContainer>
        <Picture src={item?.image} />

        <Paragraph
          $color={colors.black}
          $fontSize="16px"
          $fontStyle={fonts.f400}
        >
          {item?.description}
        </Paragraph>
      </RowContainer>
      <div style={{ paddingBottom: "100px" }}></div>
    </>
  );
};
export default BlogScreenOneItem;
const RowContainer = styled.div`
  display: flex;
  column-gap: 30px;
  margin-top: 30px;
  & > * {
    flex: 1;
  }
`;
const Picture = styled.img`
  width: 100%;
  border-radius: 20px;
`;
