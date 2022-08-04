import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <>
            <nav className="NavBar">
                <Link to="/">
                    <img src="https://res.cloudinary.com/dth4axit0/image/upload/v1658892662/3786_gqjlbe.png" alt="Logo" />
                </Link>
                <ul>
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>

                    <li>
                        <p>
                            Categorias
                        </p>
                        <ul>
                            <li><Link to="/">Todos</Link></li>
                            <li><Link to="/categorias/grass">Tipo Planta</Link></li>
                            <li><Link to="/categorias/fire">Tipo Fuego</Link></li>
                            <li><Link to="/categorias/water">Tipo Agua</Link></li>
                            <li><Link to="/categorias/bug">Tipo Bicho</Link></li>
                            <li><Link to="/categorias/normal">Tipo Normal</Link></li>
                            <li><Link to="/categorias/poison">Tipo Veneno</Link></li>
                            <li><Link to="/categorias/psychic">Tipo Psiquico</Link></li>
                            <li><Link to="/categorias/electric">Tipo Electrico</Link></li>
                            <li><Link to="/categorias/fighting">Tipo Lucha</Link></li>
                            <li><Link to="/categorias/ground">Tipo Tierra</Link></li>
                            <li><Link to="/categorias/ghost">Tipo Ghost</Link></li>
                        </ul>
                    </li>

                </ul>

                <CartWidget />
            </nav>
        </>
    );
}

export default NavBar;