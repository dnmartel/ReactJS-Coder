import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import Footer from "../Footer/Footer";
import ItemCount from "../ItemCount/ItemCount";
import { altTypeSelector, typeSelector } from "../auxFunctions";
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


    //Complemento para background dividido
    const colorPokemon = {
        grass: "rgb(176, 233, 129)",
        fire: "orange",
        water: "lightblue",
        ice: "lightblue",
        electric: "rgb(255, 252, 47)",
        poison: "rgb(137, 47, 255)",
        normal: "rgb(201, 201, 201)",
        ghost: "rgb(67, 40, 73)",
        dark: "rgb(67, 40, 73)",
        bug: "rgb(80, 143, 29)",
        steel: "rgb(189, 217, 221)",
        fighting: "rgb(255, 221, 177)",
        rock: "rgb(161, 161, 161)",
        ground: "rgb(150, 114, 81)",
        psychic: "rgb(156, 149, 50)",
        dragon: "rgb(143, 223, 196)",
        fairy: "rgb(212, 164, 216)",
        flying: "rgb(180, 209, 208)",
    }
    //Tomo el color del objeto segun el tipo de pokemon
    const colorPokemonSelected = colorPokemon[`${type}`];
    //Lo coloco dentro del body JS DOM
    document.body.style.backgroundImage = `linear-gradient(180deg, #eeeffc 50%, ${colorPokemonSelected} 50%)`;

    
    return (
        <div className="AppDetail">
            <div className="itemDetail-container">
                <section>
                    <h1 className="titleBGDetail"> {title} </h1>
                    <img src={altImage} alt={title} />
                </section>
                <aside className="cardAside">
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

                    <hr className="hrDetail" />

                    <p className="abilityDetail"><strong>Habilidad principal:</strong> {ability?.name} </p>
                    <p className="abilityDetail"><strong>Habilidad secundaria:</strong> {altAbility?.name} </p>

                    <hr className="hrDetail" />

                    <div className="hwDetailContainer">
                        <div className="heightDetailSubContainer">
                            <p className="heightDetail"> {height} m.</p>
                            <p className="hwDetail"> Alto </p>
                        </div>
                        <hr />
                        <div className="weightDetailSubContainer">
                            <p className="weightDetail"> {weight} kg</p>
                            <p className="hwDetail">Peso</p>
                        </div>
                    </div>
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