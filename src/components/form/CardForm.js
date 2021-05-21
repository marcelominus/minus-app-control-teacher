import React, {useState, useEffect} from 'react';
//*******************************************************
//
import {View, Text, Image} from 'react-native'
//*******************************************************
//
import { styles } from '../../resource/style/components/form/styleCardForm';
//*******************************************************
//
import {getData} from '../../resource/js/storearray'
// =====================================================
// INICIO DE CLASE  */}
// =====================================================
const CardForm = () => {
    const [name, setName] = useState('')
    //-------------------------------------------------------
    //
    useEffect(() => {
        getData('datauser').then( e => {
            setName(`${e[0].name} ${e[0].surname}`);
        });
    }, [])
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
                    <Text style={styles.title_name}>{name}</Text>
                </View>
            </View> 
        </View>
     );
}
 
export default CardForm;