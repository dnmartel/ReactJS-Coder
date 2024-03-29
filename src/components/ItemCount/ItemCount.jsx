import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import "./ItemCount.css"

const ItemCount = ({ stock, initial, onRemove, onAdd, setCounter, counter }) => {

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



        <div className='ItemCount-section'>
            <div className='ItemCount'>

                <Button size="small" variant="contained" onClick={restaProd}> -1</Button>

                <h5>{realStock >= 1 ? counter : "0"}</h5>

                <Button size="small" variant="contained" onClick={sumarProd}> +1</Button>

            </div>
            <span className='stock'>Stock: {muestraStock} </span>



            <Button className="agregarButton" size="large" variant="contained" onClick={addToCart}><AddShoppingCartIcon size="large" />Agregar</Button>
            <Button size="small" onClick={resProd}><RemoveShoppingCartIcon size="small" />Remover</Button>


            {(stock !== realStock) && (
                <Link to="/cart">
                    <Button style={{ width: "100%", marginTop: "2em" }} variant="contained">
                        Ir al carrito
                    </Button>
                </Link>)}
        </div>

    );
}

export default ItemCount;
