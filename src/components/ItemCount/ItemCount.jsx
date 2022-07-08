import Display from "./Display";
import { useState } from 'react';

const style = {
    ItemCount: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "10em",
        height: "2em"
    }
}


const ItemCount = ({ stock, initial }) => {

    const [contador, setContador] = useState(initial);


    return (
        <div style={style.ItemCount}>
            <button onClick={() => { setContador(contador - 1) }}> -1</button>
            <Display style={style.Display} valor={(stock < contador) ? "No hay más stock" : contador} />
            <button onClick={() => { (stock < contador) ? setContador(contador + 0) : setContador(contador + 1) }}> +1</button>
            {(contador < 0) && setContador(0)}
        </div>
    );
}

export default ItemCount;
