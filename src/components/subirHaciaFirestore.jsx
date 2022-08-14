import { addDoc, collection, getFirestore } from "firebase/firestore";

export default function subirHaciaFirestore() {

    const traerProductos = async () => {
        const initialResponse = fetch(
            'https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0'
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

                        .then((detallePokemon) => {


                            if ((detallePokemon.types[1] !== undefined) && (detallePokemon.abilities[1].ability !== undefined)) {
                                const order = {
                                    title: detallePokemon.name,
                                    type: detallePokemon.types[0].type.name,
                                    altType: detallePokemon.types[1].type.name,
                                    image: detallePokemon.sprites.front_default,
                                    altImage: detallePokemon.sprites.other.dream_world.front_default,
                                    price: detallePokemon.base_experience,
                                    categoryId: detallePokemon.types[0].type.name,
                                    pid: detallePokemon.id,
                                    stock: Math.floor(Math.random() * 15) + 1,
                                    ability: detallePokemon.abilities[0].ability,
                                    altAbility: detallePokemon.abilities[1].ability,
                                    description: `Pokemon tipo ${detallePokemon.types[0].type.name}`,
                                    height: detallePokemon.height / 10,
                                    weight: detallePokemon.weight / 10
                                }

                                const db = getFirestore();
                                const ordersCollection = collection(db, "PokeBase");
                                addDoc(ordersCollection, order).then(({ id }) => console.log(id + ` Success`))

                            } else if ((detallePokemon.types[1] !== undefined) && (detallePokemon.abilities[1].ability === undefined)) {

                                const order = {
                                    title: detallePokemon.name,
                                    type: detallePokemon.types[0].type.name,
                                    altType: detallePokemon.types[1].type.name,
                                    image: detallePokemon.sprites.front_default,
                                    altImage: detallePokemon.sprites.other.dream_world.front_default,
                                    price: detallePokemon.base_experience,
                                    categoryId: detallePokemon.types[0].type.name,
                                    pid: detallePokemon.id,
                                    stock: Math.floor(Math.random() * 15) + 1,
                                    ability: detallePokemon.abilities[0].ability,
                                    description: `Pokemon tipo ${detallePokemon.types[0].type.name}`,
                                    height: detallePokemon.height / 10,
                                    weight: detallePokemon.weight / 10
                                }

                                const db = getFirestore();
                                const ordersCollection = collection(db, "PokeBase");
                                addDoc(ordersCollection, order).then(({ id }) => console.log(id + ` Success`))


                            } else if ((detallePokemon.types[1] === undefined) && (detallePokemon.abilities[1].ability !== undefined)) {

                                const order = {
                                    title: detallePokemon.name,
                                    type: detallePokemon.types[0].type.name,
                                    image: detallePokemon.sprites.front_default,
                                    altImage: detallePokemon.sprites.other.dream_world.front_default,
                                    price: detallePokemon.base_experience,
                                    categoryId: detallePokemon.types[0].type.name,
                                    pid: detallePokemon.id,
                                    stock: Math.floor(Math.random() * 15) + 1,
                                    ability: detallePokemon.abilities[0].ability,
                                    altAbility: detallePokemon.abilities[1].ability,
                                    description: `Pokemon tipo ${detallePokemon.types[0].type.name}`,
                                    height: detallePokemon.height / 10,
                                    weight: detallePokemon.weight / 10
                                }

                                const db = getFirestore();
                                const ordersCollection = collection(db, "PokeBase");
                                addDoc(ordersCollection, order).then(({ id }) => console.log(id + ` Success`))
                            }

                            else if ((detallePokemon.types[1] === undefined) && (detallePokemon.abilities[1].ability === undefined)) {

                                const order = {
                                    title: detallePokemon.name,
                                    type: detallePokemon.types[0].type.name,
                                    image: detallePokemon.sprites.front_default,
                                    altImage: detallePokemon.sprites.other.dream_world.front_default,
                                    price: detallePokemon.base_experience,
                                    categoryId: detallePokemon.types[0].type.name,
                                    pid: detallePokemon.id,
                                    stock: Math.floor(Math.random() * 15) + 1,
                                    ability: detallePokemon.abilities[0].ability,
                                    description: `Pokemon tipo ${detallePokemon.types[0].type.name}`,
                                    height: detallePokemon.height / 10,
                                    weight: detallePokemon.weight / 10
                                }

                                const db = getFirestore();
                                const ordersCollection = collection(db, "PokeBase");
                                addDoc(ordersCollection, order).then(({ id }) => console.log(id + ` Success`))
                            }
                        })
                })
            )
        }
        )
    };

    traerProductos();
}
