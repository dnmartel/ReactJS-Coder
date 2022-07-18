import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import productos from "../mock/productos";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

    const [detail, setDetail] = useState([]);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        const getItem = () => {
            return new Promise((res, rej) => {
                setLoading(true);
                setTimeout(() => {
                    res(productos.find(obj => obj.id === id));
                }, 500)
            })
        };

        getItem().then((data) => {
            setLoading(false);
            setDetail(data);
        })
    }, [id]);

    return (
        <>
            {loading ? <div className="App"><div className="loading"><h2>Cargando...</h2></div></div> : <ItemDetail detail={detail} />}
        </>
    )
}

export default ItemDetailContainer;
