import ItemCount from "../ItemCount/ItemCount";

const Item = ({ item }) => {
    return (
        <div className="item-flex">
            <h4> {item.title} </h4>
            <p> Descripcion: {item.description} </p>
            <h5> Precio: {item.price} </h5>
            <img src={item.pictureUrl} width="80px"/>
            <ItemCount stock={10} initial={1} />

        </div>
    )
}

export default Item;