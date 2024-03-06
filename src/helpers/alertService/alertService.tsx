import { toast } from "react-toastify";
import ToastMessage from "./ToastMessage";
import {ToastMessageProps} from "@/dataTransferObjects/internal/ToastMessageProps";

export const showToast = (props: ToastMessageProps) => {
  toast(<ToastMessage {...props} />);
};
