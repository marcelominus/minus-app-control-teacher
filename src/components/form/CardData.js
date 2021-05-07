import React from 'react';
//*******************************************************
//
import {View, Text, Image} from 'react-native';
//*******************************************************
//
import {styles} from '../../resource/style/components/form/styleCardData'; 
// =====================================================
// INICIO DE CLASE  */}
// =====================================================
const CardData = () => {

    // =====================================================
    // INICIO DE COMPONENTE}
    // =====================================================
    return ( 
        <View style={styles.container}>
            <View style={styles.section_1}>
                <View style={styles.section_1_1}>
                    <Image
                      style={styles.image_card}
                      source={require('../../resource/img/umsaelectronica.jpg')}
                    />
                </View>
                <View style={styles.section_1_2}>
                    <Text style={styles.title}>Clase Registrada</Text>
                    <Text style={styles.title_data}>Fecha Clase : </Text>
                    <Text style={styles.title_result}>04/05/2021</Text>
                    <Text style={styles.title_data}>Hora de Inicio: </Text>
                    <Text style={styles.title_result}>09:48 AM</Text>
                </View>
            </View> 
        </View>
     );
}
 
export default CardData;