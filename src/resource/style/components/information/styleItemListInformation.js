//*******************************************************
//
import React from 'react';
//*******************************************************
//
import EStyleSheet from 'react-native-extended-stylesheet';
//
import {DEVICE_WIDTH, DEVICE_HEIGHT} from '../../../js/devicemovil';


// =====================================================
// INICIO DE COMPONENTE}
// =====================================================
export const styles = EStyleSheet.create({
  container : {
    width : "100%",
    height : DEVICE_HEIGHT * 0.35,
    marginVertical : 5,
    flexDirection : 'row'
  },
  section_1 : {
    width : '40%',
    backgroundColor : '#DAD7CD'
  },
  section_2 : {
    width : '60%',
    backgroundColor : '#DAD7CD',
    borderBottomRightRadius : 10,
    borderTopRightRadius : 10,
    justifyContent : 'center',
    padding:  5,
  },
  image_button : {
    width : '100%', 
    height : '100%',
    borderRadius : 10
  },
  title_information : {
    fontSize : 16,
    fontFamily : 'Exo-Bold'
  },
  title_subtitle : {
    fontSize : 14,
    fontFamily : 'Exo-Medium'
  },
  title_data : {
    fontSize : 13,
    fontFamily : 'Exo-Regular'
  }
  
})
