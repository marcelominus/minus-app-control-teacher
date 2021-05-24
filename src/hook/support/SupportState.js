import React, { useReducer } from "react";
//***************************************************************** */
//Importamos AXIOS
import clienteAxios from "../../config/axios";
//***************************************************************** */
//Importamos los CONTEXT
import supportContext from "./supportContext";
import supportReducer from "./supportReducer";
//***************************************************************** */
//Importamos los TYPES
// import { PETITION_LOGIN, PETITION_EXIT_LOGIN } from "../../utils/index";
//***************************************************************** */
//Importamos las direcciones de LOGIN
import { direccion_admin_create_support } from "../../resource/js/directions";

// =====================================================
// INICIO DE CLASE  */}
// =====================================================
const SupportState = (props) => {
  const initialState = {
  };
  const [state, dispatch] = useReducer(supportReducer, initialState);

  //-----------------------------------------------------------------
  //ZONE FUNCTION
  const functionCreateSupport= async (value_1, value_2, value_3) => {
    try {
      const url = direccion_admin_create_support;
      const petitionCreateSupport = await clienteAxios.post(url, {
        identifieruse: value_1,
        emailsup : value_2,
        claimsup : value_3
      });
      const solutionPetition = petitionCreateSupport.data;
      if (solutionPetition.response == "success") {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
    }
  };
  //=====================================================
  //INICIO DE COMPONENTE
  //=====================================================
  return (
    <supportContext.Provider
      value={{
            functionCreateSupport
      }}
    >
      {props.children}
    </supportContext.Provider>
  );
};

export default SupportState;
