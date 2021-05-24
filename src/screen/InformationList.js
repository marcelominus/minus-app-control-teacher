import React, {useEffect} from 'react';
//*******************************************************
//
import {View, Text, Alert, BackHandler} from 'react-native';
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
    useEffect(() => {
        console.log('LENNY LAURA')
        //Funcion del boton de atras BACK HARDWARE
        const backAction = () => {
          ///+++++++++++++++++++++++++++++++++++++
          //Pregunta si realmente se desea SALIR
          Alert.alert('Salir', 'Esta seguro de Salir', [
            {
              text: 'Cancel',
              onPress: () => null,
              style: 'cancel',
            },
            {text: 'YES', onPress: () => BackHandler.exitApp()},
          ]);
          return true;
        };
        //Ejecucion de la funcion de RETROCESO
        const backHandler = BackHandler.addEventListener(
          'hardwareBackPress',
          backAction,
        );
    
        return () => backHandler.remove();
    }, []);
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