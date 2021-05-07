import React, {useState} from 'react';
//*******************************************************
//
import {View, Text, TouchableOpacity, Image} from 'react-native'
//*******************************************************
//
import {styles} from '../../resource/style/components/information/styleItemListInformation';
//*******************************************************
//
import ImageView from 'react-native-image-view';
//*******************************************************
//
import { Button } from 'react-native-paper';
// =====================================================
// INICIO DE CLASE  */}
// =====================================================
const ItemListInformation = ({e}) => {
    const images = [
        {
            source: {
                uri: e,
            },
            title: 'Paris',
            width: 500,
            height: 1000,
        },
    ];

    const [view, setView] = useState(false)
    const onPressView = () => {
        setView(!view)
    }

    // =====================================================
    // INICIO DE COMPONENTE}
    // =====================================================
    return ( 
        <View style={styles.container}>
            <View style={styles.section_1}>
                <ImageView
                    images={images}
                    imageIndex={0}
                    isVisible={view}
                    renderFooter={(currentImage) => (<View><Text>My footer</Text></View>)
                    }
                    onClose={() => setView(false)}
                    animationType={'fade'}
                    animated={true}
                />
                <TouchableOpacity 
                    onPress={onPressView}
                >
                    <Image 
                        style={styles.image_button} 
                        source={{uri: e}} 
                    />
                </TouchableOpacity>
            </View>
             <View style={styles.section_2}>
                <Text style={styles.title_information}>Informacion : </Text>
                <Text style={styles.title_subtitle}> Fecha de Clase:</Text>
                <Text style={styles.title_data}> 04/05/2021</Text>
                <Text style={styles.title_subtitle}> Hora de Inicio:</Text>
                <Text style={styles.title_data}> 09:30 AM</Text>
                <Text style={styles.title_subtitle}> Hora Final de Clase:</Text>
                <Text style={styles.title_data}> 11:00 AM</Text>

            </View>
        </View>
     );
}
 
export default ItemListInformation;