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

    const [error, setError] = useState({
        name: false,
        lastname: false,
        email: false,
        confirmEmail: false,
        telephone: false
    });

    const [order, setOrder] = useState({
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
    });

    const [orderId, setOrderId] = useState(null);

    const handleChange = (e) => {

        setOrder((currentValue) => ({
            ...currentValue,
            //Gracias Juan !
            buyer: {
                ...currentValue.buyer,
                [e.target.name]: e.target.value
            }
        }))

    };

    const validateForm = () => {
        let validate, vName, vLastName, vEmail, vConfirmEmail, vTelephone = false;

        if (order.buyer.name.length === 0) {
            setError((currentValue) => ({
                ...currentValue, name: true
            }))
            vName = false;
        } else {
            setError((currentValue) => ({
                ...currentValue, name: false
            }))
            vName = true;
        }

        if (order.buyer.lastname.length === 0) {
            setError((currentValue) => ({
                ...currentValue, lastname: true
            }))
            vLastName = false;
        } else {
            setError((currentValue) => ({
                ...currentValue, lastname: false
            }))
            vLastName = true;
        }

        if (order.buyer.email.length === 0) {
            setError((currentValue) => ({
                ...currentValue, email: true
            }))
            vEmail = false;
        } else {
            setError((currentValue) => ({
                ...currentValue, email: false
            }))
            vEmail = true;
        }

        if (order.buyer.email !== order.buyer.confirmEmail) {
            setError((currentValue) => ({
                ...currentValue, confirmEmail: true
            }))
            vConfirmEmail = false;
        } else {
            setError((currentValue) => ({
                ...currentValue, confirmEmail: false
            }))
            vConfirmEmail = true;
        }

        if (order.buyer.telephone.length === 0) {
            setError((currentValue) => ({
                ...currentValue, telephone: true
            }))
            vTelephone = false;
        } else {
            setError((currentValue) => ({
                ...currentValue, telephone: false
            }))
            vTelephone = true;
        }

        if ( vName || vLastName || vEmail || vConfirmEmail || vTelephone) {
            validate = false;
        } else {
            validate = true;
        }


        return validate;

    };

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
    };

    if (orderId) {
        return <Success id={orderId} />
    };

    if (cart.length === 0) {
        return <Navigate to="/" />
    };

    return (
        <>
            <div className="App">
                <form className='formCompra'>
                    <input type="text" id="name" name="name" placeholder="Nombre" value={order.buyer.name} onChange={(e) => { handleChange(e) }} />
                    {error.name && <p className="formEmailError">El campo no puede estar vacio</p>}

                    <input type="text" id="lastname" name="lastname" placeholder="Apellido" value={order.buyer.lastname} onChange={(e) => { handleChange(e) }} />
                    {error.lastname && <p className="formEmailError">El campo no puede estar vacio</p>}

                    <input type="email" id="email" name="email" placeholder="Correo" value={order.buyer.email} onChange={(e) => { handleChange(e) }} />
                    {error.email && <p className="formEmailError">El campo no puede estar vacio</p>}
                    {order.buyer.email !== order.buyer.confirmEmail && <p className="formEmailError">No coinciden los correos</p>}

                    <input type="email" id="confirmEmail" name="confirmEmail" placeholder="Repetir correo" value={order.buyer.confirmEmail} onChange={(e) => { handleChange(e) }} />
                    {order.buyer.email !== order.buyer.confirmEmail && <p className="formEmailError">No coinciden los correos</p>}

                    <input type="number" id="telephone" placeholder="Teléfono" value={order.buyer.telephone} onChange={(e) => { handleChange(e) }} />
                    {error.telephone && <p className="formEmailError">El campo no puede estar vacio</p>}

                </form>
                <div id="btnContainer">
                    <Button variant="contained" onClick={() => handleClick()} >Finalizar</Button>
                </div>
            </div>
            <Footer /></>
    )
};

export default Checkout;