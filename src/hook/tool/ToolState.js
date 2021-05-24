import React, { useReducer } from "react";
//***************************************************************** */
//Importamos AXIOS
import clienteAxios from "../../config/axios";
//***************************************************************** */
//Importamos los CONTEXT
import toolContext from "./toolContext";
import toolReducer from "./toolReducer";
//***************************************************************** */
//Importamos los TYPES
import {  PETITION_RESET_USER } from "../../utils/index";
//***************************************************************** */
//Importamos las direcciones de LOGIN

// =====================================================
// INICIO DE CLASE  */}
// =====================================================
const ToolState = (props) => {
  const initialState = {
  };
  const [state, dispatch] = useReducer(toolReducer, initialState);

  //-----------------------------------------------------------------
  //ZONE FUNCTION
  const functionResetUser= async () => {
    dispatch({
        type : PETITION_RESET_USER
    })
  };
  //=====================================================
  //INICIO DE COMPONENTE
  //=====================================================
  return (
    <toolContext.Provider
      value={{
        functionResetUser
      }}
    >
      {props.children}
    </toolContext.Provider>
  );
};

export default ToolState;
