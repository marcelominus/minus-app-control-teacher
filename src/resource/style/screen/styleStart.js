//*******************************************************
//
import React from 'react';
//*******************************************************
//
import EStyleSheet from 'react-native-extended-stylesheet';
import styleDefault from '../global/styleDefault';
//*******************************************************
//Importamos las DIMENSIONES de APP
import {DEVICE_HEIGHT, DEVICE_WIDTH} from '../../js/devicemovil';
// =====================================================
// INICIO DE COMPONENTE}
// =====================================================
export const styles =  EStyleSheet.create({
  container : {
    width : DEVICE_WIDTH,
    height : DEVICE_HEIGHT,
    backgroundColor : '#D9D9D9'
  },
  //
  section_1 : {
    width : DEVICE_WIDTH,
    height : DEVICE_HEIGHT * 0.25,
    backgroundColor : '#D9D9D9',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  image_cover : {
    width : DEVICE_WIDTH,
    height : DEVICE_HEIGHT * 0.25,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  //
  section_2 : {
    width : DEVICE_WIDTH,
    height : DEVICE_HEIGHT * 0.75,
    justifyContent : 'center', 
    alignItems : 'center'
  },
  button_welcome : {
    backgroundColor : '#3C6E71',
    width : DEVICE_WIDTH * 0.8,
    padding:  10,
    borderRadius : 20,
    margin : 20
  },
  text_button_welcome:{
      color : 'white'
  },
  image_logo : {
    width : DEVICE_WIDTH * 0.25,
    height : DEVICE_WIDTH * 0.3,
    borderRadius : 10
  }
})
