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
import { PETITION_FORM_PHOTO, PETITION_FORM_RESET_PHOTO, PETITION_SAVE_DATE, PETITION_SAVE_TIME_START, PETITION_SAVE_DISABLE, PETITION_SAVE_SELECT, PETITION_RESET_DATA} from "../../utils/index";
//***************************************************************** */
//Importamos las direcciones de LOGIN
// import { direccion_admin_login } from "../../resource/js/directions";
import {direccion_admin_create_data} from '../../resource/js/directions';
// =====================================================
// INICIO DE CLASE  */}
// =====================================================
const FormState = (props) => {
  const initialState = {
    resetphoto : false,
    disable : false,
    resetdata : false,
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

  const functionSaveSelect = async(value) => {
    dispatch({
      type : PETITION_SAVE_SELECT,
      payload : value
    })
  }

  const functionCreateData= async (value_1, value_2, value_3, value_4, value_5, value_6) => {
    try {
      const url = direccion_admin_create_data;
      const petitionReadData = await clienteAxios.post(url, {
        identifieruse: value_1,
        identifierins : value_2,
        datadat : value_3,
        timestartdat : value_4,
        informationdat : value_5,
        imgdat : value_6
      });
      const solutionPetition = petitionReadData.data;
      if (solutionPetition.response == "success") {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const functionResetData = async(value) => {
    dispatch({
      type : PETITION_RESET_DATA,
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
        resetdata: state.resetdata,
        functionSavePhoto,
        functionResetPhoto,
        functionSaveDate,
        functionSaveTimeStart,
        functionSaveDisable,
        functionSaveSelect,
        functionCreateData,
        functionResetData
      }}
    >
      {props.children}
    </formContext.Provider>
  );
};

export default FormState;
