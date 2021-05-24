import React, { useContext, useEffect } from 'react';
//*******************************************************
//
import {View, Text, ScrollView, Alert, BackHandler} from 'react-native';
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
//****************************************************************
//
import informationContext from '../hook/information/informationContext';
// =====================================================
// INICIO DE CLASE  */}
// =====================================================
const Information = ({route, navigation}) => {
    //-------------------------------------------------------
    //ZONE ROUTES PARAMS
    const { itemId, itemIdDes } = route.params;
    //-----------------------------------------------------------------
    //ZONE USE CONTEXT
    const {disable, back, functionDisableCard, functionBack} = useContext(informationContext);
    //-----------------------------------------------------------------
    //
    useEffect(() => {
      //Fucion que se usa para el boton de atras
      const backAction = async () => {
        await navigation.navigate('list');
        return true;
      };
      BackHandler.addEventListener('hardwareBackPress', backAction);
  
      return () =>
        BackHandler.removeEventListener('hardwareBackPress', backAction);
    }, []);
    //-------------------------------------------------------
    //ZONE FUNCTION
    const onPressBack = () => {
      functionDisableCard(false);
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
                <FormInformation itemIdDes={itemIdDes}/>
                {disable ? 
                  <ListInformation />
                :
                  null
                }
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