import React, {useState, useEffect, useContext} from 'react';
//*******************************************************
//
import {View, Text, Image} from 'react-native';
//*******************************************************
//
import { Button, TextInput, Badge, Menu, } from 'react-native-paper';
//*******************************************************
//
import {getDataString, storeDataString} from '../../resource/js/storestring';
//*******************************************************
//
import {styles} from '../../resource/style/components/form/styleFormData';
//*******************************************************
//
import CardData from './CardData';
import ModalData from './ModalData';
import SelectInscription from './SelectInscription';
import Camera from './Camera';
//*******************************************************
//Importamos CONTEXT 
import formContext from '../../hook/form/formContext';
//*******************************************************
//Importamos MOMENT
import moment from 'moment';
//*******************************************************
//Importamos los MENSAJES
import {messageWarning, messageSuccess, messageDanger} from '../../resource/js/message';
// =====================================================
// INICIO DE CLASE  */}
// =====================================================
const FormData = () => {
    //-------------------------------------------------------
    //ZONE USE STATE
    const [openmodal, setOpenModal] = useState(false);
    const [opencard, setOpenCard] = useState(false);
    const [data, setData] = useState({
        date : '',
        time : '',
    })
    const {date, time} = data;
    //-------------------------------------------------------
    //ZONE DE USE CONTEXT
    const {resetphoto, disable, functionResetPhoto, functionSaveDate, functionSaveTimeStart, functionSaveDisable } = useContext(formContext)
    //-------------------------------------------------------
    //ZONE USE EFFECT
    useEffect(() => {
        getDataString('datadate').then( e => {
            if(e !== null ){
                getDataString('datatimestart').then( f => {
                    if( f !== null){
                        setData({
                            date : e,
                            time : f,
                        });
                        setOpenCard(true);
                        functionSaveDisable(true);
                    }
                })
            }
        })
    }, [])
    //-------------------------------------------------------
    //ZONE FUNCTION
    const onPressSendPhoto = () => {
        // storeDataString( "null" ,'dataphoto');
        // functionResetPhoto(!resetphoto);
        getDataString('dataphoto').then( e => {
            if(e === "null" || e === null){
                messageDanger("Es obligatorio tomar la imagen de camara")
            }else{
                let fecha = moment().format('YYYY-MM-DD');
                let tiempo = moment().format('LT');
                // -------------------------------------------------------
                //
                functionSaveDate(fecha);
                functionSaveTimeStart(tiempo);
                //-------------------------------------------------------
                //
                getDataString('datadate').then( e => {
                    if(e !== null ){
                        getDataString('datatimestart').then( f => {
                            if( f !== null){
                                setData({
                                    date : e,
                                    time : f,
                                });
                                messageSuccess("Datos Guardados Correctamente");
                                setOpenCard(true);
                                functionSaveDisable(true);
                            }
                        })
                    }else{
                        messageDanger("Error Intente mas Tarde");
                    }
                })
            }
        });
        
        

        // setOpenCard(!opencard)
    }
    // =====================================================
    // INICIO DE COMPONENTE}
    // =====================================================
    return ( 
        <View style={styles.container}>
            <Text style={styles.text_title}>Formulario de Control</Text>
            <View style={styles.container_select}>
                <SelectInscription />
            </View>
            {/* --------------------------------------------------  */}
            <Camera />
            {/* --------------------------------------------------  */}
            <Button 
                icon="camera" 
                mode="contained" 
                onPress={onPressSendPhoto}
                style={styles.button_loading_photo}
                labelStyle={styles.text_button_loading_photo}
                disabled = {disable}
            >
               Enviar Foto
            </Button>
            {/* --------------------------------------------------  */}
            { opencard ? 
                <CardData date={date} time={time}/>
            :
                null
            }
            {/* --------------------------------------------------  */}
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