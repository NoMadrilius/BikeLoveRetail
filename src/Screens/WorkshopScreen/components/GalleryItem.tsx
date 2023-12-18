import { Text } from "@/components/Text/Text";
import { FC } from "react";
import { styled } from "styled-components";
import { fonts } from "../../../../theme/fonts";
import { colors } from "../../../../theme/colors";
import { templates } from "../../../../theme/templates";

type Props = {
  image: string;
  text: string;
  variant: "small" | "large";
};

const GalleryItem: FC<Props> = ({ image, text, variant }) => {
  return (
    <>
      <Wrapper bg={image} variant={variant}>
        <HelpText variant={variant}>
          <Text color={colors.white} size="22px" fontStyle={fonts.f600}>
            {text}
          </Text>
        </HelpText>
      </Wrapper>
    </>
  );
};
export default GalleryItem;

const Wrapper = styled.div<{ bg: string; variant: string }>`
  position: relative;
  width: ${(p) => (p.variant === "small" ? "315px" : "660px")};
  height: ${(p) => (p.variant === "small" ? "335px" : "438px")};
  background-image: url(${(p) => p.bg});
`;
const HelpText = styled.div<{ variant: string }>`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: ${(p) => (p.variant === "small" ? "77px" : "96px")};
  background-color: rgba(0, 0, 0, 0.54);
  ${templates.centerContent};
  user-select: none;
`;
