import React, {useState, useEffect, useContext, useRef} from 'react';
//*******************************************************
//
import {View, Text, ScrollView, KeyboardAvoidingView, SafeAreaView} from 'react-native';
//*******************************************************
//
import { Button, TextInput} from 'react-native-paper';
import { messageDanger,messageSuccess, messageWarning } from '../../resource/js/message';
//*******************************************************
//
import {styles} from '../../resource/style/components/support/styleFormSupport';
//****************************************************************
//
import supportContext from '../../hook/support/supportContext';
//****************************************************************
//
import {getData} from '../../resource/js/storearray';
// =====================================================
// INICIO DE CLASE  */}
// =====================================================
const FormSupport = ({hide}) => {
    //-----------------------------------------------------------------
    //ZONE USE REF
    const input = useRef();

    //-----------------------------------------------------------------
    //ZONE USE STATE
    const [data, setData] = useState({
        email : '',
        claim : ''
    })
    const {email, claim} = data;
    
    const onChangeEmail = (e) => {
        setData({
            ...data,
            email : e
        })
    }
    const onChangeClaim = (e) => {
        setData({
            ...data,
            claim : e
        })
    }
    //-----------------------------------------------------------------
    //ZONE USE CONTEXT
    const {functionCreateSupport} = useContext(supportContext)
    //-----------------------------------------------------------------
    //ZONE USE EFFECT
    useEffect(() => {
        if(hide === true){
            input.current.blur();
        }
    }, [hide])
    //-----------------------------------------------------------------
    //ZONE FUNCTION
    const onPressSupport = () => {
        setData({
            ...data,
            email : email.toLowerCase()
        });
        if(email.trim() === '' || claim.trim() ===''){
            messageWarning('Formulario Vacio revise los datos nuevamente')
        }else{
            getData('datauser').then( i => {
                functionCreateSupport(i[0].identifier, email, claim).then( j => {
                    if( j === true){
                        messageSuccess('Correcto dato Registrado');
                        reset();
                    }else{
                        messageDanger('Error intente mas tarde');
                    }
                })
            })
        }
    }

    const reset = () => {
        setData({
            email : '',
            claim : ''
        })
    }
    // =====================================================
    // INICIO DE COMPONENTE}
    // =====================================================
    return ( 
        <View style={styles.container}>
            <SafeAreaView>
                <KeyboardAvoidingView
                    behavior= "padding"
                    enabled={true}
                >
                    <ScrollView>
                        <Text style={styles.title}>
                            Envianos tu consulta
                        </Text>
                        <Text style={styles.subtitle}>Email</Text>
                        <TextInput
                            label="Email"
                            mode ={'outlined'}
                            style = {styles.input_support}
                            placeholder ='Envianos tu Email'
                            value={email}
                            onChangeText={onChangeEmail}
                        />
                        <Text style={styles.subtitle}>Comentario</Text>
                        <TextInput
                          label="Envianos tu consulta"
                          mode ={'outlined'}
                          style = {styles.input_user}
                          placeholder ='Ingrese el Comentario'
                          multiline  = {true}
                          numberOfLines = {18}
                          value={claim}
                          onChangeText={onChangeClaim}
                          ref={input}
                        />
                        <Button 
                            icon="arrange-send-to-back" 
                            mode="contained" 
                            onPress={() => setOpenModal(!openmodal)}
                            style={styles.button_send_support}
                            labelStyle={styles.text_button_send_support}
                            onPress={onPressSupport}
                        >
                           Envianos tu consulta
                        </Button>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
            
            
        </View>
     );
}
 
export default FormSupport;