import { PETITION_LOGIN, PETITION_EXIT_LOGIN } from "../../utils/index";
//
import {storeData} from '../../resource/js/storearray';
import {storeDataString} from '../../resource/js/storestring';
//Zona de SWITCH
export default (state, action) => {
  switch (action.type) {
    case PETITION_LOGIN:
    //   localStorage.setItem("datauser", JSON.stringify(action.payload));
    //   localStorage.setItem("login", "active");
      storeData(action.payload, 'datauser');
      // storeDataString("", 'dataphoto');

      return {
        ...state,
      };
    // case PETITION_EXIT_LOGIN:
    //   localStorage.removeItem("datauser");
    //   localStorage.removeItem("login");
    //   return {
    //     ...state,
    //   };
    default:
      return state;
  }
};
