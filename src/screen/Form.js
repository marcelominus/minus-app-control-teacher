import React, {useEffect, useState} from 'react';
//*******************************************************
//
import {View, Text, SafeAreaView, ScrollView, KeyboardAvoidingView, Keyboard} from 'react-native';
//*******************************************************
//
import {styles} from '../resource/style/screen/styleForm';
//*******************************************************
//
import ToolBarDrawer from '../components/tool/ToolBarDrawer';
//*******************************************************
//
import CardForm from '../components/form/CardForm';
import FormData from '../components/form/FormData';
//*******************************************************
//
import {getDataString} from '../resource/js/storestring'
// =====================================================
// INICIO DE CLASE  */}
// =====================================================
const Form = ({navigation}) => {
    const [hide, setHide] = useState(false);
    //-------------------------------------------------------
    //ZONE USE EFFECT
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
    // =====================================================
    // INICIO DE COMPONENTE}
    // =====================================================
    return ( 
        <View style={styles.container}>
            <View style={styles.section_1}>
                <ToolBarDrawer navigation={navigation} title={'Formulario'}/>
            </View>
            <View style={styles.section_2}>
                <SafeAreaView>
                    <KeyboardAvoidingView
                        behavior= "padding"
                        enabled={true}
                    >
                        <ScrollView style={styles.scrollView}>
                              <View style={styles.section_2_1}>
                                  <CardForm/>
                              </View>
                              <View style={styles.section_2_2}>
                                  <FormData hide={hide}/>
                              </View>
                        </ScrollView>
                  </KeyboardAvoidingView>
                </SafeAreaView>
            </View>
            <View style={styles.section_3}>
                <Text style={styles.footer}>Electronica 2020 - Minus Maya</Text>
            </View>
        </View>
     );
}
 
export default Form;