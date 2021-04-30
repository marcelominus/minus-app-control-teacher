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
                <Text>Welcome</Text>
                <Button 
                    // icon="camera" 
                    mode="contained"
                    style={styles.button_welcome}
                    labelStyle={styles.text_button_welcome}
                >
                    INGRESAR
                </Button>
                <Image
                  style={styles.image_logo}
                  source={require('../resource/img/umsaelectronica.jpg')}
                />
            </View>
        </View>
     );
}
 
export default Start;