// El componente Hijo debe mostrar el valor actual del contador y tener dos botones para incrementarlo y decrementarlo, utilizando las funciones proporcionadas por el componente Padre. 
// Asegúrate de que al presionar los botones en el componente Hijo, el contador en el componente Padre se actualice correctamente y los cambios se reflejen en la interfaz de usuario.

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

interface HijoProps {
  contador: number;
  incrementar: () => void;
  decrementar: () => void;
}

const Hijo: React.FC<HijoProps> = ({ contador, incrementar, decrementar }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.counter}>Contador en el componente Hijo: {contador}</Text>
      <Button title="Incrementar" onPress={incrementar} />
      <Button title="Decrementar" onPress={decrementar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
  },
  counter: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default Hijo;
