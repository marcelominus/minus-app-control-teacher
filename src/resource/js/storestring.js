//-----------------------------------------------------------------
import AsyncStorage from '@react-native-async-storage/async-storage'
//----------------------------------------------------------------

//Ingresar Informacion de STRING
export const storeDataString = async (value, namestore) => {
  try {
    await AsyncStorage.setItem(namestore, value)
  } catch (e) {
    // saving error
  }
};

//Obtener Informacion de STRING
export const getDataString = async (namestore) => {
   try {
    const value = await AsyncStorage.getItem(namestore)
    return value != null ? value : null;
  } catch(e) {
    return false
  }
};

//Borrar Informacion de STRING
export const removeDataString = async (namestore) => {
  try {
    await AsyncStorage.removeItem(namestore);
    return true;
  } catch (error) {
    return false;
  }
};
