import React, {useState, useContext, useEffect} from 'react';
//*******************************************************
//
import {View, Text} from 'react-native'
//*******************************************************
//
import {styles} from '../../resource/style/components/form/styleCamera';
//*******************************************************
//Importamos IMAGE PICKER
import * as ImagePicker from 'react-native-image-picker';
//*******************************************************
//Importamos componentes de REACT NATIVE PAPER
import { Button, TextInput, Badge, Menu, } from 'react-native-paper';
//*******************************************************
//Importamos el CONTEXT
import formContext from '../../hook/form/formContext';
//*******************************************************
//Importamos el ASYNC STORAGE
import {getDataString} from '../../resource/js/storestring';
// =====================================================
// INICIO DE CLASE  */}
// =====================================================
const Camera = () => {
  //-------------------------------------------------------
  //ZONE USE STATE
  //
  const [sendphoto, setSendPhoto] = useState(false);
  //-------------------------------------------------------
  //ZONE USE CONTEXT
  const {disable , resetphoto, resetdata, functionSavePhoto, functionResetPhoto} = useContext(formContext)

  //-------------------------------------------------------
  //ZONE USE EFFECT
  useEffect(() => {
    getDataString('dataphoto').then( e => {
      if( e == "null" || e == null){
        setSendPhoto(false);
      }else{
        setSendPhoto(true);
      }
    })
  }, [resetphoto])

  useEffect(() => {
    if(resetdata === true){
      setSendPhoto(false);
    }
  }, [resetdata])
  //-------------------------------------------------------
  //ZONE FUNCTION
  
  // =====================================================
  // INICIO DE COMPONENTE}
  // =====================================================
  return (
    <View style={styles.container_camera}>
      <View style={styles.section_1}>
          <Button
            icon="camera" 
            mode="contained" 
            style={styles.button_loading_photo}
            labelStyle={styles.text_button_loading_photo}
            disabled={disable}
            onPress={() =>
              ImagePicker.launchCamera(
                {
                  mediaType: 'photo',
                  includeBase64: true,
                  maxHeight: 200,
                  maxWidth: 400,
                  quality : 0.2
                },
                (response) => {
                  if(response.base64 !== undefined){
                    // setSendPhoto(true)
                    functionSavePhoto(response.base64);
                  }
                  functionResetPhoto(!resetphoto);
                },
              )
            }
          >Sacar Imagen</Button>
      </View>
      <View style={styles.section_2}>
          {sendphoto ? (
              <View style={styles.badge_success}>
                  <Text style={styles.text_badge_success}>Foto Guardada</Text>
              </View>
          ):( <View style={styles.badge}>
                  <Text style={styles.text_badge}>Sin Datos de Foto</Text>
              </View>
          )}
      </View>
    </View>
  );
};

export default Camera;
