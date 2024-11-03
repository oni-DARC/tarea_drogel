// ROGEL CALLE DIEGO ARMANDO

// Desarrolla una aplicación en React Native que incluya un componente principal (Padre) encargado de gestionar un contador utilizando useState. 
// Este componente debe pasar tanto el valor del contador como las funciones para incrementarlo y decrementarlo a un componente secundario (Hijo). 
// El componente Hijo debe mostrar el valor actual del contador y tener dos botones para incrementarlo y decrementarlo, utilizando las funciones proporcionadas por el componente Padre. 
// Asegúrate de que al presionar los botones en el componente Hijo, el contador en el componente Padre se actualice correctamente y los cambios se reflejen en la interfaz de usuario.

import React from 'react';
import { StyleSheet, View } from 'react-native';
import Padre from './src/components/Padre';

export default function App() {
  return (
    <View style={styles.container}>
      <Padre />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});