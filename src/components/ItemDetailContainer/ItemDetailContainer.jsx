import { useState, useEffect } from "react";
import productos from "../mock/productos";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

    const [detail, setDetail] = useState([]);

    useEffect(() => {
        const getItem = new Promise((res, rej) => {
            setTimeout(() => {
                res(productos);
            }, 2500)
        });

        getItem
            .then((data) => {
                setDetail(data);
            })
            .catch((err) => {
                console.log(err);
            });

    }, []);

    return (
        <>
            <ItemDetail detail={detail} />
        </>
    )
}

export default ItemDetailContainer;
