import { CartContext } from '../../context/CartContext';
import { useState, useContext } from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import "./ItemCount.css"

const ItemCount = ({ stock, initial, onRemove, onAdd, setCounter, counter }) => {

    const { clearCart, logCart } = useContext(CartContext)

    //Muestra stock
    const [muestraStock, setMuestraStock] = useState(stock - 1);
    //Inventario real de stock disponible
    const [realStock, setRealStock] = useState(stock);

    //Modifica los contadores
    const sumarProd = () => {
        if ((counter === realStock) || (realStock === 0)) { return }
        else {
            setCounter(counter + 1);
            setMuestraStock(muestraStock - 1);
        }        
    }

    //Modifica los contadores
    const restaProd = () => {
        if (counter === 1) return
        else {
            setCounter(counter - 1);
            setMuestraStock(muestraStock + 1);
        }

    }

    //Agrega al carrito
    const addToCart = () => {
        if ((counter > 0) && (realStock >= 1) && (muestraStock >= 0)) {
            onAdd(counter);
            setRealStock(realStock - counter);
            muestraStock >= 1 && setMuestraStock(muestraStock - 1);
            setCounter(1);
            realStock === 0 && setMuestraStock(0)
        }
    }

    //Reinicia el estado del producto al removerlo
    const resProd = () => {
        if (realStock === stock) {
            return
        } else {
            onAdd(0);
            onRemove();
            setCounter(initial);
            setMuestraStock(stock - 1);
            setRealStock(stock);
        }
    }

    return (

        <>

            <div className='ItemCount-section'>
                <div className='ItemCount'>

                    <Button size="small" variant="outlined" onClick={restaProd}> -1</Button>

                    <h5>{realStock >= 1 ? counter : "0"}</h5>

                    <Button size="small" variant="outlined" onClick={sumarProd}> +1</Button>

                </div>



                <Button variant="outlined" onClick={addToCart}>Agregar al carrito</Button>

                <Button className="btnCartContext" variant="outlined" onClick={resProd}>Remover Item</Button>
            <Button className="btnCartContext" variant="outlined" onClick={() => {
                clearCart()
                setCounter(1);
            }}>Vaciar Carrito</Button>
            <Button variant="outlined" onClick={logCart}>VER CART EN LOG</Button>
            <Button className="btnCartContext" variant="outlined">
                <Link to="/cart"> Ir al carrito</Link>
            </Button>

            <span><strong>Stock disponible: {muestraStock} </strong></span>
            {(realStock === 0) && (<Link to="/cart">Terminar compra</Link>)}
        </div >
        </>
    );
}

export default ItemCount;
