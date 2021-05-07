import React, {useState} from 'react';
//*******************************************************
//
import {View, Text} from 'react-native'
//*******************************************************
//
import { Button, IconButton, Menu, Divider, Provider } from 'react-native-paper';
//*******************************************************
//
import {styles} from '../../resource/style/components/tool/styleToolBarDrawer';
// =====================================================
// INICIO DE CLASE  */}
// =====================================================
const ToolBarDrawer = ({navigation, title}) => {
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);

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