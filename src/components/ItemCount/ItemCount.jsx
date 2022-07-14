import { useState } from 'react';
import Button from '@mui/material/Button';

const ItemCount = ({ stock, initial, onAdd }) => {

    const [contador, setContador] = useState(initial);

    return (
        <>
            <div className='ItemCount'>
                <Button size="small" variant="outlined" onClick={() => { setContador(contador - 1) }}> -1</Button>
                <h5>{(stock < contador) ? "Sin stock" : contador}</h5>
                <Button size="small" variant="outlined" onClick={() => { (stock < contador) ? setContador(contador + 0) : setContador(contador + 1) }}> +1</Button>
                {(contador < 1) && setContador(1)}
            </div>
            <Button variant="outlined" onClick={onAdd}>Agregar al carrito</Button>
        </>
    );
}

export default ItemCount;
