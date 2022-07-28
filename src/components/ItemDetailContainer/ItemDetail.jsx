import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ detail }) => {

    const { title, price, pictureUrl, description, stock } = detail;

    const { addItem, removeItem } = useContext(CartContext)

    const [counter, setCounter] = useState(1);

    const onAdd = (counter) => {
        setCounter(counter);
        addItem(detail, counter);
    };

    const onRemove = () => {
        removeItem(detail.id)
    }


    return (
        <>
            <div className="itemDetail-container">
                <section>
                    <img src={pictureUrl} alt={title} />
                </section>
                <aside>
                    <h2> {title} </h2>
                    <p> Descripcion: {description} </p>
                    <h3> Precio: {price} </h3>
                    <ItemCount stock={stock} initial={1} onRemove={onRemove} onAdd={onAdd} counter={counter} setCounter={setCounter} />
                </aside>
            </div>

        </>
    )
}







export default ItemDetail;