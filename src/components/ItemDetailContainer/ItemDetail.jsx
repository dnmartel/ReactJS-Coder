import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount"
import Button from '@mui/material/Button';
import "./ItemDetail.css"
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ detail }) => {

    const { title, price, pictureUrl, description, stock } = detail;

    const [counter, setCounter] = useState(0);

    const onAdd = (counter) => {
        setCounter(counter);
        addItem(detail, counter);
    };

    const { addItem, removeItem, clearCart, logCart } = useContext(CartContext)

    return (
        <>
            <div className="itemDetail-container">
                <section>
                    <img src={pictureUrl} alt={title} />
                </section>
                <aside>
                    <h2> {title} </h2>
                    <p> Descripcion: {description.repeat(10)} </p>
                    <h3> Precio: {price} </h3>{
                        (counter === 0) ? <ItemCount stock={stock} initial={1} precio={price} onAdd={onAdd} /> :
                            (<>
                                {<ItemCount stock={stock} initial={1} precio={price} onAdd={onAdd} />}
                                <Button className="btnCartContext" variant="outlined" onClick={() => removeItem(detail.id)}>Remover Item</Button>
                                <Button className="btnCartContext" variant="outlined" onClick={() => {
                                    clearCart()
                                    setCounter(0);
                                }}>Vaciar Carrito</Button>
                                <Button variant="outlined" onClick={logCart}>VER CART EN LOG</Button>
                                <Button className="btnCartContext" variant="outlined">
                                    <Link to="/cart"> Ir al carrito</Link>
                                </Button>
                            </>
                            )
                    }

                </aside>
            </div>

        </>
    )
}







export default ItemDetail;