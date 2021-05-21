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
   //
    container_camera : {
        width : '100%',
        flexDirection : 'row'
    },
    //SECCIONT DE CAMERA
    //-------------------------------------------------------
    section_1 : {                       //SECTION NUMERO ONE
        width : '50%',
        padding : 2,
    },
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
    //-------------------------------------------------------
    section_2 : {                       //SECTION NUMERO TWO
        width : '50%',
        padding: 2,
    },
     badge : {
      backgroundColor : 'white',
      marginVertical : 5,
      padding: 10,
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
      backgroundColor : 'white',
      marginVertical : 5,
      padding: 10,
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
    //-------------------------------------------------------
   
})
