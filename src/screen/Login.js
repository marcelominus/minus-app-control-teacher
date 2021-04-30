import React from 'react';
//*******************************************************
//
import {View, Text} from 'react-native';
//*******************************************************
//
import {styles} from '../resource/style/screen/styleLogin';
//*******************************************************
//
import { Button } from 'react-native-paper';

// =====================================================
// INICIO DE CLASE  */}
// =====================================================
const Login = ({navigation}) => {
    const onPressDos = () =>{
      navigation.navigate('form');
    }
    // =====================================================
    // INICIO DE COMPONENTE}
    // =====================================================
    return ( 
        <View style={styles.container}>
            <Text>DESDE EL LOGIN MARCELO d</Text>
            <Button icon="camera" mode="contained" onPress={onPressDos}>
              Press me
            </Button>
        </View>
     );
}
 
export default Login;