import BlurWrapper from "@/components/BlurWrapper/BlurWrapper";
import { FC } from "react";
import { css, keyframes, styled } from "styled-components";
import { colors } from "../../../../../theme/colors";
import { Text } from "@/components/Text/Text";
import { fonts } from "../../../../../theme/fonts";
import BlockWithFrame from "@/components/Screens/ContactsScreen/components/BlockWithFrame";
import Image from "next/image";
import useShopData from "@/helpers/hooks/useShopData";
import Map from "./Map";

type Props = {
  setVisible: any;
};

const SideBar = ({ setVisible }: Props) => {
  const [shopData, loading, error] = useShopData();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <BlurWrapper onClick={()=>{setVisible(false)}}>
      <Wrapper
        onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      >
        <Icon
          width={18}
          height={18}
          alt="Close Cross"
          src="/icons/closeCross.svg"
          onClick={() => setVisible(false)}
        />
        <Text
          color={colors.black}
          size="26px"
          fontStyle={fonts.f600}
          margin="0 0 40px 0"
        >
          НАЛИЧИЕ В МАГАЗИНАХ
        </Text>
        {/* <Text
          color={colors.black}
          size="16px"
          fontStyle={fonts.f400}
          margin="0 0 40px 0"
        >
          Ваш город
        </Text> */}
        <AvailabilityContainer>
          {shopData &&
            shopData.map((shop) => (
              <BlockWithFrame key={shop.id} shopData={shop} sidebar />
            ))}
        </AvailabilityContainer>
        <FrameWrapper2>
          <Map shopData={shopData} />
        </FrameWrapper2>
      </Wrapper>
    </BlurWrapper>
  );
};

export default SideBar;
const slideInAnimation = keyframes`
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0);
  }
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 670px;
  background-color: ${colors.white};
  height: 100vh;
  margin-left: auto;
  padding: 62px 15px;
  animation: ${slideInAnimation} 0.4s ease-out;
`;

const AvailabilityContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

const Icon = styled(Image)`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

const FrameWrapper2 = styled.div`
  width: 100%;
  height: auto;
  padding: 20px 0;
`;
