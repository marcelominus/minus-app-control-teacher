//-----------------------------------------------------------------
import AsyncStorage from '@react-native-async-storage/async-storage'
//----------------------------------------------------------------

//Ingresar Informacion de ARRAY
export const storeData = async (value, namestore) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(namestore, jsonValue);
  } catch (e) {
    // saving error
  }
};

//Obtener Informacion de ARRAY
export const getData = async (namestore) => {
  try {
    const jsonValue = await AsyncStorage.getItem(namestore);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

//Borrar Informaocion de ARRAY
export const removeData = async (namestore) => {
  try {
    await AsyncStorage.removeItem(namestore);
    return true;
  } catch (error) {
    return false;
  }
};
