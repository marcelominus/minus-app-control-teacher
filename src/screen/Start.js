import React from 'react';
//*******************************************************
//
import {View, Text, Image} from 'react-native';
//*******************************************************
//
import {styles} from '../resource/style/screen/styleStart';
//*******************************************************
//
import { Button } from 'react-native-paper';

// =====================================================
// INICIO DE CLASE  */}
// =====================================================
const Start = ({navigation}) => {
    
    //-------------------------------------------------------
    //  ZONE FUNTION
    const onPressWelcome = () => {
        navigation.navigate('login');
    }
    
    // =====================================================
    // INICIO DE COMPONENTE}
    // =====================================================
    return ( 
        <View style={styles.container}>
            <View style={styles.section_1}>
                <Image
                  style={styles.image_cover}
                  source={require('../resource/img/etnf.jpg')}
                />
            </View>
            <View style={styles.section_2}>
                <Image
                  style={styles.image_logo}
                  source={require('../resource/img/umsaelectronica.jpg')}
                />
                <Text style={styles.text_welcome}>Bienvenido</Text>
                <Button 
                    mode="contained"
                    style={styles.button_welcome}
                    labelStyle={styles.text_button_welcome}
                    onPress = {onPressWelcome}
                >
                    Ingresar
                </Button>
                
            </View>
            <View style={styles.section_3}>
                <Text style={styles.footer}>Electronica 2020 - Minus Maya</Text>
            </View>
        </View>
     );
}
 
export default Start;