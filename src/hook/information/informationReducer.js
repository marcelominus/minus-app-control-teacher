import { PETITION_DISABLE_CARD, PETITION_ARRAY_INFORMATION, PETITION_BACK } from "../../utils/index";

//Zona de SWITCH
export default (state, action) => {
  switch (action.type) {
    case PETITION_DISABLE_CARD:
      return{
          ...state,
          disable : action.payload
      }
    case PETITION_ARRAY_INFORMATION:
      return{
          ...state,
          arrayinformation : action.payload
      }
    case PETITION_BACK:
      return{
          ...state,
          back : action.payload
      }
    default:
      return state;
  }
};
