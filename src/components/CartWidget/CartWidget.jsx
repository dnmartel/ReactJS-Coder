import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const CartWidget = ({itemsCarrito}) => {
    return (
        <div className='cartWidget'>
            <Badge badgeContent={itemsCarrito} color="primary">
                <ShoppingCartOutlinedIcon color="primary" />
            </Badge>
        </div>
    );
}

export default CartWidget;