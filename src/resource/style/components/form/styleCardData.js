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
    height : DEVICE_HEIGHT * 0.3,
    borderBottomLeftRadius : 15,
    borderBottomRightRadius : 15,
  },
  section_1 : {
    width : "100%",
    height : '100%',
    flexDirection : 'row',
    padding: 10,
    justifyContent: 'center',
  },
  section_1_1 : {
    width : '40%',
    backgroundColor : '#DAD7CD',
    borderBottomLeftRadius : 10,
    borderTopLeftRadius : 10,
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
  title : {
    fontSize : 16,
    fontFamily : 'Exo-Medium'
  },
  title_data : {
    fontSize : 14,
    fontFamily : 'Exo-Medium'
  },
  title_result : {
    fontSize : 13,
    fontFamily : 'Exo-Regular'
  }
  
})
