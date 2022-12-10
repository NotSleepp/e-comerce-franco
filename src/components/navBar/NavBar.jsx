import './navBar.css';
import {CartWidget} from '../cartWidget/CartWidget';
import {Link} from 'react-router-dom';


export const NavBar = () =>{

    return(
        <div className="navbar-Container">
            <Link to="/">
            <div className="navbar-container-img">
                <img src="https://res.cloudinary.com/dipxqc5kj/image/upload/v1669401348/My_project-1_1_nxmy0f.png" alt="logo" />
            </div>
            </Link>
            
            <ul className="navbar-container-list">
                <Link to="/" className="navbar-container-list-item">Inicio</Link>
                <Link to="/category/ARPG" className="navbar-container-list-item">Juegos ARPG</Link>
                <Link to="/category/Shooter" className="navbar-container-list-item">Shooters</Link>
                <Link to="/category/MMOARPG" className="navbar-container-list-item">Mmorpg</Link>
            </ul>
            <CartWidget/>
        </div>
    )
}
