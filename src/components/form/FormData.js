import React, {useState} from 'react';
//*******************************************************
//
import {View, Text, Image} from 'react-native';
//*******************************************************
//
import { Button, TextInput, Badge, Menu, } from 'react-native-paper';
//*******************************************************
//
import {Picker} from '@react-native-community/picker';
//*******************************************************
//
import {styles} from '../../resource/style/components/form/styleFormData';
//*******************************************************
//
import CardData from './CardData';
import ModalData from './ModalData';
// =====================================================
// INICIO DE CLASE  */}
// =====================================================
const FormData = () => {
    //-------------------------------------------------------
    //ZONE USE STATE
    const [sendphoto, setSendPhoto] = useState(false);
    const [select, setSelect] = useState('java');
    const [openmodal, setOpenModal] = useState(false);
    //-------------------------------------------------------
    //ZONE FUNCTION
    const onPressSendPhoto = () => {
        setSendPhoto(!sendphoto);
    }
    // =====================================================
    // INICIO DE COMPONENTE}
    // =====================================================
    return ( 
        <View style={styles.container}>
            <Text style={styles.text_title}>Formulario de Control</Text>
            <View style={styles.container_select}>
                <Picker
                    selectedValue={select}
                    onValueChange={(itemValue, itemIndex) => setSelect(itemValue)}
                    style={styles.picker_select}
                    
                >
                    <Picker.Item label="ETN-1000" value="java" />
                    <Picker.Item label="ETN-2000" value="js" />
                    <Picker.Item label="ETN-3000" value="js" />

                </Picker>
            </View>
            <Button 
                // icon="camera" 
                mode="contained" 
                onPress={() => console.log('Pressed')}
                style={styles.button_loading_photo}
                labelStyle={styles.text_button_loading_photo}
            >
               Cargar Foto
            </Button>
            {/* --------------------------------------------------  */}
            {sendphoto ? (
                <View>
                    <View style={styles.badge_success}>
                        <Text style={styles.text_badge_success}>Foto Guardada</Text>
                    </View>
                    <CardData />
                </View>
            ):( <View style={styles.badge}>
                    <Text style={styles.text_badge}>Foto no Subida</Text>
                </View>
            )}
            {/* --------------------------------------------------  */}
            <Button 
                icon="camera" 
                mode="contained" 
                onPress={onPressSendPhoto}
                style={styles.button_loading_photo}
                labelStyle={styles.text_button_loading_photo}
            >
               Enviar Foto
            </Button>
            <TextInput
              label="Datos de la Clase"
              mode ={'outlined'}
              style = {styles.input_data}
              placeholder ='Ingrese los datos de la Clase'
              underlineColor ='#000'
              multiline  = {true}
              numberOfLines = {15}
            />
            <Button 
                icon="camera" 
                mode="contained" 
                onPress={() => setOpenModal(!openmodal)}
                style={styles.button_loading_photo}
                labelStyle={styles.text_button_loading_photo}
            >
               Guardar Fin de Clase
            </Button>
            <ModalData openModal={openmodal} setOpenModal={setOpenModal}/>
        </View>
     );
}
 
export default FormData;