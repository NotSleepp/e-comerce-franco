import { useState, useEffect } from 'react';


export const ItemCount = ({ cantidadInicial=1, onAdd, stock }) => {

  const [cantidad, setCantidad] = useState(parseInt(cantidadInicial));


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
