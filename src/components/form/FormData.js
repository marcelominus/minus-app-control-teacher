import React, {useState, useEffect, useContext, useRef} from 'react';
//*******************************************************
//
import {View, Text, Image, Keyboard} from 'react-native';
//*******************************************************
//
import { Button, TextInput, Badge, Menu, } from 'react-native-paper';
//*******************************************************
//
import {getDataString, storeDataString} from '../../resource/js/storestring';
import {getData} from '../../resource/js/storearray';
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
const FormData = ({hide}) => {
    //-----------------------------------------------------------------
    //
    const input = useRef();
    //-------------------------------------------------------
    //ZONE USE STATE
    const [openmodal, setOpenModal] = useState(false);
    const [opencard, setOpenCard] = useState(false);
    const [data, setData] = useState({
        date : '',
        time : '',
        information : ''
    })
    const {date, time, information} = data;
    //
    const onChangeInformation = (e) => {
        setData({
            ...data,
            information : e
        })
    }
    //-------------------------------------------------------
    //ZONE DE USE CONTEXT
    const {disable, resetdata, functionSaveDate, functionSaveTimeStart, functionSaveDisable, functionCreateData, functionResetData } = useContext(formContext)
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
    //
    useEffect(() => {
        if(resetdata === true){
            functionSaveDisable(false); //Resetea los BOTONES
            setOpenCard(false);
        }
      }, [resetdata])

    useEffect(() => {
        if(hide === true){
            input.current.blur();
        }
    }, [hide])
    //-------------------------------------------------------
    //ZONE FUNCTION
    const onPressSendPhoto = () => {
        // storeDataString( "null" ,'dataphoto');
        // functionResetPhoto(!resetphoto);
        getDataString('dataphoto').then( e => {
            if(e === "null" || e === null){
                messageDanger("Es obligatorio tomar la imagen de camara")
            }else{
                let fecha = moment().format('YYYY/MM/DD');
                let tiempo = moment().format('LT');
                // -------------------------------------------------------
                functionSaveDate(fecha);
                functionSaveTimeStart(tiempo);
                //-------------------------------------------------------
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
    }

    const onPressSendInformation = () => {
        getDataString('dataselect').then( h => {
            if( h === 'null' || h === null){
                messageWarning("Debe seleccionar una materia")
            }else{
                getDataString('dataphoto').then( e => {
                    if(e === "null" || e === null){
                        messageDanger('Debe sacar la foto de clase');
                    }else{
                        getDataString('datadate').then( f => {
                            getDataString('datatimestart').then( g => {
                                if(f === "null" || f === null){
                                    messageDanger('Debe registrar la imagen tomada')
                                }else{
                                    if(information === undefined || information === ""){
                                        messageWarning("Informacion Vacia, Formulario Incompleto")
                                    }else{
                                        getData('datauser').then( i => {
                                            functionCreateData(i[0].identifier, h, f, g, information, e).then( j => {
                                                if( j === true){
                                                    messageSuccess('Correcto dato Registrado');
                                                    resetInformation();
                                                }else{
                                                    messageDanger('Error intente mas tarde');
                                                }
                                            })
                                        })
                                    }
                                }
                            })
                        })
                    }
                })
            }
        })
    }

    const resetInformation = () => {
        setData({
            ...data,
            information : '',
        })
        functionResetData(true);
        functionResetData(false);
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
              multiline  = {true}
              numberOfLines = {10}
              onChangeText= {onChangeInformation}
              value={information}
              ref={input}
            />
            <Button 
                icon="camera" 
                mode="contained" 
                // onPress={() => setOpenModal(!openmodal)}
                onPress={onPressSendInformation}
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