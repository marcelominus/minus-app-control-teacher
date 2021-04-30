import React from 'react';

import {View, Text, StyleSheet, Image} from 'react-native';
//---------------------------------------------------------
import { 
    DrawerContentScrollView, DrawerItem, DrawerItemList
} from '@react-navigation/drawer'
// =====================================================
// INICIO DE CLASE  */}
// =====================================================
const DrawerContent = ({...props}) => {
   
    return ( 
        <View style={styles.container}>
            {/* <View style={styles.section_img}>
                <Image
                    source={require('../resource/img/etnf.jpg')}
                    style={styles.image}
                />
            </View> */}
            <DrawerContentScrollView>
                {/* <DrawerItemList {...props}/>
                <DrawerItem 
                    label='LAURA VALENCIA'
                /> */}
                <DrawerItemList {...props}/>
            </DrawerContentScrollView>
        </View>
     );
}
 
const styles = StyleSheet.create({
    container : {
        flex : 1,
    },
     ///-------------------------------- BACKGROUND TOTAL
    image: {
    
    },
    section_img : {
        backgroundColor : 'blue',
    }
})
export default DrawerContent;