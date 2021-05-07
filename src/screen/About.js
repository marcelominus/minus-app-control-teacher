import React from 'react';
//*******************************************************
//
import {View, Text} from 'react-native';
//*******************************************************
//
import {styles} from '../resource/style/screen/styleAbout';
//*******************************************************
//
import ToolBarDrawer from '../components/tool/ToolBarDrawer';
//*******************************************************
//
import ListAbout from '../components/about/ListAbout';
// =====================================================
// INICIO DE CLASE  */}
// =====================================================
const About = ({navigation}) => {

    // =====================================================
    // INICIO DE COMPONENTE}
    // =====================================================
    return ( 
        <View style={styles.container}>
            <View style={styles.section_1}>
                <ToolBarDrawer navigation={navigation} title={'Soporte Tecnico'}/>
            </View>
            <View style={styles.section_2}>
                <ListAbout />
            </View>
            <View style={styles.section_3}>
                <Text style={styles.footer}>Electronica 2020 - Minus Maya</Text>
            </View>
        </View>
     );
}
 
export default About;