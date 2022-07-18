import './NavBar.css';
import logo from './clirpg-logo.png'
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom'

function NavBar({ itemsCarrito }) {
    return (
        <>
            <nav className="NavBar">
                <Link to="/">
                    <img src={logo} alt="Logo" />
                </Link>
                <ul>
                    <Link to="/">Inicio</Link>
                    <Link to="/categorias/cat1">Categoria 1</Link>
                    <Link to="/categorias/cat2">Categoria 2</Link>
                </ul>
                
                <CartWidget itemsCarrito={itemsCarrito} />
            </nav>
        </>
    );
}

export default NavBar;