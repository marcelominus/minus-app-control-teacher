import React from 'react';
//*******************************************************
//
import {View, Text} from 'react-native';
//*******************************************************
//
import Modal from 'react-native-modal';
//*******************************************************
//
import {styles} from '../../resource/style/components/form/styleModalData';

// =====================================================
// INICIO DE CLASE  */}
// =====================================================
const ModalData = ({openModal, setOpenModal}) => {
    // =====================================================
    // INICIO DE COMPONENTE}
    // =====================================================
    return ( 
        <Modal
            isVisible={openModal}
            animationInTiming={600}
            animationOutTiming={600}
            onBackdropPress={() => setOpenModal(false)}>
            <View style={styles.container}>
                <Text>LENNY LAURA VALENCIA</Text>
            </View>
        </Modal>
     );
}
 
export default ModalData;