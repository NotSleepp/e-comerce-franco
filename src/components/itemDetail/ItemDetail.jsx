import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { ItemCount } from "../itemCount/ItemCount";

export const ItemDetail = ({ product }) => {

  const {addToCart} = useContext(CartContext)

  function onAdd(cantidad) {
    addToCart( {...product ,cantidad:cantidad})
  }

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.thumbnail} alt="imagen juego" />
      <h3>Plataforma: {product.platform}</h3>
      <h4>{product.short_description}</h4>
      <p>desarrollado por: {product.developer}</p>
      <div>
        <ItemCount cantidadInicial={1} onAdd={onAdd} stock={product.stock}/>
      </div>
    </div>
  );
};
