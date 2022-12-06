import {FaShoppingCart} from 'react-icons/fa';
import './cartWidget.css'

export const CartWidget = () => {
    return(
        
        <div>
           <a href='/#'><FaShoppingCart style={{position: "relative"}} size={'2rem'} color={'#e5e4e2'} /></a>
            <p className='carrito-contador'>1</p> 
        </div>
    )
} 