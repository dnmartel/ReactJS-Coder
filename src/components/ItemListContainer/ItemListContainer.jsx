import ItemList from "./ItemList";
import productos from "../mock/productos"
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";



const ItemListContainer = ({ greeting }) => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoria } = useParams();

    useEffect(() => {

        

        const traerProductos = new Promise((res, rej) => {
            setLoading(true);
            setTimeout(() => {
                res( categoria ? productos.filter( o => o.categoria === categoria) : productos)
            }, 500)
        });

        traerProductos
            .then((data) => {
                setItems(data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });

    }, [categoria]);

    return (
        <>
            {loading ? <div className="loading"><h2>{greeting}</h2></div> : <ItemList items={items} />}
        </>
    );
}

export default ItemListContainer;
