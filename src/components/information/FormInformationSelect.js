import React, {useState, useContext, useEffect} from 'react';
//*******************************************************
//Importamos componentes de REACT NATIVE
import {View, Text} from 'react-native'
//*******************************************************
//Importamos el PICKER
import {Picker} from '@react-native-community/picker';
//*******************************************************
//Importamos el componente de REACT NATIVE PAPER
import { Button } from 'react-native-paper';
//*******************************************************
//Importamos los STYLES
import {styles} from '../../resource/style/components/information/styleFormInformationSelect'
//****************************************************************
//Importamos los CONTEXT
import informationContext from '../../hook/information/informationContext';
//****************************************************************
//
import {getData} from '../../resource/js/storearray';
import { messageDanger, messageWarning } from '../../resource/js/message';
// =====================================================
// INICIO DE CLASE  */}
// =====================================================
const FormInformationSelect = ({itemIdDes}) => {

    //-----------------------------------------------------------------
    //ZONE USE STATE
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [user, setUser] = useState('');
    //-----------------------------------------------------------------
    //ZONE USE CONTEXT
    const { functionDisableCard, functionReadSelect, functionArrayInformation} = useContext(informationContext);
    //-----------------------------------------------------------------
    //ZONE USE EFFECT
    useEffect(() => {
        getData('datauser').then( i => {
            setUser(i[0].identifier)
        })
    }, [])
    //-----------------------------------------------------------------
    //ZONE FUNCTION
    const onChangeMonth = (e) => {
        functionDisableCard(false);
        setMonth(e)
    }

    const onChangeYear = (e) => {
        functionDisableCard(false);
        setYear(e)
    }

    const onPressInformation = () => {
        if(month === '' || year === ''){
            messageDanger('Datos no seleccionados, escoja una opcion');
        }else{
            functionReadSelect(user, itemIdDes, month, year).then( e => {
                if( e === false){
                    messageWarning('Sin Informacion, Datos no Encontrados')
                }else{
                    functionArrayInformation(e);
                    functionDisableCard(true);
                }
            });
        }
    }
    // =====================================================
    // INICIO DE COMPONENTE}
    // =====================================================
    return ( 
        <View>
            <View style={styles.container_select}>
                <View style={styles.container_select_unique}>
                    <Picker
                        selectedValue={month}
                        onValueChange={onChangeMonth}
                        style={styles.picker_select}
                        >
                        <Picker.Item label="Selecciones un Opcion Año" value="" />
                        <Picker.Item label="Año 2019" value="2019" />
                        <Picker.Item label="Año 2020" value="2020" />
                        <Picker.Item label="Año 2021" value="2021" />
                        <Picker.Item label="Año 2022" value="2022" />
                        <Picker.Item label="Año 2023" value="2023" />
                        <Picker.Item label="Año 2024" value="2024" />

                    </Picker>
                </View>
                <View style={styles.container_select_unique}>
                    <Picker
                        selectedValue={year}
                        onValueChange={onChangeYear}
                        style={styles.picker_select}
                    >
                        <Picker.Item label="Selecciones un Opcion Mes" value="" />
                        <Picker.Item label="Enero" value="1" />
                        <Picker.Item label="Febrero" value="2" />
                        <Picker.Item label="Marzo" value="3" />
                        <Picker.Item label="Abril" value="4" />
                        <Picker.Item label="Mayo" value="5" />
                        <Picker.Item label="Junio" value="6" />
                        <Picker.Item label="Julio" value="7" />
                        <Picker.Item label="Agosto" value="8" />
                        <Picker.Item label="Septiembre" value="9" />
                        <Picker.Item label="Octubre" value="10" />
                        <Picker.Item label="Noviembre" value="11" />
                        <Picker.Item label="Diciembre" value="12" />
                    </Picker>
                </View>
               
                <Button 
                    icon="calendar-search" 
                    mode="contained" 
                    onPress={onPressInformation}
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