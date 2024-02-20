"use client";
import React, { useMemo } from "react";
import { ToastMessageProps } from "../../types/types";
import { styled } from "styled-components";
import "react-toastify/dist/ReactToastify.css";
import { colors } from "../../../theme/colors";
import { Text } from "@/components/Text/Text";
import { fonts } from "../../../theme/fonts";
import SuccessToast from "./assets/successToast";
import WarnToast from "./assets/warnToast";
import AlertToast from "./assets/alertToast";

const ToastMessage: React.FC<ToastMessageProps> = ({ title, info, type }) => {
  const typeParams = useMemo(() => {
    switch (type) {
      case "success":
        return {
          icon: <SuccessToast fill={"green"} />,
          background: colors.green100,
        };
      case "error":
        return {
          icon: <AlertToast />,
          background: colors.red100,
        };
      case "warn":
        return {
          icon: <WarnToast />,
          background: colors.yellow,
        };
      default:
        return {
          icon: <WarnToast />,
          background: colors.gold,
        };
    }
  }, [type]);

  return (
    <Wrapper>
      <Icon>{typeParams.icon}</Icon>
      <TextCol>
        <Text size="21px" color={typeParams.background} fontStyle={fonts.f600}>
          {title}
        </Text>
        {info && (
          <Text size="16px" color={colors.grayMain} fontStyle={fonts.f500}>
            {info}
          </Text>
        )}
      </TextCol>
    </Wrapper>
  );
};

export default ToastMessage;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Icon = styled.div`
  width: 30px;
  height: 30px;
  margin-right: 20px;
`;
const TextCol = styled.div`
  display: flex;
  flex-direction: column;
`;
