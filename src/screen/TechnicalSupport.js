import React, {useEffect, useState} from 'react';
//*******************************************************
//
import {View, Text, Keyboard, Alert, BackHandler} from 'react-native';
//*******************************************************
//
import {styles} from '../resource/style/screen/styleTechnicalSupport';
//*******************************************************
//
import ToolBarDrawer from '../components/tool/ToolBarDrawer';
//*******************************************************
//
import FormSupport from '../components/suppport/FormSupport';
//****************************************************************
//
import informationContext from '../hook/information/informationContext';
// =====================================================
// INICIO DE CLASE  */}
// =====================================================
const TechnicalSupport = ({navigation}) => {
    //-----------------------------------------------------------------
    //
    const [hide, setHide] = useState(false);
    //-----------------------------------------------------------------
    //
    const {back, functionBack} = useState(informationContext);
    //-----------------------------------------------------------------
    //
    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
          'keyboardDidShow',
          () => {
            setHide(false);
          }
        );
        const keyboardDidHideListener = Keyboard.addListener(
          'keyboardDidHide',
          () => {
            setHide(true);
          }
        );
    
        return () => {
          keyboardDidHideListener.remove();
          keyboardDidShowListener.remove();
        };
      }, []);

    //   useEffect(() => {
    //     //Funcion del boton de atras BACK HARDWARE
    //     const backAction = () => {
    //       ///+++++++++++++++++++++++++++++++++++++
    //       //Pregunta si realmente se desea SALIR
    //       Alert.alert('Salir', 'Esta seguro de Salir', [
    //         {
    //           text: 'Cancel',
    //           onPress: () => null,
    //           style: 'cancel',
    //         },
    //         {text: 'YES', onPress: () => BackHandler.exitApp()},
    //       ]);
    //       return true;
    //     };
    //     //Ejecucion de la funcion de RETROCESO
    //     const backHandler = BackHandler.addEventListener(
    //       'hardwareBackPress',
    //       backAction,
    //     );
    
    //     return () => backHandler.remove();
    //   }, []);

    // =====================================================
    // INICIO DE COMPONENTE}
    // =====================================================
    return ( 
       <View style={styles.container}>
            <View style={styles.section_1}>
                <ToolBarDrawer navigation={navigation} title={'Soporte Tecnico'}/>
            </View>
            <View style={styles.section_2}>
                <FormSupport hide={hide}/>
            </View>
            <View style={styles.section_3}>
                <Text style={styles.footer}>Electronica 2020 - Minus Maya</Text>
            </View>
            
        </View>
     );
}
 
export default TechnicalSupport; 