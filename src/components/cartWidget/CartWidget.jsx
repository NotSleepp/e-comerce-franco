import {FaShoppingCart} from 'react-icons/fa';
import './cartWidget.css';
import {Link} from 'react-router-dom';
import { useContext} from 'react';
import { CartContext } from '../context/CartContext';

export const CartWidget = () => {
    const {cart} = useContext(CartContext)

    return(
        
        <Link to="/cart">
            <div className='contenedor-carrito'>
                <FaShoppingCart style={{}} size={'2rem'} color={'#e5e4e2'} />
                <p className='carrito-contador'>{cart.length}</p> 
            </div>
        </Link>     
    )
} 