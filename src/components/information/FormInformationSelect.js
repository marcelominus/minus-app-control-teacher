import React, {useState} from 'react';
//*******************************************************
//
import {View, Text} from 'react-native'
//*******************************************************
//
import {Picker} from '@react-native-community/picker';
//*******************************************************
//
import { Button } from 'react-native-paper';
//*******************************************************
//
import {styles} from '../../resource/style/components/information/styleFormInformationSelect'
// =====================================================
// INICIO DE CLASE  */}
// =====================================================
const FormInformationSelect = () => {

    const [select, setSelect] = useState('java');


    // =====================================================
    // INICIO DE COMPONENTE}
    // =====================================================
    return ( 
        <View>
            <View style={styles.container_select}>
                <View style={styles.container_select_unique}>
                    <Picker
                        selectedValue={select}
                        onValueChange={(itemValue, itemIndex) => setSelect(itemValue)}
                        style={styles.picker_select}
                        >
                        <Picker.Item label="Año 2019" value="java" />
                        <Picker.Item label="Año 2020" value="js" />
                        <Picker.Item label="Año 2021" value="js" />
                        <Picker.Item label="Año 2022" value="js" />
                        <Picker.Item label="Año 2023" value="js" />
                        <Picker.Item label="Año 2024" value="js" />

                    </Picker>
                </View>
                <View style={styles.container_select_unique}>
                    <Picker
                        selectedValue={select}
                        onValueChange={(itemValue, itemIndex) => setSelect(itemValue)}
                        style={styles.picker_select}
                    >
                        <Picker.Item label="Enero" value="java" />
                        <Picker.Item label="Febrero" value="js" />
                        <Picker.Item label="Marzo" value="js" />
                        <Picker.Item label="Abril" value="js" />
                        <Picker.Item label="Mayo" value="js" />
                        <Picker.Item label="Junio" value="js" />
                        <Picker.Item label="Julio" value="js" />
                        <Picker.Item label="Agosto" value="js" />
                        <Picker.Item label="Septiembre" value="js" />
                        <Picker.Item label="Octubre" value="js" />
                        <Picker.Item label="Noviembre" value="js" />
                        <Picker.Item label="Diciembre" value="js" />
                    </Picker>
                </View>
               
                <Button 
                    icon="calendar-search" 
                    mode="contained" 
                    onPress={() => console.log('Pressed')}
                    style={styles.button_select}
                    labelStyle={styles.text_button_select}
                >
                    Buscar
                </Button>
            </View>
        </View>
     );
}
 
export default FormInformationSelect;