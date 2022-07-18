import { Button } from "@mui/material";
import { Link } from 'react-router-dom';
import './Item.css';


const Item = ({ title, pictureUrl, description, price, id }) => {
    return (
        <div className="item-flex">
            <img src={pictureUrl} alt={title} />
            <div>
                <h5>${price}</h5>
                <p>{description}</p>
                <h6> {title} </h6>
            </div>
            <Link to={`/item/${id}`}><Button size="small" variant="outlined"> Ver detalle del producto </Button></Link>
        </div >
    )
}

export default Item;