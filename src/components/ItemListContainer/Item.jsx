import { Button } from "@mui/material";
import { Link } from 'react-router-dom';
import { typeSelector, altTypeSelector } from "../auxFunctions";
import './Item.css';


const Item = ({ title, image, type, altType, price, id, pid }) => {



    return (
        <>
            <div className="cardItem">
                <div className={`cardColor type-${type}`} >
                    <Link className="cardItemLink" to={`/item/${id}`}>
                        <img src="https://res.cloudinary.com/dth4axit0/image/upload/v1659474764/pkball_sqzqiv.png" className="cardColorImg" alt={id} />
                    </Link>
                </div>
                <div className="cardInterior">
                    <img src={image} alt={title} />
                    <div className="cardData">
                        <h5 className="cardItemTitle">{title}</h5>
                        <p className="cardItemId"> #{pid.toString().padStart(3, '0')}</p>

                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                            <div className={`cardItemCategories type-${type} `}>
                                {typeSelector(type)}
                            </div>
                            {altType === undefined ? null : <div style={{ marginLeft: "1em" }} className={`cardItemCategories  type-${altType}`}>
                                {altTypeSelector(altType)}
                            </div>}
                        </div>

                    </div>
                    <hr />
                    <h6 className="cardItemPrice">${price}</h6>
                </div>

                <Link className="cardItemLink" to={`/item/${id}`}>
                    <Button className="cardItemButton" size="small" variant="contained"> Ver más </Button>
                </Link>
            </div >
        </>
    )
}

export default Item;

