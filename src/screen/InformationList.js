import React from 'react';
//*******************************************************
//
import {View, Text} from 'react-native';
//*******************************************************
//
import {styles} from '../resource/style/screen/styleInformationList';
//*******************************************************
//
import ToolBarDrawer from '../components/tool/ToolBarDrawer';

import ListData from '../components/list/ListData';
// =====================================================
// INICIO DE CLASE  */}
// =====================================================
const InformationList = ({navigation}) => {

    // =====================================================
    // INICIO DE COMPONENTE}
    // =====================================================
    return ( 
        <View style={styles.container}>
            <View style={styles.section_1}>
                <ToolBarDrawer navigation={navigation} title={'Informacion'}/>
            </View>
            <View style={styles.section_2}>
               <ListData navigation={navigation}/>
            </View>
            <View style={styles.section_3}>
                <Text style={styles.footer}>Electronica 2020 - Minus Maya</Text>
            </View>
        </View>
     );
}
 
export default InformationList;