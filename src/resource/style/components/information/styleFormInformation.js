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
    width : "100%",
    height : DEVICE_HEIGHT * 0.30,
    backgroundColor : 'transparent',
    padding: 5,
  },
  card_information : {
    width : "100%",
    height : "100%",
    backgroundColor : 'white',
    borderRadius : 20,
    padding: 10,
  },
  section_1 : {
    flexDirection : 'row',
    justifyContent : 'space-between'
  },
  section_2 : {

  },
  title_search : {
    fontSize : 16,
    marginHorizontal : 30,
    fontFamily : 'Exo-Bold' 
  }
  
})
