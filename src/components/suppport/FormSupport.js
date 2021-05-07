import React from 'react';
//*******************************************************
//
import {View, Text, ScrollView, KeyboardAvoidingView, SafeAreaView} from 'react-native';
//*******************************************************
//
import { Button, TextInput} from 'react-native-paper';
//*******************************************************
//
import {styles} from '../../resource/style/components/support/styleFormSupport'
// =====================================================
// INICIO DE CLASE  */}
// =====================================================
const FormSupport = () => {

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
                        />
                        <Text style={styles.subtitle}>Comentario</Text>
                        <TextInput
                          label="Envianos tu consulta"
                          mode ={'outlined'}
                          style = {styles.input_user}
                          placeholder ='Ingrese el Comentario'
                          multiline  = {true}
                          numberOfLines = {18}
                        />
                        <Button 
                            icon="arrange-send-to-back" 
                            mode="contained" 
                            onPress={() => setOpenModal(!openmodal)}
                            style={styles.button_send_support}
                            labelStyle={styles.text_button_send_support}
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