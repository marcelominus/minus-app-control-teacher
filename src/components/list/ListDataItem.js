import React from 'react';
//*******************************************************
//
import {View, Text} from 'react-native'
//*******************************************************
//Importamos elementos de LISTA
import { List } from 'react-native-paper';
//*******************************************************
//
import {styles} from '../../resource/style/components/list/styleListDataItem';

// =====================================================
// INICIO DE CLASE  */}
// =====================================================
const LisDataItem = ({element, navigation}) => {

    //-------------------------------------------------------
    //
    const onPressElement = () => {
        navigation.navigate('information', { itemId: element.initialins, itemIdDes : element.identifierins });
    }
    // =====================================================
    // INICIO DE COMPONENTE}
    // =====================================================
    return ( 
        <View>
            <List.Item
              title={element.initialins}
              description={element.descriptionins}
              left={props => <List.Icon {...props} icon="account-details" />}
              right={props => <List.Icon {...props} icon="chevron-right" />}
              onPress={onPressElement}
              titleStyle= {styles.title_list}
              descriptionStyle ={styles.title_description}
              style={styles.list_card}
            />
        </View>
     );
}
 
export default LisDataItem;