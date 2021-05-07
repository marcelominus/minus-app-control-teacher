import React from 'react';
//*******************************************************
//Improtamos compontentes de REACT NATIVE
import {View, Text} from 'react-native'

//*******************************************************
//
import ListDataItem from './ListDataItem';

// =====================================================
// INICIO DE CLASE  */}
// =====================================================
const ListData = ({navigation}) => {

    const materias = [ 'ETN-1000', 'ETN-2000', 'ETN-3000']
    // =====================================================
    // INICIO DE COMPONENTE}
    // =====================================================
    return ( 
        <View>
            {materias.map( (element , key) => (
                <ListDataItem key={key} element={element} navigation={navigation}/>
            ))}
        </View>
     );
}
 
export default ListData;