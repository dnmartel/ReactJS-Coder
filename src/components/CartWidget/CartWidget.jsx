import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import { useContext } from "react";
import { Link } from 'react-router-dom';
import { CartContext } from "../../context/CartContext";

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