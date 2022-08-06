import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@mui/material";
import Footer from "../Footer/Footer";
import "./Cart.css";


const Cart = () => {

    const { cart, cartTotal, removeItem } = useContext(CartContext)

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }

    if (cart.length === 0) {
        return (
            <div>
                <div className="carritoVacio">
                    <h1>Carrito Vacio</h1>
                    <Button variant="outlined" style={{ margin: "2em 0", alignSelf: "center" }} onClick={goBack}>Volver a comprar</Button>
                </div>
                <Footer />
            </div>
        )
    }

    return (
        <div>
            <div style={{
                textAlign: "center"
            }}>
                <p>Resumen del Carrito</p>
                <p>Elementos: {cart.length}</p>

                {cart.map((e) => {
                    return (

                        <div key={e.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "1.5em 3em" }}>
                            <img src={e.image} alt={e.title} width="75px" />
                            <h3>Pokemon: {e.title}</h3>
                            <h3>Cantidad: {e.cantidad}</h3>
                            <p>Subtotal: {e.cantidad * e.price}</p>
                            <Button variant="outlined" style={{ height: "2em" }} onClick={() => { removeItem(e.id) }}>X</Button>

                        </div>
                    )

                })}

                <h2 style={{ textAlign: "right", marginRight: "1em" }}>Total: {cartTotal()}</h2>

            </div>
            <Link to="/checkout">
                <Button variant="outlined" >
                    Checkout</Button>
            </Link>

            <Footer />
        </div>

    )
}

export default Cart;