import React, {useContext} from 'react';
//*******************************************************
//
import {View, Text} from 'react-native'
//*******************************************************
//
import ItemListInformation from './ItemListInformation';
//*******************************************************
//
import { styles } from '../../resource/style/components/information/styleListInformation';
//****************************************************************
//
import informationContext from '../../hook/information/informationContext';
// =====================================================
// INICIO DE CLASE  */}
// =====================================================
const ListInformation = () => {

    const data = [ 'https://i.pinimg.com/236x/7d/26/8e/7d268efb53aac4a3765b2b8f73925819.jpg', 'https://i.pinimg.com/474x/bb/e6/65/bbe665b8da286af863d2bf43a4ec5b38.jpg', 'https://i.pinimg.com/236x/02/c6/f5/02c6f5788974f79bac2ba5800c119bc3.jpg', 'https://i.pinimg.com/236x/98/86/ee/9886ee4a874312bc456870bba1f43951.jpg', 'https://i.pinimg.com/474x/fa/05/49/fa05498b3e591c5e58f8000f1eb402e4.jpg'] 
    //-----------------------------------------------------------------
    //ZONE USE CONTEXT
    const {arrayinformation } = useContext(informationContext);
    // =====================================================
    // INICIO DE COMPONENTE}
    // =====================================================
    return ( 
        <View style={styles.container}>
            <View style={styles.card_information}>
                { arrayinformation.map( (e , key) => (
                    <ItemListInformation key={key} e={e}/>
                ))}
            </View>
        </View>
     );
}
 
export default ListInformation;