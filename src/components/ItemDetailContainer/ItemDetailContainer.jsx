import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import Loading from "../Loading/Loading";
import { collection, getDocs, getFirestore, limit } from "firebase/firestore";

const ItemDetailContainer = () => {

    const [detail, setDetail] = useState([]);
    const [loading, setLoading] = useState(false);

    const { id } = useParams();

    useEffect(() => {
        setLoading(true);

        const getItem = async () => {
            const db = getFirestore();
            await getDocs(collection(db, "PokeBase"), limit(1)).then((snapshot) => {
                const dataExtraida = snapshot.docs.map((datos) => datos.data());
                const idExtraido = snapshot.docs.map((datos) => datos.id);
                let consultaUnificada = [];
                dataExtraida.forEach(e => (
                    (id === idExtraido[dataExtraida.indexOf(e)]) &&
                    (consultaUnificada = { ...e, id: idExtraido[dataExtraida.indexOf(e)] })
                ))

                setDetail(consultaUnificada)
            })

        }

        getItem();
        setTimeout(() => {
            setLoading(false)
        }, 2000);

        return () => {
            document.body.style.backgroundImage = ``;
        };

    }, [id]);

    return (
        <>
            {loading ? <Loading /> : <ItemDetail detail={detail} />}
        </>
    )
}

export default ItemDetailContainer;
