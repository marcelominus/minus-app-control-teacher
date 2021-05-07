import React from 'react';
//*******************************************************
//
import {View, Text, Image} from 'react-native'
import { styles } from '../../resource/style/components/form/styleCardForm';
// =====================================================
// INICIO DE CLASE  */}
// =====================================================
const CardForm = () => {
    // =====================================================
    // INICIO DE COMPONENTE}
    // =====================================================
    return ( 
        <View style={styles.container}>
            <View style={styles.section_1}>
                <View style={styles.section_1_1}>
                    <Image
                      style={styles.image_card}
                      source={require('../../resource/img/artificial.jpg')}
                    />
                </View>
                <View style={styles.section_1_2}>
                    <Text style={styles.title_card_form}>Bienvenido</Text>
                    <Text style={styles.title_name}>Oscar Marcelo Poma Calle</Text>
                </View>
            </View> 
        </View>
     );
}
 
export default CardForm;