import { useState, useEffect } from 'react';
import {products} from "../../productsMock"

export const ItemCount = ({ cantidadInicial, onAdd }) => {

  const [cantidad, setCantidad] = useState(parseInt(cantidadInicial));
  let stock = products.length;

  function menos() {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  }

  function mas() {
    if (cantidad < stock) {
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
      <button disabled={stock < 1} onClick={mas}>+</button>
      <button
        disabled={stock < 1}
        onClick={() => {
          onAdd(cantidad);
        }}
      >
        Agregar al Carrito
      </button>
    </div>
  );
}
