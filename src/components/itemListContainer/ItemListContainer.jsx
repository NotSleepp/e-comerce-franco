import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../productsMock";
import { ItemCount } from "../itemCount/ItemCount"
import { ItemList } from "../itemList/ItemList";


export const ItemListContainer = ({greeting}) => {


  function onAdd(cantidadCompra) {
    console.log(cantidadCompra);
  }

  return (
    <div>
        <h3 style={{marginTop: "2rem", marginLeft: "1rem"}}>{greeting}</h3>
        <ItemCount cantidadInicial={1} onAdd={onAdd}/>
        <ItemList/>
    </div>
  )
}
