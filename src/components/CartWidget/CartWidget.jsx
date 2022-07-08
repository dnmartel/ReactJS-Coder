import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const CartWidget = ({itemsCarrito}) => {
    return (
        <>
            <Badge badgeContent={itemsCarrito} color="primary">
                <ShoppingCartOutlinedIcon color="primary" />
            </Badge>
        </>
    );
}

export default CartWidget;