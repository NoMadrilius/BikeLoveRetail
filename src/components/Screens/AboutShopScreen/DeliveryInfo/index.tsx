import React from "react";
import styled from "styled-components";

const DeliveryInfoContainer = styled.section``;

const Title = styled.h2`
  color: rgb(16, 17, 18);
  font-size: 31px;
  font-weight: 600;
  line-height: 133.49%;
  letter-spacing: 4%;
  margin-bottom: 32px;
`;

const Description = styled.div`
  font-size: 14px;
  margin-bottom: 4px;
`;

const InnerTitle = styled.h3`
  color: rgb(16, 17, 18);
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.8px;
  margin-bottom: 48px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const InfoContainer = styled.div`
  /* border: 1px dashed #aeaeae; */
`;

const DeliveryInfo = ({
  title,
  children,
  innerTitle,
}: {
  title: string;
  children: React.ReactNode;
  innerTitle?: string;
}) => {
  return (
    <DeliveryInfoContainer>
      {title.length > 0 ? <Title>{title}</Title> : null}
      <InfoContainer>
        {innerTitle ? <InnerTitle>{innerTitle}</InnerTitle> : null}
        <Description>{children}</Description>
      </InfoContainer>
    </DeliveryInfoContainer>
  );
};

export default DeliveryInfo;
