import { Link } from 'react-router-dom'
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const CartWidget = () => {

    const { cartNum } = useContext(CartContext);



    return (
        <div className='cartWidget'>
            <Link to="/cart">
                <Badge badgeContent={cartNum()} color="primary">
                    <ShoppingCartOutlinedIcon color="primary" />
                </Badge>
            </Link>
        </div>
    );
}

export default CartWidget;