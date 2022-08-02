import ItemList from "./ItemList";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import { collection, getDocs, query, where, getFirestore } from "firebase/firestore";



const ItemListContainer = ({ greeting }) => {

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
        /* const traerProductos = async () => {
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

                                //Piso la categorias de "Otros" que nos sean los especificados
                                if (pokemon.types[0].type.name !== "fire" && pokemon.types[0].type.name !== "grass" && pokemon.types[0].type.name !== "water" && pokemon.types[0].type.name !== "bug" && pokemon.types[0].type.name !== "poison" && pokemon.types[0].type.name !== "electric" && pokemon.types[0].type.name !== "normal") {
                                    pokemon.types[0].type.name = "others";
                                }

                                if (categoria !== undefined) {
                                    if (pokemon.types[0].type.name === categoria) {
                                        return pokemon
                                    }
                                } else {
                                    return pokemon
                                }

                            }
                            )
                            .then((detallePokemon) => {
                                if (detallePokemon !== undefined) {
                                    setItems((currentPokemon) => {
                                        return [
                                            ...currentPokemon,
                                            {
                                                title: detallePokemon.name,
                                                type: detallePokemon.types[0].type.name,
                                                pictureUrl: detallePokemon.sprites.front_default,
                                                price: detallePokemon.base_experience,
                                                categoria: detallePokemon.types[0].type.name,
                                                id: detallePokemon.id
                                            }]
                                    }
                                    )
                                }
                            })
                    })
                )
            }
            )
        }; */


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
