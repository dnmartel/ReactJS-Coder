import Display from "./Display";
import { useState } from 'react';


const ItemCount = ({ stock, initial }) => {

    const [contador, setContador] = useState(initial);
    

    return (
        <>
            <Display valor={(stock < contador) ? setContador("No hay más stock") : contador} />
            <button onClick={() => { setContador(contador + 1) }}> +1</button>
            <button onClick={() => { setContador(contador - 1) }}> -1</button>
            
            {(contador < 0) && setContador(0)}
        </>
    );
}

export default ItemCount;
