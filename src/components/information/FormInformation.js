import React, {useState, useContext} from 'react';
//*******************************************************
//
import {View, Text} from 'react-native'

//*******************************************************
//
import { Switch } from 'react-native-paper';
//*******************************************************
//
import { styles } from '../../resource/style/components/information/styleFormInformation';
//*******************************************************
//
import FormInformationPicker from './FormInformationPicker';
import FormInformationSelect from './FormInformationSelect';
//****************************************************************
//
import informationContext from '../../hook/information/informationContext';
// =====================================================
// INICIO DE CLASE  */}
// =====================================================
const FormInformation = ({itemIdDes}) => {

    const state = {
        date: new Date(),
    }
    //-------------------------------------------------------
    //
    const [check, setCheck] = useState(false);
    //-----------------------------------------------------------------
    //ZONE USE CONTEXT
    const {functionDisableCard} = useContext(informationContext);
    //-------------------------------------------------------
    //ZONE FUNCTION
    const onToggleSwitch = () => {
        functionDisableCard(false);
        setCheck(!check)
    }

    // =====================================================
    // INICIO DE COMPONENTE}
    // =====================================================
    return ( 
        <View style={styles.container}>
            {/* <Text>DESDE EL FORM</Text>
            <Switch value={check} onValueChange={onToggleSwitch}/> */}
            <View style={styles.card_information}>
                <View style={styles.section_1}>
                    <Text style={styles.title_search}>Mensual</Text>
                    <Switch value={check} onValueChange={onToggleSwitch}/>
                    <Text style={styles.title_search}>Diario</Text>
                </View>
                <View style={styles.section_2}>
                    { check ? 
                        <FormInformationPicker itemIdDes={itemIdDes}/>: 
                        <FormInformationSelect itemIdDes={itemIdDes}/>
                    }
                </View>
            </View>
        </View>
     );
}
 
export default FormInformation;