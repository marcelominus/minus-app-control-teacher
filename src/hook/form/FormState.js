import React, { useReducer } from "react";
//***************************************************************** */
//Importamos AXIOS
import clienteAxios from "../../config/axios";
//***************************************************************** */
//Importamos los CONTEXT
import formContext from "./formContext";
import formReducer from "./formReducer";
//***************************************************************** */
//Importamos los TYPES
import { PETITION_FORM_PHOTO, PETITION_FORM_RESET_PHOTO, PETITION_SAVE_DATE, PETITION_SAVE_TIME_START, PETITION_SAVE_DISABLE} from "../../utils/index";
//***************************************************************** */
//Importamos las direcciones de LOGIN
// import { direccion_admin_login } from "../../resource/js/directions";

// =====================================================
// INICIO DE CLASE  */}
// =====================================================
const FormState = (props) => {
  const initialState = {
    resetphoto : false,
    disable : false
  };
  const [state, dispatch] = useReducer(formReducer, initialState);

  //-----------------------------------------------------------------
  //ZONE FUNCTION

  const functionSavePhoto = async (value) => {
    dispatch({
      type: PETITION_FORM_PHOTO,
      payload : value
    });
  };

  const functionResetPhoto = async (value) => {
    dispatch({
      type: PETITION_FORM_RESET_PHOTO,
      payload : value
    });
  };

  const functionSaveDate = async(value) => {
    dispatch({
      type : PETITION_SAVE_DATE,
      payload : value
    })
  }

  const functionSaveTimeStart = async(value) => {
    dispatch({
      type : PETITION_SAVE_TIME_START,
      payload : value
    })
  }

  const functionSaveDisable = async(value) => {
    dispatch({
      type : PETITION_SAVE_DISABLE,
      payload : value
    })
  }

  //=====================================================
  //INICIO DE COMPONENTE
  //=====================================================
  return (
    <formContext.Provider
      value={{
        resetphoto : state.resetphoto,
        disable : state.disable,
        functionSavePhoto,
        functionResetPhoto,
        functionSaveDate,
        functionSaveTimeStart,
        functionSaveDisable,
      }}
    >
      {props.children}
    </formContext.Provider>
  );
};

export default FormState;
