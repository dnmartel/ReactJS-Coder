import './NavBar.css';
import logo from './clirpg-logo.png'
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
    return (
        <>
            <nav className="NavBar">
                <img src={logo} alt="Logo" />
                <ul>
                    <a href="./index.html"><li>Inicio</li></a>
                    <a href="./index.html"><li>Productos</li></a>
                    <a href="./index.html"><li>Categorias</li></a>
                </ul>
                <a href="./index.html"><p>Log In</p></a>
                <CartWidget/>
            </nav>
        </>
    );
}

export default NavBar;