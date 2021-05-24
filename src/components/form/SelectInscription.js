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
// import {} from '../../resource/js/storestring';
//*******************************************************
//
import inscriptionContext from '../../hook/inscription/inscriptionContext';
import formContext from '../../hook/form/formContext';
// =====================================================
// INICIO DE CLASE  */}
// =====================================================
const SelectInscription = () => {
    //-------------------------------------------------------
    //ZONE USE STATE
    const [inscription, setInscription] = useState([{
        initialins : '',
        dentifierins : '',
        idins : ''
    }]);
    const [dateselect, setDateSelect] = useState('');
    
    //-------------------------------------------------------
    //ZONE USE CONTEXT
    const {functionReadInscription} = useContext(inscriptionContext);
    const {functionSaveSelect, resetdata} = useContext(formContext)
    //-------------------------------------------------------
    //ZONE USE EFFECT
    useEffect(() => {
        getData('datauser').then( e => {
            if( e !== null){
                functionReadInscription(e[0].identifier).then( e => {
                    setInscription(e);
                });
            }
        })  
    }, [])

    useEffect(() => {
        if(resetdata === true){
          setDateSelect("");
        }
      }, [resetdata])
    //-------------------------------------------------------
    //ZONE FUNCTION
    const onChangeSelect = (e) => {
        functionSaveSelect(e);
        setDateSelect(e);
    }

    // =====================================================
    // INICIO DE COMPONENTE}
    // =====================================================
    return ( 
        <Picker
            selectedValue={dateselect}
            // style={styles.picker_select}
            // onValueChange={(itemValue, itemIndex) => setDateSelect(itemValue)}
            onValueChange={onChangeSelect}
        >
            <Picker.Item label="Seleccione una variable" value="" />
            {inscription.map( (e) => (
                <Picker.Item label={e.initialins} value={e.identifierins} key={e.idins}/>
            ))}
        </Picker>
     );
}
 
export default SelectInscription;