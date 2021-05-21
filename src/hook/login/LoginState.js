import React, { useReducer } from "react";
//***************************************************************** */
//Importamos AXIOS
import clienteAxios from "../../config/axios";
//***************************************************************** */
//Importamos los CONTEXT
import loginContext from "./loginContext";
import loginReducer from "./loginReducer";
//***************************************************************** */
//Importamos los TYPES
import { PETITION_LOGIN, PETITION_EXIT_LOGIN } from "../../utils/index";
//***************************************************************** */
//Importamos las direcciones de LOGIN
import { direccion_admin_login } from "../../resource/js/directions";

// =====================================================
// INICIO DE CLASE  */}
// =====================================================
const LoginState = (props) => {
  const initialState = {
      prueba : 'LENNY LAURA'
  };
  const [state, dispatch] = useReducer(loginReducer, initialState);

  //-----------------------------------------------------------------
  //ZONE FUNCTION
  const functionPetitionLogin = async (value_1, value_2) => {
    try {
      const url = direccion_admin_login;
      const petitionLogin = await clienteAxios.post(url, {
        user: value_1,
        pass: value_2,
      });
      const consultationPetitionLogin = petitionLogin.data;
      if (consultationPetitionLogin.response == "success") {
        dispatch({
          type: PETITION_LOGIN,
          payload: consultationPetitionLogin.data,
        });
        return consultationPetitionLogin.data;
      } else {
        return consultationPetitionLogin.response;
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const functionPetitionExit = async () => {
    dispatch({
      type: PETITION_EXIT_LOGIN,
    });
  };
  //=====================================================
  //INICIO DE COMPONENTE
  //=====================================================
  return (
    <loginContext.Provider
      value={{
        prueba: state.prueba,
        functionPetitionLogin,
        functionPetitionExit,
      }}
    >
      {props.children}
    </loginContext.Provider>
  );
};

export default LoginState;
