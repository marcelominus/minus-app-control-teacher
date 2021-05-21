import React, { useReducer } from "react";
//***************************************************************** */
//Importamos AXIOS
import clienteAxios from "../../config/axios";
//***************************************************************** */
//Importamos los CONTEXT
import inscriptionContext from "./inscriptionContext";
import inscriptionReducer from "./inscriptionReducer";
//***************************************************************** */
//Importamos los TYPES
// import { PETITION_LOGIN, PETITION_EXIT_LOGIN } from "../../utils/index";
//***************************************************************** */
//Importamos las direcciones de LOGIN
import { direccion_admin_inscription } from "../../resource/js/directions";

// =====================================================
// INICIO DE CLASE  */}
// =====================================================
const InscriptionState = (props) => {
  const initialState = {
  };
  const [state, dispatch] = useReducer(inscriptionReducer, initialState);

  //-----------------------------------------------------------------
  //ZONE FUNCTION
  //******************************************************************************
  const functionReadInscription = async (value_1) => {
    try {
      const url = direccion_admin_inscription;
      const petitionReadInscription = await clienteAxios.post(url, {
        identifieruse: value_1,
      });
      const solutionPetitionRead = petitionReadInscription.data;
      if (solutionPetitionRead.response == "empty") {
        return false;
      } else {
        return solutionPetitionRead.data;
      }
    } catch (error) {
      console.log(error);
    }
  };
  //=====================================================
  //INICIO DE COMPONENTE
  //=====================================================
  return (
    <inscriptionContext.Provider
      value={{
        functionReadInscription
      }}
    >
      {props.children}
    </inscriptionContext.Provider>
  );
};

export default InscriptionState;
