import React from 'react';
//*******************************************************
//
import {View, Text, ScrollView} from 'react-native';
//*******************************************************
//
import {styles} from '../resource/style/screen/styleInformation';
//*******************************************************
//
import { Button, FAB } from 'react-native-paper';
//*******************************************************
//
import ToolBarNormal from '../components/tool/ToolBarNormal';
//*******************************************************
//
import FormInformation from '../components/information/FormInformation';
import ListInformation from '../components/information/ListInformation';
// =====================================================
// INICIO DE CLASE  */}
// =====================================================
const Information = ({route, navigation}) => {
    //-------------------------------------------------------
    //ZONE
    const { itemId } = route.params;
    
    //-------------------------------------------------------
    //
    const onPressBack = () => {
      navigation.navigate('list');
    }
    // =====================================================
    // INICIO DE COMPONENTE}
    // =====================================================
    return ( 
        <View style={styles.container}>
          
            <View style = {styles.section_1}>
              <ToolBarNormal title={`Información ${itemId}`}/>
            </View>
            <View style = {styles.section_2}>
              <ScrollView style={styles.scrollView}>
                <FormInformation />
                <ListInformation />
              </ScrollView>
            </View>
            <View style = {styles.section_3}>
              <Text style={styles.footer}>Electronica 2020 - Minus Maya</Text>
            </View>
            <FAB
              style={styles.fab}
              // small
              icon="keyboard-backspace"
              onPress={onPressBack}
            />
        </View>
     );
}
 
export default Information;