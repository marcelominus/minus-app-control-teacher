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
export const styles = EStyleSheet.create({
  container : {
    width : DEVICE_WIDTH,
    height : DEVICE_HEIGHT,
    backgroundColor : 'white'
  },
  section_1 : {
    backgroundColor : '#354F52',
    width : DEVICE_WIDTH,
    height : DEVICE_HEIGHT *0.08,
  },
  section_2 : {
    backgroundColor : '#CAD2C5',
    width : DEVICE_WIDTH,
    height : DEVICE_HEIGHT *0.5,
    
  },
  section_3 : {
    backgroundColor : '#CAD2C5',
    width : DEVICE_WIDTH,
    height : DEVICE_HEIGHT *0.37,
  },
  section_4 : {
    backgroundColor : '#354F52',
    width : DEVICE_WIDTH,
    height : DEVICE_HEIGHT *0.05,
    justifyContent : 'center',
    alignItems : 'center'
  },
  footer: {
    color : '#fff',
    fontFamily : 'Exo-Regular',
    fontSize : 12
  }
})
