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
    borderBottomLeftRadius : 15,
    borderBottomRightRadius : 15,
  },
  section_1 : {
    width : '100%',
    flexDirection : 'row',
    padding: 10,
    justifyContent: 'center',
  },
  section_1_1 : {
      width : '40%',
      backgroundColor : '#DAD7CD',
  },
  image_card : {
    width : '100%',
    height : '100%',
    borderRadius : 10
  },
  section_1_2 : {
    width : '60%',
    backgroundColor : '#DAD7CD',
    justifyContent : 'center',
    alignItems : 'center',
    borderBottomRightRadius : 10,
    borderTopRightRadius : 10,
  },
  title_card_form : {
    fontSize : 16,
    fontFamily : 'Exo-Medium'
  },
  title_name : {
    fontSize : 13,
    fontFamily : 'Exo-Regular'
  }
  
})
