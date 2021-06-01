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
    height : DEVICE_HEIGHT * 0.4,
    backgroundColor : 'white',
    borderRadius : 10,
    padding: 20,
    textAlign: 'center',
  },
  title : {
    fontFamily : 'Exo-Black',
    marginBottom : 5,
  },
  information : {
    fontFamily : 'Exo-Regular',
    marginLeft : 10
  },
  title_footer : {
    marginTop : 15,
    textAlign : 'center',
    fontFamily : 'Exo-BoldItalic'
  }
  
})
