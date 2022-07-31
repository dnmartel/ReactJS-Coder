import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {

    const { cart, cartTotal, removeItem } = useContext(CartContext)

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }

    if (cart.length === 0) {

        return (<>
            <div style={{
                textAlign: "center"
            }}>
                <h1>Carrito Vacio</h1>
                <button style={{ color: "black", margin: "2em 0", display: "block" }} onClick={goBack}>Volver a comprar cositas</button>
            </div>

        </>)
    }
    return (


        <div>
            <p>Resumen del Carrito</p>
            <p>Elementos: {cart.length}</p>

            {cart.map((e) => {

                return (
                    <>
                        <div key={e.id} style={{ display: "flex", justifyContent: "space-between", margin: "1.5em 3em" }}>
                            <img src={e.image} alt={e.title} width="75px" />
                            <h2>Pokemon: {e.title}</h2>
                            <h3>Cantidad: {e.cantidad}</h3>
                            <p>Subtotal: {e.cantidad * e.price}</p>
                            <button onClick={() => { removeItem(e.id) }}>Quitar</button>

                        </div>
                    </>)

            })}

            <h2 style={{ textAlign: "right", marginRight: "1em" }}>Total: {cartTotal()}</h2>

        </div>

    )
}

export default Cart