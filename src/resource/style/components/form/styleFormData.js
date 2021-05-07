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
    borderTopLeftRadius : 15,
    borderTopRightRadius : 15,
    borderBottomRightRadius : 15,
    marginTop : 10,
    padding: 10,
  },
  text_title : {
    fontSize : 15,
    fontFamily : 'Exo-Bold'
  },
  //
  image_form : {
    width : DEVICE_WIDTH,
    height : DEVICE_HEIGHT * 0.35
  },
  //
  badge : {
    width : '40%',
    backgroundColor : 'white',
    marginVertical : 10,
    padding: 5,
    borderRadius : 10,
    alignItems : 'center',
    borderStyle : 'solid',
    borderWidth : 2,
    borderColor : 'red'
  },
  text_badge : {
      color : 'red',
      fontSize : 14,
      fontFamily : 'Exo-Regular'
  },

  badge_success : {
    width : '70%',
    backgroundColor : 'white',
    marginVertical : 10,
    padding: 5,
    borderRadius : 10,
    alignItems : 'center',
    borderStyle : 'solid',
    borderWidth : 2,
    borderColor : 'green',
  },
  text_badge_success : {
      color : 'green',
      fontSize : 13
  },

  //
  container_select : {
    borderRadius : 10,
    borderColor : 'black',
    borderStyle : 'solid',
    borderWidth : 1,
    marginVertical : 5
  },  
  picker_select : {
    height : DEVICE_HEIGHT * 0.06,
    fontSize : 11
  },
  picker_select_item : {
    fontSize : 12,
    backgroundColor : 'red'
  },
  //
  button_loading_photo : {
    borderRadius : 10,
    marginVertical : 5,
  },
  text_button_loading_photo : {
    color : 'white',
    fontFamily : 'Exo-Medium',
    textTransform: 'capitalize',
    padding: 3,
    fontSize : 14
  },
  //
  input_data : {
    fontSize : 15,
    marginVertical : 5
  }
})
