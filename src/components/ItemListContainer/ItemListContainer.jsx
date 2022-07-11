import ItemList from "./ItemList";
import { useEffect, useState } from 'react';
import productos from "../mock/productos"

const ItemListContainer = ({ greeting }) => {

    const [items, setItems] = useState([]);



    useEffect(() => {
        const traerProductos = new Promise((res, rej) => {
            setTimeout(() => {
                res(productos);
            }, 2000)
        });


        traerProductos
            .then((data) => {
                setItems(data);
            })
            .catch((err) => {
                console.log(err);
            });

    }, []);



    return (
        <>
            <h2>{greeting}</h2>

            <ItemList items={items} />

        </>
    );
}

export default ItemListContainer;
