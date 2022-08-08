import { Button } from '@mui/material';
import { addDoc, collection, getFirestore } from "firebase/firestore";
import React, { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import "./Checkout.css";
import Success from './Success';


const Checkout = () => {

    const { cart, cartTotal, clearCart } = useContext(CartContext)

    const [order, setOrder] = useState(
        {
            buyer: {
                name: "",
                lastname: "",
                email: "",
            },
            date: new Date(),
            items: cart.map(p => ({ id: p.id, title: p.title })),
            total: cartTotal()
        }
    )

    const [orderId, setOrderId] = useState(null)

    const handleChange = (e) => {

        setOrder((currentValue) => ({
            ...currentValue,
            //Gracias Juan !
            buyer: {
                ...currentValue.buyer,
                [e.target.name]: e.target.value
            }
        }))

    }



    const handleClick = () => {

        const db = getFirestore();
        const ordersCollection = collection(db, "Orders");
        addDoc(ordersCollection, order)
            .then(({ id }) => {
                console.log(id + ` Success`);
                clearCart();
                setOrderId(id)
            })
    }

    if (orderId) {
        return <Success id={orderId} />
    }

    if (cart.length === 0) {
        return <Navigate to="/" />
    }


    return (
        <div className='App'>
            <form className='formCompra'>
                <input type="text" name="name" placeholder="Nombre" value={order.buyer.name} onChange={(e) => {
                    handleChange(e)
                }} />
                <input type="text" name="lastname" placeholder="Apellido" value={order.buyer.lastname} onChange={(e) => {
                    handleChange(e)
                }} />
                <input type="email" name="email" placeholder="Correo" value={order.buyer.email} onChange={(e) => {
                    handleChange(e)
                }} />
            </form>
            <Button variant="outlined" onClick={() => handleClick()}>Finalizar</Button>
        </div>
    )
}

export default Checkout;