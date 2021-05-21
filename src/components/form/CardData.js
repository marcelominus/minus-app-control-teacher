import React, {useEffect, useState} from 'react';
//*******************************************************
//
import {View, Text, Image} from 'react-native';
//*******************************************************
//
import {styles} from '../../resource/style/components/form/styleCardData'; 
//*******************************************************
//
import {getDataString} from '../../resource/js/storestring';
// =====================================================
// INICIO DE CLASE  */}
// =====================================================
const CardData = ({date, time}) => {
    const [image, setImage] = useState('');
    //-------------------------------------------------------
    //ZONE USE EFFECT
    useEffect(() => {
       getDataString('dataphoto').then(e => {
           setImage(e);
       })
    }, [date])
    // =====================================================
    // INICIO DE COMPONENTE}
    // =====================================================
    return ( 
        <View style={styles.container}>
            <View style={styles.section_1}>
                <View style={styles.section_1_1}>
                    <Image
                      style={styles.image_card}
                      source={{uri : `data:image/jpeg;base64,${image}` }}
                    />
                </View>
                <View style={styles.section_1_2}>
                    <Text style={styles.title}>Clase Registrada</Text>
                    <Text style={styles.title_data}>Fecha Clase : </Text>
                    <Text style={styles.title_result}>{date}</Text>
                    <Text style={styles.title_data}>Hora de Inicio: </Text>
                    <Text style={styles.title_result}>{time}</Text>
                </View>
            </View> 
        </View>
     );
}
 
export default CardData;