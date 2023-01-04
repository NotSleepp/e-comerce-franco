import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom";


export const Cart = () => {

   const { cart, clearCart, removeItem, getTotalPrice } = useContext(CartContext)
   
  return (
<>
    {
      cart.length >= 1 ? <div>
      
      {cart.map((e)=>{
          return (
              <div key={e.id}>
                 <h2>{e.title}</h2> 
                 <h2>{e.publisher}</h2> 
                 <h2>{e.short_description}</h2> 
                 <h2>cantidad: {e.cantidad}</h2>
                 <button onClick={()=>removeItem(e.id)}>eliminar</button>
              </div>
          )
      })}
  </div> : <div><h2>no hay nada en el carrito</h2> <Link to={`/`}>
          <button>Volver al inicio</button>
        </Link></div>
    }
    <div>
        <button onClick={()=> clearCart()}>limpiar carrito</button>
        <h2>precio total: {getTotalPrice()}</h2> 
        <button onClick={()=> clearCart()}>Finalizar Compra</button>
      </div>
</>
    
  )
}
