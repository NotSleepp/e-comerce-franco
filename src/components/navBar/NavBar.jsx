import './navBar.css';
import {CartWidget} from '../cartWidget/CartWidget';


export const NavBar = () =>{

    return(
        <div className="navbar-Container">
            <div className="navbar-container-img">
                <img src="https://res.cloudinary.com/dipxqc5kj/image/upload/v1669401348/My_project-1_1_nxmy0f.png" alt="logo" />
            </div>
            <ul className="navbar-container-list">
                <li className="navbar-container-list-item"><a href='/#'>Inicio</a></li>
                <li className="navbar-container-list-item"><a href='/#'>Vintage</a></li>
                <li className="navbar-container-list-item"><a href='/#'>Pixel Art</a></li>
                <li className="navbar-container-list-item"><a href='/#'>Fantasia</a></li>
            </ul>
            <CartWidget/>
        </div>
    )
}
