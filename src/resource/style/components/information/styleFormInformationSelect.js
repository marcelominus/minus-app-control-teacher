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
  //
  container_select_unique : {
    borderRadius : 10,
    borderColor : 'black',
    borderStyle : 'solid',
    borderWidth : 1,
    marginVertical : 5
  },
  picker_select : {
    height : DEVICE_HEIGHT * 0.05,
    fontSize : 11
  },
  //
  button_select : {
    borderRadius : 10,
    marginVertical : 5,
  },
  text_button_select : {
    color : 'white',
    fontFamily : 'Exo-Medium',
    textTransform: 'capitalize',
    padding: 3,
    fontSize : 14
  },
  
})
