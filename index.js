/**
 * @format
 */
import * as React from 'react';
import {AppRegistry} from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import App from './App';
import {name as appName} from './app.json';
import FlashMessage from "react-native-flash-message";
// =====================================================
// INICIO DE CLASE  */}
// =====================================================
export default function Main() {
  const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#354F52',
    accent: '#f1c40f',
  },
};

  return (
      <PaperProvider theme={theme}>
        <App />
        <FlashMessage position="top" titleStyle={{ textAlign : 'center'}}/>
      </PaperProvider>
  );
}
AppRegistry.registerComponent(appName, () => Main);
