import { Button } from "@mui/material";

let style = "font-size: .8em"

const Item = ({ item }) => {
    return (
        <div className="item-flex">
            <h5> {item.title} </h5>
            <p style={{ style }}> Descripcion: {item.description} </p>
            <h5> Precio: {item.price} </h5>
            <img src={item.pictureUrl} alt={item.title} width="80px" />

            <Button size="small" variant="outlined" onClick={() => {alert("Aca deberia aparecer el detalle, todavia no lo vimos")}

            }> Ver detalle del producto </Button>
            {/* <ItemCount stock={10} initial={1} /> */}
        </div>
    )
}

export default Item;