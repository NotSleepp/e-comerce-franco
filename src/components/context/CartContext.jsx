import {createContext, useState} from "react";

export const CartContext = createContext();

export const CartContextProvider = ({children}) => {
  
    const [cart, setcart] = useState([]);


    const addToCart = (element) =>{

        if(isInCart(element)){
            
            let newArray = cart.map((producto)=>{
                if(producto.id === element.id){
                    let newProducto = {
                        ...producto,
                        cantidad : producto.cantidad + element.cantidad
                    }
                    return newProducto;
                } else {
                    return producto;
                }
                
            })

            setcart(newArray);

        }else{
            setcart([...cart , element])
        }

    }

    const isInCart = (item)=>{

        return cart.some(element => element.id === item.id)

    }


    const clearCart=()=>{
        setcart([]);
    }

    const data = {
        cart,
        addToCart,
        clearCart
    }
    
    
    return (
    <CartContext.Provider value={data}>
        {children}
    </CartContext.Provider>
  )
}
