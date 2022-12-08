import { useState, useEffect } from 'react';
 

export const ItemCount = ({ cantidadInicial, onAdd }) => {

  const [cantidad, setCantidad] = useState(parseInt(cantidadInicial));
  let stock = [];

  function menos() {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  }

  function mas() {
    if (cantidad < stock.length) {
      setCantidad(cantidad + 1);
    }
  }

  useEffect(() => {
    setCantidad(parseInt(cantidadInicial));
  }, [cantidadInicial]);

  return (
    <div>
      <button onClick={menos}>-</button>
      <p>{cantidad}</p>
      <button disabled={stock.length < 1} onClick={mas}>+</button>
      <button
        disabled={stock.length < 1}
        onClick={() => {
          onAdd(cantidad);
        }}
      >
        Agregar al Carrito
      </button>
    </div>
  );
}
