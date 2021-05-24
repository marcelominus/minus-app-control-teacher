import { PETITION_FORM_PHOTO, PETITION_FORM_RESET_PHOTO, PETITION_SAVE_DATE, PETITION_SAVE_TIME_START, PETITION_SAVE_DISABLE, PETITION_SAVE_SELECT, PETITION_RESET_DATA} from "../../utils/index";
//*******************************************************
//Importamos asyn storage
import {storeDataString} from '../../resource/js/storestring';
//******************************************************************************
//Zona de SWITCH
export default (state, action) => {
  switch (action.type) {
    case PETITION_FORM_PHOTO:
        storeDataString(action.payload, 'dataphoto');
        return{
            ...state
        }
    case PETITION_FORM_RESET_PHOTO:
      return{
          ...state,
          resetphoto : action.payload
      }
    case PETITION_SAVE_DATE:
        storeDataString(action.payload, 'datadate');
      return{
          ...state
      }
    case PETITION_SAVE_TIME_START:
        storeDataString(action.payload, 'datatimestart');
      return{
          ...state
      }
    case PETITION_SAVE_DISABLE:
      return{
          ...state,
          disable : action.payload
      }
    case PETITION_SAVE_SELECT:
      storeDataString(action.payload, 'dataselect');
      return{
        ...state,
      }
    case PETITION_RESET_DATA:
      storeDataString( "null" ,'dataphoto');
      storeDataString( "null" ,'dataselect');
      storeDataString( "null" ,'datadate');
      storeDataString( "null" ,'datatimestart');
      return {
        ...state,
        resetdata : action.payload
      }
    default:
      return state;
  }
};
