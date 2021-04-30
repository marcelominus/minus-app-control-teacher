import React from 'react';
//*******************************************************
//
import {View, Text} from 'react-native';
//*******************************************************
//
import {styles} from '../resource/style/screen/styleInformation';
import { Button } from 'react-native-paper';

// =====================================================
// INICIO DE CLASE  */}
// =====================================================
const Information = ({navigation}) => {

    const onPressDos = () => {
      navigation.navigate('list');
    }
    // =====================================================
    // INICIO DE COMPONENTE}
    // =====================================================
    return ( 
        <View style={styles.container}>
            <Text>DESDE EL INFORMATION</Text>
             <Button icon="camera" mode="contained" onPress={onPressDos}>
              Press me
            </Button>
        </View>
     );
}
 
export default Information;