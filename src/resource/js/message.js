//*******************************************************
//Importmaos los MESSAGE DE  FLASK
import { showMessage, hideMessage } from "react-native-flash-message";

//******************************************************************************
export const messageSuccess = (value) => {
    showMessage({
      message: value,
      type: "success",
    });
}

export const messageWarning = (value) => {
    showMessage({
      message: value,
      type: "warning",
    });
}

export const messageDanger = (value) => {
    showMessage({
      message: value,
      type: "danger",
    });
}