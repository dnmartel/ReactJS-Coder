import './NavBar.css';
import logo from './clirpg-logo.png'
function NavBar() {
    return (
        <>
            <nav className="NavBar">
                <img src={logo} />
                <ul>
                    <a href="#"><li>Inicio</li></a>
                    <a href="#"><li>Productos</li></a>
                    <a href="#"><li>Categorias</li></a>
                </ul>
                <a href="#"><p>Log In</p></a>
            </nav>
        </>
    );
}

export default NavBar;