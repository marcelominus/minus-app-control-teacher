import React, {useState, useContext, useEffect} from 'react';
//*******************************************************
//
import {View, Text} from 'react-native'
//*******************************************************
//
import { Button } from 'react-native-paper';

//*******************************************************
//
import DateTimePicker from '@react-native-community/datetimepicker';

//*******************************************************
//
import {styles} from '../../resource/style/components/information/styleFormInformationPicker';
//****************************************************************
//
import moment from "moment";
//****************************************************************
//
import {getData} from '../../resource/js/storearray';
//****************************************************************
//
import informationContext from '../../hook/information/informationContext';
//****************************************************************
//
import {messageWarning, messageSuccess, messageDanger} from '../../resource/js/message';
// =====================================================
// INICIO DE CLASE  */}
// =====================================================
const FormInformationPicker = ({itemIdDes}) => {
    //-------------------------------------------------------
    //
    const [showmode, setShowMode] = useState(false);
    const [date, setDate] = useState('');
    const [user, setUser] = useState('');

    //-----------------------------------------------------------------
    //ZONE USE CONTEXT
    const { functionDisableCard, functionReadPicker, functionArrayInformation} = useContext(informationContext);1
     //-----------------------------------------------------------------
    //ZONE USE EFFECT
    useEffect(() => {
        getData('datauser').then( i => {
            setUser(i[0].identifier)
        })
    }, [])

    //-------------------------------------------------------
    //
    const showDatepicker = () => {
        setShowMode(!showmode);
        functionDisableCard(false);
    };

    const onPressPicker = () => {
        let dateEnd = moment(date).format('YYYY/MM/DD');
        let arrayDate = dateEnd.split('/');
        const year = arrayDate[0];
        const month = arrayDate[1];
        const day = arrayDate[2];

        if(month === '' || year === '' || day ==='' || arrayDate[0] === 'Invalid date'){
            messageDanger('Datos no seleccionados, escoja una fecha');
        }else{
            functionReadPicker(user, itemIdDes, year, month, day).then( e => {
                if( e === false){
                    messageWarning('Sin Informacion, Datos no Encontrados')
                }else{
                    functionArrayInformation(e);
                    functionDisableCard(true);
                }
            });
        }
    }
    // =====================================================
    // INICIO DE COMPONENTE}
    // =====================================================
    return ( 
        <View>
            <View>
                <Button 
                    icon="av-timer" 
                    mode="contained" 
                    onPress={showDatepicker}
                    style={styles.button_picker}
                    labelStyle={styles.text_button_picker}
                >
                    Elige la Fecha
                </Button>
                {
                  showmode ? (<DateTimePicker 
                    value={ new Date() }
                    mode='default'
                    display='default'
                    onChange={ (event, selectedDate) => {
                      if(event.type == "set") {          //ok button
                            setShowMode(false);
                            setDate(selectedDate);
                      } else {                           //cancel Button
                          setShowMode(false);
                      }
                    }} 
                    />):(null)
                }
                <View style={styles.badge_picker}>
                    { date === '' ? 
                        <Text style={styles.text_badge_picker}>
                            No se eligio Ninguna Fecha
                        </Text>
                    :
                        <Text style={styles.text_badge_picker}>
                            {moment(date).format('YYYY/MM/DD')}
                        </Text>
                    }
                </View>

                <Button  
                    icon="calendar-search" 
                    mode="contained" 
                    style={styles.button_picker}
                    labelStyle={styles.text_button_picker}
                    onPress={onPressPicker}
                >
                    Buscar
                </Button>
            </View>
        </View>
     );
}
 
export default FormInformationPicker;