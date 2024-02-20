import { styled } from "styled-components";

export const Container = styled.div`
  background: rgb(205, 9, 9);
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 4px;
  color: white;
  position: absolute;
  z-index: 2;
  gap: 27px;
  top: 89px;
`;

export const Text = styled.p`
  color: rgb(255, 255, 255);

  font-size: 24px;
  font-weight: 600;
  line-height: 133.49%;
  letter-spacing: 4%;
`;

export const GetCodeButton = styled.button`
  border-radius: 5px;
  background: rgb(141, 238, 95);
  border: none;
  padding: 5px 12px 5px 12px;
  cursor: pointer;
  color: rgb(32, 32, 32);
  font-size: 15px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 4%;
  max-width: 197px;
  width: 100%;
`;

export const ConfirmButton = styled.button`
  border-radius: 5px;
  background: rgb(216, 216, 216);
  border: none;
  padding: 5px 12px 5px 12px;
  cursor: pointer;
  color: rgb(32, 32, 32);
  font-size: 15px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 4%;
  max-width: 146px;
  width: 100%;
`;

export const Input = styled.input`
  margin-right: 10px;
  width: 21px;
  border: 1px solid rgb(0, 0, 0);
  border-radius: 5px;
  display: flex;
  height: 100%;
  text-align: center;
  background: rgb(217, 217, 217);
`;

export const NumberInputContainer = styled.div`
  display: flex;
  height: auto;
`;
