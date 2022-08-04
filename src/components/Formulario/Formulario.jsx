import React from 'react'
import { useState } from 'react';
import { Button } from '@mui/material';
import "./Formulario.css"
import { useContext } from 'react';
import { CartContext } from "../../context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";


const Formulario = () => {


    const [order, setOrder] = useState({})

    const [preOrder, setPreOrder] = useState({});

    const { cart, cartTotal } = useContext(CartContext);


    const handleClick = () => {

        console.log(order);

        const db = getFirestore();
        const ordersCollection = collection(db, "Orders");
        addDoc(ordersCollection, order).then(({ id }) => console.log(id + ` Success`))
    }


    const handleChange = (e) => {

        setPreOrder({
            ...preOrder,
            [e.target.name]: e.target.value
        })

        console.log(preOrder);

        setOrder({
            buyer: preOrder,
            items: cart.map(p => ({ id: p.id, title: p.title })),
            total: cartTotal()
        });

    }

    return (
        <>
            <form className='formCompra'>
                <input type="text" name="name" placeholder="Nombre" value={preOrder.name} onChange={handleChange} />
                <input type="text" name="lastname" placeholder="Apellido" value={preOrder.lastname} onChange={handleChange} />
                <input type="email" name="email" placeholder="Correo" value={preOrder.email} onChange={handleChange} />
            </form>
            <Button variant="outlined" onClick={() => handleClick()}>Finalizar</Button>
        </>
    )
}

export default Formulario;