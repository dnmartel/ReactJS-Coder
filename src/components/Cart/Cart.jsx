
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import Footer from "../Footer/Footer";
import Formulario from "../Formulario/Formulario";
import "./Cart.css";


const Cart = () => {

    const { cart, cartTotal, removeItem } = useContext(CartContext)

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
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



    if (cart.length === 0) {

        return (
            <div>
                <div className="carritoVacio">
                    <h1>Carrito Vacio</h1>
                    <Button variant="outlined" style={{ margin: "2em 0", alignSelf: "center" }} onClick={goBack}>Volver a comprar</Button>
                </div>
                <Footer />
            </div>
        )
    }

    return (

        <div>
            <div style={{
                textAlign: "center"
            }}>
                <p>Resumen del Carrito</p>
                <p>Elementos: {cart.length}</p>

                {cart.map((e) => {
                    return (

                        <div key={e.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "1.5em 3em" }}>
                            <img src={e.image} alt={e.title} width="75px" />
                            <h3>Pokemon: {e.title}</h3>
                            <h3>Cantidad: {e.cantidad}</h3>
                            <p>Subtotal: {e.cantidad * e.price}</p>
                            <Button variant="outlined" style={{ height: "2em" }} onClick={() => { removeItem(e.id) }}>X</Button>

                        </div>
                    )

                })}

                <h2 style={{ textAlign: "right", marginRight: "1em" }}>Total: {cartTotal()}</h2>

                <Formulario/>

            </div>

            <Footer />
        </div>

    )
}

export default Cart