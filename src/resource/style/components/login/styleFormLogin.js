//*******************************************************
//
import React from 'react';
//*******************************************************
//
import EStyleSheet from 'react-native-extended-stylesheet';
//
import {DEVICE_WIDTH, DEVICE_HEIGHT} from '../../../js/devicemovil'
// =====================================================
// INICIO DE COMPONENTE}
// =====================================================
export const styles = EStyleSheet.create({
  container : {
    width : '100%',
    height : '100%',
    justifyContent : 'center', 
    alignItems : 'center',
  },
  
  title_login:{
    fontFamily : 'Exo-Medium',
    fontSize : 17,
    marginVertical : 5
  },

  container_card_login : {
      width : DEVICE_WIDTH * 0.95,
      backgroundColor : 'white',
      justifyContent : 'center',
      alignItems : 'center',
      padding: 10,
      borderRadius : 10
  },

  input_user : {
    width : DEVICE_WIDTH *0.9,
    height : DEVICE_HEIGHT * 0.05,
    marginVertical : 2,
    borderRadius : 15,
    fontSize : 15,
    fontFamily : 'Exo-Medium'
  },

  button_login : {
    width : DEVICE_WIDTH * 0.9,
    borderRadius : 10,
    marginVertical : 10,
  },

  text_button_login:{
    color : 'white',
    fontFamily : 'Exo-Medium',
    textTransform: 'capitalize',
    padding: 3,
    fontSize : 14
  },

  label : {
    width : '100%',
    textAlign : 'left',
    fontSize : 12,
    marginTop : 10
  },
  container_check : {
    width : '100%', 
    flexDirection : 'row', 
    alignItems : 'center', 
    justifyContent : 'flex-end'
  },
  text_check : {
    fontSize : 12,
  }

})
