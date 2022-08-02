import { CartContext } from "../../context/CartContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const Cart = () => {

    const { cart, cartTotal, removeItem } = useContext(CartContext)
    const [date, setDate] = useState("");
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }

    const order = {
        buyer: {
            name: "Nombre",
            email: "correo@dominio.com"
        },
        items: cart.map(p => ({ id: p.id, title: p.title })),
        date: date,
        total: cartTotal()
    }


/*         const subirHaciaFirestore = () => {
    
            const traerProductos = async () => {
                const initialResponse = fetch(
                    'https://pokeapi.co/api/v2/pokemon?limit=386&offset=0'
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
                                            stock: Math.floor(Math.random() * 15)+1,
                                            ability: detallePokemon.abilities[0].ability,
                                            altAbility: detallePokemon.abilities[1].ability,
                                            description: `Pokemon tipo ${detallePokemon.types[0].type.name}`
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
                                            stock: Math.floor(Math.random() * 15)+1,
                                            ability: detallePokemon.abilities[0].ability,
                                            description: `Pokemon tipo ${detallePokemon.types[0].type.name}`
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
                                            stock: Math.floor(Math.random() * 15)+1,
                                            ability: detallePokemon.abilities[0].ability,
                                            altAbility: detallePokemon.abilities[1].ability,
                                            description: `Pokemon tipo ${detallePokemon.types[0].type.name}`
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
                                            stock: Math.floor(Math.random() * 15)+1,
                                            ability: detallePokemon.abilities[0].ability,
                                            description: `Pokemon tipo ${detallePokemon.types[0].type.name}`
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
    
            traerProductos()
        } */

    const handleClick = () => {
        setDate("Hora Actual")
        console.log(order);
        const db = getFirestore();
        const ordersCollection = collection(db, "Orders");
        addDoc(ordersCollection, order).then(({ id }) => console.log(id + ` Success`))
    }


    if (cart.length === 0) {

        return (<>
            <div style={{
                textAlign: "center"
            }}>
                <h1>Carrito Vacio</h1>
                <button style={{ color: "black", margin: "2em 0", display: "block" }} onClick={goBack}>Volver a comprar cositas</button>
            </div>

        </>)
    }
    return (


        <div>
            <p>Resumen del Carrito</p>
            <p>Elementos: {cart.length}</p>

            {cart.map((e) => {
                return (

                    <div key={e.id} style={{ display: "flex", justifyContent: "space-between", margin: "1.5em 3em" }}>
                        <img src={e.image} alt={e.title} width="75px" />
                        <h2>Pokemon: {e.title}</h2>
                        <h3>Cantidad: {e.cantidad}</h3>
                        <p>Subtotal: {e.cantidad * e.price}</p>
                        <button onClick={() => { removeItem(e.id) }}>Quitar</button>

                    </div>
                )

            })}

            <h2 style={{ textAlign: "right", marginRight: "1em" }}>Total: {cartTotal()}</h2>

            <button onClick={handleClick}>Finalizar</button>

        </div>

    )
}

export default Cart