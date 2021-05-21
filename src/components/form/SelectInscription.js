import React, {useState, useEffect, useContext} from 'react';
//*******************************************************
//Importamos componente sde REACT NATIVE
import {View, Text} from 'react-native'
//*******************************************************
//
import {Picker} from '@react-native-community/picker';
//*******************************************************
//
import {styles} from '../../resource/style/components/form/styleFormData';
//
import {getData} from '../../resource/js/storearray';
//*******************************************************
//
import inscriptionContext from '../../hook/inscription/inscriptionContext';
// =====================================================
// INICIO DE CLASE  */}
// =====================================================
const SelectInscription = () => {
    //-------------------------------------------------------
    //ZONE USE STATE
    const [inscription, setInscription] = useState([]);
    const [dateselect, setDateSelect] = useState('');
    //-------------------------------------------------------
    //ZONE USE CONTEXT
    const {functionReadInscription} = useContext(inscriptionContext);
    //-------------------------------------------------------
    //ZONE USE EFFECT
    useEffect(() => {
        getData('datauser').then( e => {
            functionReadInscription(e[0].identifier).then( e => {
                setInscription(e);
            });
        })  
    }, [])
    //-------------------------------------------------------
    //ZONE FUNCTION

    // =====================================================
    // INICIO DE COMPONENTE}
    // =====================================================
    return ( 
        <Picker
            selectedValue={dateselect}
            // style={styles.picker_select}
            onValueChange={(itemValue, itemIndex) => setDateSelect(itemValue)}
        >
            <Picker.Item label="Seleccione una variable" value="" />
            {inscription.map( (e) => (
                <Picker.Item label={e.initialins} value={e.initialins} key={e.idins}/>
            ))}
        </Picker>
     );
}
 
export default SelectInscription;