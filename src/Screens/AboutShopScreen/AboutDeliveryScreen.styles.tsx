import { styled } from "styled-components";

export const RowContainer = styled.div`
  display: flex;
  column-gap: 30px;
  margin-top: 50px;
  margin-bottom: 80px;
  justify-content: center;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    row-gap: 30px;
    margin-bottom: 45px;
  }
`;
export const Picture = styled.div<{ bg: string }>`
  max-width: 660px;
  width: 100%;
  height: 323px;
  background-image: url(${(p) => p.bg});
  background-size: cover;
  background-position: center;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  row-gap: 43px;
  padding: 0 0;
  background-color: rgba(54, 57, 36, 1);
  @media (max-width: 1000px) {
    padding: 0 40px;
  }
  @media (max-width: 900px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    padding: 0 21px;
    max-width: 100%;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 29px;
  align-items: center;
  width: 600px;
  margin: 0 auto;
  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const PictureLarge = styled.div<{ bg: string }>`
  width: 100%;
  height: 370px;
  position: relative;
  background-image: url(${(p) => p.bg});
  margin-bottom: 100px;
  background-position: center;
  background-size: cover;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding: 0 50px;
  row-gap: 20px;
  /* margin-top: 84px; */

  @media (max-width: 900px) {
    margin-bottom: 85px;
    padding: 0 37px;
    height: 295px;
  }
  @media (max-width: 700px) {
    margin-top: 40px;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5); /* Полупрозрачный черный цвет */
      border-radius: 24px;
    }
  }
`;

export const TextInfo = styled.h3<{ $bottomSpace?: boolean }>`
  color: rgb(16, 17, 18);
  font-size: 16px;
  font-weight: 400;

  letter-spacing: 0.8px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  list-style-position: outside;
  margin-bottom: ${(props) => (props.$bottomSpace ? "24px" : "")};
`;

export const Ul = styled.ul``;

export const Li = styled.li<{ $showTextShadow: boolean }>`
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.8px;
  color: rgb(16, 17, 18);

  text-shadow: ${(props) =>
    props.$showTextShadow ? "0px 4px 4px rgba(0, 0, 0, 0.2)" : ""};
`;
