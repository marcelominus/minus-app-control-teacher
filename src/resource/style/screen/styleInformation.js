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
export const styles =EStyleSheet.create({
  container : {
    width : DEVICE_WIDTH,
    height : DEVICE_HEIGHT,
    backgroundColor : '#CAD2C5'

  },
  //******************************************************************************
  section_1 : {
    width : DEVICE_WIDTH,
    height : DEVICE_HEIGHT * 0.08,
    backgroundColor : 'yellow'
  },
  //******************************************************************************
  section_2 : {
    width : DEVICE_WIDTH,
    height : DEVICE_HEIGHT * 0.87,
    backgroundColor : '#CAD2C5'
  },
  
  //******************************************************************************
  section_3 : {
    backgroundColor : '#354F52',
    width : DEVICE_WIDTH,
    height : DEVICE_HEIGHT * 0.05,
     alignItems : 'center',
    justifyContent : 'center',
  },
   footer: {
    color : '#fff',
    fontFamily : 'Exo-Regular',
    fontSize : 12
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },

})
