import React, { useReducer } from "react";
//***************************************************************** */
//Importamos AXIOS
import clienteAxios from "../../config/axios";
//***************************************************************** */
//Importamos los CONTEXT
import informationContext from "./informationContext";
import informationReducer from "./informationReducer";
//***************************************************************** */
//Importamos los TYPES
import { PETITION_DISABLE_CARD, PETITION_ARRAY_INFORMATION, PETITION_BACK } from "../../utils/index";
//***************************************************************** */
//Importamos las direcciones de LOGIN
import { direccion_admin_read_select, direccion_admin_read_picker } from "../../resource/js/directions";

// =====================================================
// INICIO DE CLASE  */}
// =====================================================
const InformationState = (props) => {
  const initialState = {
      disable : false,
      arrayinformation : [{
        directionimgdat : '',
        datadat : '',
        timestartdat : '',
        timeenddat : ''
      }],
      back : false
  };
  const [state, dispatch] = useReducer(informationReducer, initialState);

  //-----------------------------------------------------------------
  //ZONE FUNCTION
  const functionDisableCard = async(value) => {
    dispatch({
      type : PETITION_DISABLE_CARD,
      payload : value
    })
  }

  const functionReadSelect = async (value_1, value_2, value_3, value_4) => {
    try {
      const url = direccion_admin_read_select;
      const petitionReadSelect = await clienteAxios.post(url, {
        identifieruse: value_1,
        identifierins : value_2,
        year : value_3,
        mounth : value_4,
      });
      const solutionPetitionRead = petitionReadSelect.data;
      if (solutionPetitionRead.response == "empty") {
        return false;
      } else {
        return solutionPetitionRead.data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const functionArrayInformation = async(value) => {
    dispatch({
      type : PETITION_ARRAY_INFORMATION,
      payload : value
    })
  }

  const functionReadPicker = async (value_1, value_2, value_3, value_4, value_5) => {
    try {
      const url = direccion_admin_read_picker;
      const petitionReadPicker = await clienteAxios.post(url, {
        identifieruse: value_1,
        identifierins : value_2,
        year : value_3,
        mounth : value_4,
        day : value_5
      });
      const solutionPetitionRead = petitionReadPicker.data;
      if (solutionPetitionRead.response == "empty") {
        return false;
      } else {
        return solutionPetitionRead.data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const functionBack = (value) => {
    dispatch({
      type : PETITION_BACK,
      payload : value
    })
  }
  //=====================================================
  //INICIO DE COMPONENTE
  //=====================================================
  return (
    <informationContext.Provider
      value={{
        disable : state.disable,
        arrayinformation : state.arrayinformation,
        back : state.back,
        functionDisableCard,
        functionReadSelect,
        functionArrayInformation,
        functionReadPicker,
        functionBack
      }}
    >
      {props.children}
    </informationContext.Provider>
  );
};

export default InformationState;
