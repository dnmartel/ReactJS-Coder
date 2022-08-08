import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import Footer from "../Footer/Footer";
import ItemCount from "../ItemCount/ItemCount";
import { altTypeSelector, typeSelector } from "../ItemListContainer/selectorFunctions";
import "./ItemDetail.css";


const ItemDetail = ({ detail }) => {

    const { title, price, altImage, description, stock, id, ability, altAbility, type, altType, height, weight } = detail;

    const { addItem, removeItem } = useContext(CartContext)

    const [counter, setCounter] = useState(1);

    const onAdd = (counter) => {
        setCounter(counter);
        addItem(detail, counter);
    };

    const onRemove = () => {
        removeItem(id)
    }

    return (
        <div className="App">
            <div className="itemDetail-container">
                <section>
                    <img src={altImage} alt={title} />
                </section>
                <aside>
                    <div className={`titleDetailContainer type-${type}`} >
                        <h2 className="titleDetail"> {title} </h2>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                        <div className={`cardItemCategories type-${type} `}>
                            {typeSelector(type)}
                        </div>
                        {altType === undefined ? null : <div style={{ marginLeft: "1em" }} className={`cardItemCategories  type-${altType}`}>
                            {altTypeSelector(altType)}
                        </div>}
                    </div>
                    <p className="descriptionDetail"> {description} </p>
                    <hr />
                    <p className="abilityDetail"><strong>Habilidad principal:</strong> {ability?.name} </p>
                    <p className="abilityDetail"><strong>Habilidad secundaria:</strong> {altAbility?.name} </p>
                    <p className="abilityDetail"> {height} m </p>
                    <p className="abilityDetail"> {weight} kg</p>
                    <div className="priceDetailContainer">
                        <h3 className="priceDetail"> {price * counter} </h3>
                        <h6 className="unitPriceDetail"> {price}/u </h6>
                    </div>

                    <ItemCount stock={stock} initial={1} onRemove={onRemove} onAdd={onAdd} counter={counter} setCounter={setCounter} />
                </aside>
            </div>
            <Footer />
        </div>
    )
}







export default ItemDetail;