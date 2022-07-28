import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import Loading from "../Loading/Loading";

const ItemDetailContainer = () => {

    const [detail, setDetail] = useState([]);
    const [loading, setLoading] = useState(false);

    const { id } = useParams();

    useEffect(() => {
        setLoading(true);

        const getItem = async () => {
            const initialResponse = fetch(
                'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0'
            )
                .then((res) => res.json())
                .then((data) => {
                    return data.results
                })
                .catch((err) => { console.log(err) })

            initialResponse.then(listaProductos => {
                Promise.all(
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
                                        stock: 20,
                                        id: detallePokemon.id
                                    }
                                )
                            })
                    })
                )
            }
            )
        };

        getItem();
        setTimeout(() => {
            setLoading(false)
        }, 1000)

    }, [id]);

    return (
        <>
            {loading ? <Loading /> : <ItemDetail detail={detail} />}
        </>
    )
}

export default ItemDetailContainer;
