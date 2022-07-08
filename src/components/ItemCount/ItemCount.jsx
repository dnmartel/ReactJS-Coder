import { useState } from 'react';
import Button from '@mui/material/Button';

const style = {
    ItemCount: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "10em",
        height: "2em"
    },
    h3: {
        margin: "0 1em"
    }
}


const ItemCount = ({ stock, initial, onAdd }) => {

    const [contador, setContador] = useState(initial);
    const arrCarrito = [];

    onAdd = () => {
        arrCarrito.push(contador);
        console.log(arrCarrito);
    }


    return (
        <>
            <div>
                <div style={style.ItemCount}>
                    <Button size="small" variant="outlined" onClick={() => { setContador(contador - 1) }}> -1</Button>
                    <h5 style={style.h3}>{(stock < contador) ? "No hay más stock" : contador}</h5>
                    <Button size="small" variant="outlined" onClick={() => { (stock < contador) ? setContador(contador + 0) : setContador(contador + 1) }}> +1</Button>
                    {(contador < 0) && setContador(0)}
                </div>
                <Button variant="outlined" onClick={onAdd}>Agregar al carrito</Button>

            </div>
        </>
    );
}

export default ItemCount;
