import React, {useState, useContext} from 'react';
//*******************************************************
//
import {View, Text, Alert} from 'react-native'
//****************************************************************
//
import { Button, IconButton, Menu, Divider, Provider } from 'react-native-paper';
//*******************************************************
//
import {styles} from '../../resource/style/components/tool/styleToolBarDrawer';
//****************************************************************
//
import toolContext from '../../hook/tool/toolContext';

//************************************************************
// =====================================================
// INICIO DE CLASE  */}
// =====================================================
const ToolBarDrawer = ({navigation, title}) => {
  const [visible, setVisible] = useState(false);
  const {functionResetUser} = useContext(toolContext)
  const openMenu = () => {
    Alert.alert('Salir', 'Esta seguro de Salir', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {text: 'YES', onPress: () => {
        functionResetUser();
        navigation.navigate('start');
      }},
    ]);
  };

  const closeMenu = () => setVisible(false);

    // =====================================================
    // INICIO DE COMPONENTE}
    // =====================================================
    return ( 
        <View style={styles.container}>
            <IconButton
              icon="menu"
              color={"white"}
              size={25}
              onPress={() => {navigation.openDrawer()}}
            />
            <Text style={styles.text_bar}>{title}</Text>
            <IconButton
              icon="exit-run"
              color={"white"}
              size={25}
              onPress={openMenu}
            />
            
        </View>
     );
}
 
export default ToolBarDrawer;