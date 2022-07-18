import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"

const ItemDetail = ({ detail }) => {
    
    const { title, price, pictureUrl, description, stock } = detail;


    return (
        <>
            <div className="itemDetail-container">
                <section>
                    <img src={pictureUrl} alt={title} />
                </section>
                <aside>
                    <h2> {title} </h2>
                    <p> Descripcion: {description.repeat(10)} </p>
                    <h3> Precio: {price} </h3>
                    <ItemCount stock={stock} initial={1} precio={price} />
                </aside>
            </div>

        </>
    )
}







export default ItemDetail;