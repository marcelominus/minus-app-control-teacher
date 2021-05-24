//*******************************************************
//
import React from 'react';
//*******************************************************
//Importamos el Navigation Contanier
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

//*******************************************************
//
import { View, Text, } from 'react-native';
//*******************************************************
//
import About from '../screen/About';
import Form from '../screen/Form';
import Information from '../screen/Information';
import InformationList from '../screen/InformationList';
import Login from '../screen/Login';
import TechnicalSupport from '../screen/TechnicalSupport';
import Start from '../screen/Start';

// import DrawerContent from '../components/routes/DrawerContent';
import DrawerContent from '../components/routes/DrawerContent'
//*******************************************************
//
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// =====================================================
// INICIO DE CLASE  */}
// =====================================================
const Routes = () => {


    const DrawerNavigation = () => {
        return(
            <Drawer.Navigator drawerContent={props => <DrawerContent  {...props}/>}>
                <Drawer.Screen 
                    name='form' 
                    component={Form} 
                    options={{
                        title: 'Formulario',
                }}/> 
                <Drawer.Screen 
                    name='list' 
                    component={InformationList} 
                    options={{
                        title: 'Informacion',
                }}/> 
                <Drawer.Screen 
                    name='technical' 
                    component={TechnicalSupport} 
                    options={{
                        title: 'Soporte Tecnico',
                }}/> 
                {/* <Drawer.Screen 
                    name='about' 
                    component={About} 
                    options={{
                        title: 'Ayuda',
                }}/>  */}
            </Drawer.Navigator>
        )
    }
    // =====================================================
    // INICIO DE COMPONENTE}
    // =====================================================
    return ( 
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="start"
                    component={Start}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen 
                    name="login"
                    component={Login}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen 
                    name="form"
                    options={{
                        headerShown: false,
                    }}
                    component={DrawerNavigation}
                />
                <Stack.Screen 
                    name="information"
                    options={{
                        headerShown: false,
                    }}
                    component={Information}
                />
            </Stack.Navigator>
        </NavigationContainer>
     );
}
 
export default Routes;