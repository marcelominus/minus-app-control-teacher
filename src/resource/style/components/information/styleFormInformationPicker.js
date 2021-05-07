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
  button_picker : {
    borderRadius : 10,
    marginVertical : 5,
  },
  text_button_picker : {
    color : 'white',
    fontFamily : 'Exo-Medium',
    textTransform: 'capitalize',
    padding: 3,
    fontSize : 14
  },
  badge_picker : {
    width : '100%',
    backgroundColor : 'white',
    marginVertical : 5,
    padding: 5,
    borderRadius : 10,
    alignItems : 'center',
    borderStyle : 'solid',
    borderWidth : 2,
    borderColor : 'green',
  },
  text_badge_picker : {
    color : 'green',
    fontSize : 14,
    fontFamily : 'Exo-Medium'
  },
})
