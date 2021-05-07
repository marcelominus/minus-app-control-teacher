import React, {useState} from 'react';
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

import moment from "moment";

// =====================================================
// INICIO DE CLASE  */}
// =====================================================
const FormInformationPicker = () => {
    //-------------------------------------------------------
    //
    const [showmode, setShowMode] = useState(false);
    const [date, setDate] = useState('')
    //-------------------------------------------------------
    //
    const showDatepicker = () => {
        setShowMode(!showmode);
    };
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
                          setDate(selectedDate)
                          setShowMode(false);
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
                            {moment(date).format('MM/DD/YYYY')}
                        </Text>
                    }

                </View>

                <Button  
                    icon="calendar-search" 
                    mode="contained" 
                    style={styles.button_picker}
                    labelStyle={styles.text_button_picker}
                >
                    Buscar
                </Button>
            </View>
        </View>
     );
}
 
export default FormInformationPicker;