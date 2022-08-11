import { Button } from '@mui/material';
import { addDoc, collection, getFirestore } from "firebase/firestore";
import React, { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import "./Checkout.css";
import Success from './Success';
import Footer from "../Footer/Footer"


const Checkout = () => {

    const { cart, cartTotal, clearCart } = useContext(CartContext)

    const [order, setOrder] = useState(
        {
            buyer: {
                name: "",
                lastname: "",
                email: "",
                confirmEmail: "",
                telephone: ""
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

    const validateForm = () => {
        let validated = false;

        if (order.buyer.name.length === 0) {
            console.log(order.buyer.name + order.buyer.name.length);
            validated = false;
        }

        if (order.buyer.lastname.length === 0) {
            console.log(order.buyer.lastname+order.buyer.lastname.length);
            validated = false;
        }

        if (order.buyer.email.length === 0) {
            console.log(order.buyer.email+order.buyer.email.length);
            validated = false;
        }

        if (order.buyer.email !== order.buyer.confirmEmail) {
            console.log("los correos no coinciden");
            validated = false;
        }

        if (order.buyer.telephone.length === 0) {
            console.log(order.buyer.telephone+order.buyer.telephone.length);
            validated = false;
        }


        return validated;

    }

    const handleClick = () => {

        if (validateForm()) {

            const db = getFirestore();
        const ordersCollection = collection(db, "Orders");
        addDoc(ordersCollection, order)
            .then(({ id }) => {
                console.log(id + ` Success`);
                clearCart();
                setOrderId(id)
            });
            
        }
        
    }

    if (orderId) {
        return <Success id={orderId} />
    }

    if (cart.length === 0) {
        return <Navigate to="/" />
    }


    return (
        <>
            <div className="App">
                <form className='formCompra'>
                    <input type="text" id="name" name="name" placeholder="Nombre" value={order.buyer.name} onChange={(e) => {
                        handleChange(e)
                    }} />

                    <input type="text" id="lastname" name="lastname" placeholder="Apellido" value={order.buyer.lastname} onChange={(e) => {
                        handleChange(e)
                    }} />

                    <input type="email" id="email" name="email" placeholder="Correo" value={order.buyer.email} onChange={(e) => {
                        handleChange(e)
                    }} />

                    <input type="email" id="confirmEmail" name="confirmEmail" placeholder="Repetir correo" value={order.buyer.confirmEmail} onChange={(e) => {
                        handleChange(e)
                    }} />
                    {order.buyer.email !== order.buyer.confirmEmail && <p className="formEmailError">No coinciden los correos</p>}

                    <input type="number" id="telephone" placeholder="Teléfono" value={order.buyer.telephone} onChange={(e) => {
                        handleChange(e)
                    }} />

                </form>
                <div id="btnContainer">
                    <Button variant="contained" onClick={() => handleClick()} >Finalizar</Button>
                </div>
            </div>
            <Footer /></>
    )
}

export default Checkout;