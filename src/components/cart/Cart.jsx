import { useContext } from "react"
import { CartContext } from "../context/CartContext"


export const Cart = () => {

   const { cart, clearCart } = useContext(CartContext)

   console.log(cart)
  return (
    <div>
        {cart.map((e)=>{
            return (
                <div key={e.id}>
                   <h2>{e.title}</h2> 
                   <h2>{e.publisher}</h2> 
                   <h2>{e.short_description}</h2> 
                   <h2>cantidad: {e.cantidad}</h2>
                </div>
            )
        })}
        <div>
          <button onClick={()=> clearCart()}>limpiar carrito</button>
        </div>
    </div>
    
  )
}
