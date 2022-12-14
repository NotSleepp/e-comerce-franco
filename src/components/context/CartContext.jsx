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
                        cantidad : element.cantidad
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

    const removeItem = (itemId)=>{
        const newElement = cart.filter((productos)=> productos.id !== itemId);
        setcart(newElement);
    }


    const getQuantityById= (id) =>{

        const producto = cart.find(e => e.id === id);
        return producto?.cantidad;

    }

    const getTotalPrice = () => {

        const total = cart.reduce((acc, element) =>{
            return acc + (element.precio * element.cantidad)
        },0)

        return total

    }

    const data = {
        cart,
        addToCart,
        clearCart,
        removeItem,
        getQuantityById,
        getTotalPrice
    }
    
    
    return (
    <CartContext.Provider value={data}>
        {children}
    </CartContext.Provider>
  )
}
