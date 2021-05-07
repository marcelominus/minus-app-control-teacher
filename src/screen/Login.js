import React from 'react';
//*******************************************************
//
import {View, Text} from 'react-native';

//*******************************************************
//
import {styles} from '../resource/style/screen/styleLogin';

//*******************************************************
//
import ToolBarNormal from '../components/tool/ToolBarNormal';
import FormLogin from '../components/login/FormLogin';
// =====================================================
// INICIO DE CLASE  */}
// =====================================================
const Login = ({navigation}) => {
    // =====================================================
    // INICIO DE COMPONENTE}
    // =====================================================
    return ( 
        <View style={styles.container}>
            {/* --------------------------------------------------  */}
            <View style = {styles.section_1}>
              <ToolBarNormal title={'Login'}/>
            </View>
            {/* --------------------------------------------------  */}
            <View style = {styles.section_2}>
              <FormLogin navigation={navigation}/>
            </View>
            <View style = {styles.section_3}>
            </View>
            {/* --------------------------------------------------  */}
            <View style = {styles.section_4}>
              <Text style={styles.footer}>Electronica 2020 - Minus Maya</Text>
            </View>
        </View>
     );
}
 
export default Login;