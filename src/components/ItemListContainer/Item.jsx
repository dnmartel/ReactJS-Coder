import { Button } from "@mui/material";
import { Link } from 'react-router-dom'; 
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import WaterIcon from '@mui/icons-material/Water';
import BoltIcon from '@mui/icons-material/Bolt';
import GrassIcon from '@mui/icons-material/Grass';
import './Item.css';


const Item = ({ title, image, categoryId, price, id, pid }) => {
    return (
        <>
            <div className="cardItem">

                <div className={`cardColor type-${categoryId}`} />
                <div className="cardInterior">
                    <img src={image} alt={title} />
                    <div className="cardData">
                        <h5 className="cardItemTitle">{title}</h5>
                        <p className="cardItemId"># {pid}</p>

                        <div className={`cardItemCategories type-${categoryId}`}>
                            {(categoryId === "fire") ? (<><LocalFireDepartmentIcon style={{fontSize: "medium"}} className="iconType"/><p className="cardItemCat">Fuego</p></>) : ((categoryId === "water") ? <><WaterIcon style={{fontSize: "medium"}} className="iconType"/><p className="cardItemCat">Agua</p></> : (categoryId === "grass") ? <><GrassIcon style={{fontSize: "medium"}} className="iconType"/><p className="cardItemCat">Planta</p></> : (categoryId === "electric") && <><BoltIcon style={{fontSize: "medium"}} className="iconType"/><p className="cardItemCat">Electrico</p></>)}
                        </div>

                    </div>
                    <hr />
                    <h6 className="cardItemPrice">${price}</h6>
                </div>

                <Link className="cardItemLink" to={`/item/${id}`}>
                    <Button className="cardItemButton" size="small" variant="outlined"> Detalle </Button>
                </Link>
            </div >
        </>
    )
}

export default Item;

