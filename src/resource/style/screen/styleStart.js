//*******************************************************
//
import React from 'react';
//*******************************************************
//
import EStyleSheet from 'react-native-extended-stylesheet';
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
    backgroundColor : '#CAD2C5'
  },
  //-------------------------------------------------------
  //
  section_1 : {
    width : DEVICE_WIDTH,
    height : DEVICE_HEIGHT * 0.25,
    backgroundColor : '#CAD2C5',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  image_cover : {
    width : DEVICE_WIDTH,
    height : DEVICE_HEIGHT * 0.25,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  //-------------------------------------------------------
  //
  section_2 : {
    width : DEVICE_WIDTH,
    height : DEVICE_HEIGHT * 0.70,
    justifyContent : 'center', 
    alignItems : 'center'
  },
  button_welcome : {
    width : DEVICE_WIDTH * 0.9,
    borderRadius : 10,
    padding: 3,
  },
  text_button_welcome:{
    color : 'white',
    fontFamily : 'Exo-Medium',
    textTransform: 'capitalize',
    fontSize : 15
  },
  image_logo : {
    width : DEVICE_WIDTH * 0.25,
    height : DEVICE_WIDTH * 0.3,
    borderRadius : 10
  },
  text_welcome : {
    fontSize : 20,
    fontFamily : 'Exo-Medium',
    color : 'black',
    marginVertical : 10 
  },
  //-------------------------------------------------------
  //
  section_3 : {
    width : DEVICE_WIDTH,
    height : DEVICE_HEIGHT * 0.05,
    backgroundColor : '#354F52',
    alignItems : 'center',
    justifyContent : 'center',
  },
  footer: {
    color : '#fff',
    fontFamily : 'Exo-Regular',
    fontSize : 12
  }

})
