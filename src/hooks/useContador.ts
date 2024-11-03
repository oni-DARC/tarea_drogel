import { useState } from 'react';

const useContador = (valorInicial: number = 0) => {
  const [contador, setContador] = useState<number>(valorInicial);

  const incrementar = () => setContador(contador + 1);
  const decrementar = () => setContador(contador - 1);

  return {
    contador,
    incrementar,
    decrementar,
  };
};

export default useContador;
