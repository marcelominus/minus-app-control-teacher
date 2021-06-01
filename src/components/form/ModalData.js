import React, {useEffect, useState} from 'react';
//*******************************************************
//
import {View, Text} from 'react-native';
//*******************************************************
//
import Modal from 'react-native-modal';
//*******************************************************
//
import {styles} from '../../resource/style/components/form/styleModalData';
//
import {getData} from '../../resource/js/storearray';
import {getDataString} from '../../resource/js/storestring';
// =====================================================
// INICIO DE CLASE  */}
// =====================================================
const ModalData = ({openModal, setOpenModal, informationModal}) => {
  //-------------------------------------------------------
  //CONDICIONAL
  if (informationModal.length === 0) return null;

  //-------------------------------------------------------
  //ZONE USE STATE
  const [name, setName] = useState('');
  //-------------------------------------------------------
  //ZONE USE EFFECT
  useEffect(() => {
    getData('datauser').then(e => {
      setName(`${e[0].name} ${e[0].surname}`);
    });
  }, []);
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
        <Text style={styles.title}>Nombre</Text>
        <Text style={styles.information}>{name}</Text>
        <Text style={styles.title}>Fecha</Text>
        <Text style={styles.information}>{informationModal[0].datadat}</Text>
        <Text style={styles.title}>Tiempo de inicio</Text>
        <Text style={styles.information}>
          {informationModal[0].timestartdat}
        </Text>
        <Text style={styles.title}>Tiempo de final</Text>
        <Text style={styles.information}>{informationModal[0].timeenddat}</Text>
        <Text style={styles.title_footer}>Muchas Gracias por su Tiempo</Text>
      </View>
    </Modal>
  );
};

export default ModalData;
