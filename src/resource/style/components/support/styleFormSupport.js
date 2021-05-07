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
    backgroundColor : 'white',
    padding: 10,
    borderRadius : 10
  },
  input_support : {
    width : "100%",
    height : DEVICE_HEIGHT * 0.05,
    marginVertical : 2,
    borderRadius : 15,
    fontSize : 15,
    fontFamily : 'Exo-Medium'
  },
  button_send_support : {
    borderRadius : 10,
    marginVertical : 5,
  },
  text_button_send_support : {
    color : 'white',
    fontFamily : 'Exo-Medium',
    textTransform: 'capitalize',
    padding: 3,
    fontSize : 14
  },
  title : {
    fontFamily : 'Exo-Bold',
    fontSize : 16,
    marginVertical : 10
  },
  subtitle : {
    fontFamily : 'Exo-Regular',
    fontSize : 15,
    marginVertical : 5
  }
})
