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

        /* const getItem = async () => {
            const initialResponse = fetch(
                'https://pokeapi.co/api/v2/pokemon?limit=500&offset=0'
            )
                .then((res) => res.json())
                .then((data) => {
                    return data.results
                })
                .catch((err) => { console.log(err) })

            initialResponse.then(listaProductos => {
                Promise.allSettled(
                    listaProductos.map(async (p) => {
                        return await fetch(p.url)
                            .then((res) => res.json())
                            .then((pokemon) => {
                                
                                if (pokemon.id === Number(id)) {
                                    return pokemon
                                }
                            }
                            )
                            .then((detallePokemon) => {
                                setDetail(
                                    {
                                        title: detallePokemon.name,
                                        description: detallePokemon.types[0].type.name,
                                        pictureUrl: detallePokemon.sprites.other.dream_world.front_default,
                                        price: detallePokemon.base_experience,
                                        categoria: detallePokemon.types[0].type.name,
                                        stock: 10,
                                        id: detallePokemon.id
                                    }
                                )
                            })
                    })
                )
            }
            )
        }; */

        const getItem = async () => {
            const db = getFirestore();
            await getDocs(collection(db, "items"), limit(1)).then((snapshot) => {
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
        }, 2000)

    }, [id]);

    return (
        <>
            {loading ? <Loading /> : <ItemDetail detail={detail} />}
        </>
    )
}

export default ItemDetailContainer;
