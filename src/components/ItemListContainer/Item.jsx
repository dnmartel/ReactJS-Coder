import { Button } from "@mui/material";
import { Link } from 'react-router-dom';
import './Item.css';


const Item = ({ title, pictureUrl, type, price, id }) => {
    return (
        <div className="cardItem">
            <p className="cardItem-id">#{id}</p>
            <img src={pictureUrl} alt={title} />
            <div className="cardData">
                <h5>{title}</h5>
                <p>Tipo: {type}</p>
            </div>
            <hr />
            <h6>${price}</h6>

            <Link to={`/item/${id}`}>
                <Button size="small" variant="outlined"> Detalle </Button>
            </Link>
        </div >
    )
}

export default Item;