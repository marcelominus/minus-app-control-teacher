import React, {useState, useContext} from 'react';
//*******************************************************
//Importamos componente sde REACT NATIVE
import { View, Text } from 'react-native';
//*******************************************************
//Importamos componentes de REACT PAPER
import { TextInput, Button, Checkbox } from 'react-native-paper';
//*******************************************************
//Importamos los STYLES
import {styles} from '../../resource/style/components/login/styleFormLogin'; 
//*******************************************************
//Importmaos los MESSAGE DE  FLASK
import {messageSuccess, messageWarning, messageDanger} from '../../resource/js/message'
//*******************************************************
//Importamos los CONTEXT
import loginContext from '../../hook/login/loginContext';
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
    //ZONE DE USE CONTEXT
    const {functionPetitionLogin} = useContext(loginContext)

    //-------------------------------------------------------
    //ZONE FUNCTION
    const onPressLogin = () => {
        //-------------------------------------------------------
        //Sameamiento de Variables
        setUser(user.toLowerCase());
        setPass(pass.toLowerCase());

        if(user.trim() === '' || pass.trim() === ''){
            messageWarning("Datos vacios, Revise Nuevamente el Formulario");
        }else{

            functionPetitionLogin(user, pass).then( e => {
                if (e === "empty") {
                  messageWarning("Usuario No Encontrado");
                } else if (e === "fail-server") {
                  messageDanger("Fallo, Intente mas Tarde");
                } else {
                  messageSuccess("Correcto,  Bienvenido al Sistema");
                  setTimeout(() => {
                    navigation.navigate('form');
                  }, 2500);
                }
            })
            
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
                    label="Usuario"
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