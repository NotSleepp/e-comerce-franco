import {FaShoppingCart} from 'react-icons/fa';
import './cartWidget.css'
import {Link} from 'react-router-dom'

export const CartWidget = () => {
    return(
        
        <Link to="/cart">
            <div className='contenedor-carrito'>
                <FaShoppingCart style={{}} size={'2rem'} color={'#e5e4e2'} />
                <p className='carrito-contador'>1</p> 
            </div>
        </Link>     
    )
} 