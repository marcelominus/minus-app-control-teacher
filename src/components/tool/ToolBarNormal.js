import React from 'react';
//*******************************************************
//
import {View , Text} from 'react-native'
//
import {styles} from '../../resource/style/components/tool/styleToolBarNormal'; 
// =====================================================
// INICIO DE CLASE  */}
// =====================================================
const ToolBarNormal = ({title}) => {
    // =====================================================
    // INICIO DE COMPONENTE}
    // =====================================================
    return ( 
        <View style={ styles.container}>
            <Text style={styles.text_bar}>{title}</Text>
        </View>
     );
}
 
export default ToolBarNormal;