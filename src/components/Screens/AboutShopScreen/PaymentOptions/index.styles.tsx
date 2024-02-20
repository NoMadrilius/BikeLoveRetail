import styled from "styled-components";

export const PaymentSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Title = styled.h2`
  color: rgb(0, 0, 0);
  font-size: 40px;
  font-weight: bold;
  margin: 10px 0;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ListItem = styled.li`
  color: rgb(0, 0, 0);
  display: flex;
  font-size: 20px;
  margin: 5px 0;
  gap: 10px;
`;

export const Text = styled.span`
  margin-top: 24px;
  color: black;
`;

export const PaymentLogos = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 20px;
  flex-grow: 1;

  position: relative;
  max-width: 547px;
  width: 100%;
  height: 314px;
`;

export const ContentSection = styled.div`
  flex-grow: 1;
`;

export const Note = styled.p`
  font-size: 16px;
  color: black;
  margin-bottom: 16px;
`;

export const Point = styled.span`
  font-weight: 700;
  font-size: 40px;
`;
