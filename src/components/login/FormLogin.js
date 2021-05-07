import React, {useState} from 'react';
//*******************************************************
//
import { View, Text } from 'react-native';
//*******************************************************
//
import { TextInput, Button, Checkbox } from 'react-native-paper';
//*******************************************************
//
import {styles} from '../../resource/style/components/login/styleFormLogin'; 
import { showMessage, hideMessage } from "react-native-flash-message";
// =====================================================
// INICIO DE CLASE  */}
// =====================================================
const FormLogin = ({navigation}) => {
    //-------------------------------------------------------
    //ZONE STATE
    const [checked , setChecked] = useState(false);

    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    const onChangeUser = (e) => {
        setUser(e)
    }
    const onChangePass = (e) => {
        setPass(e)
    }
    //-------------------------------------------------------
    //ZONE FUNCTION
    const onPressLogin = () => {
        //-------------------------------------------------------
        //Sameamiento de Variables
        setUser(user.toLowerCase());
        setPass(pass.toLowerCase());

        if(user.trim() === '' || pass.trim() === ''){
            showMessage({
              message: "Datos Vacios revise el Formulario",
              type: "warning",
            });
        }else{
            showMessage({
              message: "Correcto, Bienvenido",
              type: "success",
            });
            setTimeout(() => {
                navigation.navigate('form');
            }, 2500);
        }
    }
    // =====================================================
    // INICIO DE COMPONENTE}
    // =====================================================
    return ( 
        <View style={styles.container}>
            <View style={styles.container_card_login}>
                <Text style={styles.title_login}>Ingresar Datos</Text>
                <Text style={styles.label}>Usuario</Text>
                <TextInput
                    label="User"
                    mode ={'outlined'}
                    style = {styles.input_user}
                    placeholder ='Ingrese su usuario'
                    onChangeText={onChangeUser}
                />
                <Text style={styles.label}>Password</Text>
                <TextInput
                    label="Contraseña"
                    mode ={'outlined'}
                    placeholder = 'Ingrese su contreña'
                    style = {styles.input_user}
                    onChangeText={onChangePass}
                    secureTextEntry={!checked}
                />
                <View style={styles.container_check}>
                    <Text style={styles.text_check}>Ver Password</Text>
                    <Checkbox
                      status={checked ? 'checked' : 'unchecked'}
                      onPress={() => {
                        setChecked(!checked);
                      }}
                    />
                </View> 
                <Button 
                    // icon="camera" 
                    mode='contained'
                    style={styles.button_login}
                    labelStyle={styles.text_button_login}
                    onPress = {onPressLogin}
                >
                    Iniciar Sesion
                </Button>
            </View>
        </View>
     );
}
 
export default FormLogin;