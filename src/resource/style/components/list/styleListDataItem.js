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
  list_card : {
    backgroundColor : 'white', 
    borderStyle : 'solid', 
    borderColor : 'black', 
    borderWidth : 0.3, 
    fontSize : 15, 
    color : 'red'
  },
  title_list : {
    fontSize : 14,
    fontFamily : 'Exo-Medium'
  },
  title_description : {
    fontSize : 13,
    fontFamily : 'Exo-Medium'
  }
  
})
