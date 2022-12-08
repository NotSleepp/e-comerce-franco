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
                <li className="navbar-container-list-item"><a href='/#'>Juegos PC</a></li>
                <li className="navbar-container-list-item"><a href='/#'>Shooters</a></li>
                <li className="navbar-container-list-item"><a href='/#'>Mmorpg</a></li>
            </ul>
            <CartWidget/>
        </div>
    )
}
