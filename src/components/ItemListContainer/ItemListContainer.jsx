import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import ItemList from "./ItemList";



const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoria } = useParams();


    useEffect(() => {
        //Reseteo la categoria al iniciar
        setItems([]);
        setLoading(true);

        const traerProductos = async () => {
            const db = getFirestore();
            if (categoria !== undefined) {
                const q = await query(collection(db, "PokeBase"), where("categoryId", "==", categoria))
                await getDocs(q).then((snapshot) => {
                    const dataExtraida = snapshot.docs.map((datos) => datos.data());
                    const idExtraido = snapshot.docs.map((datos) => datos.id);
                    let consultaUnificada = [];
                    dataExtraida.forEach(e => (
                        consultaUnificada.push({ ...e, id: idExtraido[dataExtraida.indexOf(e)] })
                    ))
                    setItems(consultaUnificada)
                })
            } else {
                await getDocs(collection(db, "PokeBase")).then((snapshot) => {
                    const dataExtraida = snapshot.docs.map((datos) => datos.data());
                    const idExtraido = snapshot.docs.map((datos) => datos.id);
                    let consultaUnificada = [];
                    dataExtraida.forEach(e => (
                        consultaUnificada.push({ ...e, id: idExtraido[dataExtraida.indexOf(e)] })
                    ))
                    setItems(consultaUnificada)
                })
            }

        }

        traerProductos();
        setTimeout(() => {
            setLoading(false)
        }, 2000)


    }, [categoria]);

    return (
        <>
            {loading ? <Loading /> : <ItemList items={items} />}
        </>
    );
}

export default ItemListContainer;
