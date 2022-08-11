import { Button } from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Footer from "../Footer/Footer";
import "./Cart.css";


const Cart = () => {

    const { cart, cartTotal, removeItem } = useContext(CartContext)



    if (cart.length === 0) {
        return (
            <>
                <div className="App">
                    <div className="carritoVacio">
                        <h1>Carrito Vacio</h1>
                        <Link to="/">
                            <Button variant="contained" style={{ margin: "2em 0", alignSelf: "center" }} >Volver a comprar</Button>
                        </Link>
                    </div>
                </div>
                <Footer />
            </>
        )
    }

    return (


        <>
            <div className="App">
                <h1 className="cartTitle">Resumen del Carrito</h1>
                <section className="sectionCart">
                    <div className="cartList">
                        {cart.map((e) => {

                            return (
                                <div key={e.id} className={`cartListItem ${(cart.indexOf(e) % 2 === 0) ? "filaPar" : ""}`} >
                                    <img src={e.image} alt={e.title} width="100px" />
                                    <p className="titleCartListItem">{e.title}</p>
                                    <p>Unidades: {e.cantidad}</p>
                                    <p className="priceCart"> P$ {e.cantidad * e.price}</p>
                                    <Button variant="contained" onClick={() => { removeItem(e.id) }}><DeleteOutlineIcon fontSize="small" /></Button>

                                </div>
                            )
                        })}
                    </div>

                    <div className="cardCart">
                        <div className="datosCardCart">
                            <h4>Sumario</h4>
                            <p> Cant. de Pokemones: {cart.reduce((acc, curr) => acc + curr.cantidad, 0)}</p>
                            <p className="priceCart">Total: P$ {cartTotal()}</p>


                        </div>
                        <div className="buttonsCardCart">
                            <Link to="/checkout">
                                <Button variant="contained"> Pagar </Button>
                            </Link>
                            <Link to="/">
                                <Button>Seguir comprando</Button>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>

    )
}

export default Cart;