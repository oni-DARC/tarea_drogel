// Este componente debe pasar tanto el valor del contador como las funciones para incrementarlo y decrementarlo a un componente secundario (Hijo).

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Hijo from './Hijo';
import useContador from '../hooks/useContador';

const Padre: React.FC = () => {
  const { contador, incrementar, decrementar } = useContador();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador en el componente Padre: {contador}</Text>
      <Hijo contador={contador} incrementar={incrementar} decrementar={decrementar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default Padre;
