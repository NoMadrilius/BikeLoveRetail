"use client";
import React, { useMemo } from "react";
import { styled } from "styled-components";
import "react-toastify/dist/ReactToastify.css";
import { colors } from "../../../theme/colors";
import { fonts } from "../../../theme/fonts";
import SuccessToast from "./assets/successToast";
import WarnToast from "./assets/warnToast";
import AlertToast from "./assets/alertToast";
import {ToastMessageProps} from "@/dataTransferObjects/internal/ToastMessageProps";

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
        <div className={"text-xl font-bold bg-["+typeParams.background+"]"}>
          {title}
        </div>
        {info && (
          <div className={"text-xl font-bold bg-["+typeParams.background+"]"}>
            {info}
          </div>
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
