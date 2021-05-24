import {  PETITION_RESET_USER } from "../../utils/index";
import {storeData,removeData } from '../../resource/js/storearray';
//
//Zona de SWITCH
export default (state, action) => {
    switch (action.type) {
      case PETITION_RESET_USER:
        removeData("datauser");
        return{
            ...state
        }
      default:
        return state;
    }
  };
  