import Image from "next/image";
import { styled } from "styled-components";
import { metrics } from "../../../../theme/metrics";

export const Res1Container = styled.div<{ $hideOnDesktop?: boolean }>`
  background-color: rgba(17, 17, 17, 1);
  display: flex;
  align-items: center;

  flex-direction: column;

  @media (max-width: ${metrics.desktop}) {
  }
  @media (max-width: 1130px) {
    display: ${(props) => (props.$hideOnDesktop ? "none" : "flex")};
  }
  @media (max-width: ${metrics.mobile}) {
    /* padding: 47px 20px; */
  }
`;

export const SocialContainer = styled.div<{
  $hideOnDesktop?: boolean;
  $showOnMobile?: boolean;
}>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  max-width: 200px;
  gap: 10px;
  @media (max-width: 1130px) {
    max-width: 100px;
    margin-top: 39px;
  }
  @media (min-width: 1130px) {
    display: ${(props) => (props.$hideOnDesktop ? "none" : "flex")};
  }
  @media (min-width: 768px) {
    display: ${(props) => (props.$showOnMobile ? "none" : "flex")};
  }
  @media (max-width: 730px) {
    display: ${(props) => (props.$hideOnDesktop ? "none" : "flex")};
  }

  > Image {
    margin: 0;
  }
`;

export const Wrapper = styled.div`
  width: 100%;

  align-items: center;
  background-color: rgba(17, 17, 17, 1);
  display: flex;
  justify-content: space-between;

  padding: 47px 67px;
  @media (max-width: 1130px) {
  }

  @media (max-width: 768px) {
    align-items: normal;
  }

  @media (max-width: ${metrics.mobile}) {
    padding: 16px;
    gap: 24px;
  }
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 10px;
`;

export const Logo = styled(Image)<{ $hideOnDesktop?: boolean }>`
  flex-shrink: 0;
  cursor: pointer;
  @media (max-width: ${metrics.mobile}) {
    width: 64px;
  }

  @media (max-width: ${metrics.mobile}) {
  }

  @media (max-width: 768px) {
    display: ${(props) => (props.$hideOnDesktop ? "none" : "flex")};
  }
`;

export const InfoAndWorkingHoursContainer = styled.div`
  display: flex;
  flex-grow: 1;
  width: 100%;
  justify-content: space-around;
  @media (max-width: 768px) {
    flex-direction: column;
    flex-grow: 0;
    width: auto;
    gap: 16px;
    /* justify-content: center; */
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const PhoneNumber = styled.p`
  color: white;
  font-weight: 600;
  font-size: 24px;
  line-height: 32.04px;
  letter-spacing: 0.96px;
  text-align: center;
  margin-bottom: 8px;
  @media (max-width: 1130px) {
    font-size: 16px;
  }
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Email = styled(PhoneNumber)`
  @media (max-width: 768px) {
    max-width: 153px;
    /* word-wrap: break-word; */
    font-size: clamp(0.7rem, 1.5vw, 3.4vw);
  }
`;

export const ImageContainer = styled.div`
  width: 138px;
  height: 34px;
  position: relative;
`;
