import { ItemCount } from "../itemCount/ItemCount"
import { ItemList } from "../itemList/ItemList";


export const ItemListContainer = () => {

  function onAdd(cantidadCompra) {
    console.log(cantidadCompra);
  }

  return (
    <div>
        <ItemCount cantidadInicial={1} onAdd={onAdd}/>
        <ItemList/>
    </div>
  )
}
