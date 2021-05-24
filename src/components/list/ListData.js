import React, {useState, useEffect, useContext} from 'react';
//*******************************************************
//Improtamos compontentes de REACT NATIVE
import {View, Text} from 'react-native'

//*******************************************************
//
import ListDataItem from './ListDataItem';
import inscriptionContext from '../../hook/inscription/inscriptionContext';

import {getData} from '../../resource/js/storearray';

// =====================================================
// INICIO DE CLASE  */}
// =====================================================
const ListData = ({navigation}) => {
    const [inscription, setInscription] = useState([]);
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
    // =====================================================
    // INICIO DE COMPONENTE}
    // =====================================================
    return ( 
        <View>
            {inscription.map( (element , key) => (
                <ListDataItem key={key} element={element} navigation={navigation}/>
            ))}
        </View>
     );
}
 
export default ListData;