import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { addDoc, collection, getFirestore } from "firebase/firestore";
import React, { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import Footer from "../Footer/Footer";
import "./Checkout.css";
import Success from './Success';


const Checkout = () => {

    const { cart, cartTotal, clearCart } = useContext(CartContext)

    const [error, setError] = useState({
        name: false,
        nameMessage: "",
        lastname: false,
        lastNameMessage: "",
        email: false,
        emailMessage: "",
        confirmEmail: false,
        confirmEmailMessage: "",
        telephone: false,
        telephoneMessage: ""
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
            //Gracias Juan, este tipo de solución tuve que aplicarla varias veces y tu ejemplo me sirvio mucho !
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
                ...currentValue, name: true,
                nameMessage: "El campo no puede estar vacio."
            }));
            vName = false;
        } else if (order.buyer.name.length <= 2) {
            setError((currentValue) => ({
                ...currentValue, name: true,
                nameMessage: "El campo debe tener 3 o más caracteres."
            }));
            vName = false;
        } else {
            setError((currentValue) => ({
                ...currentValue, name: false
            }));
            vName = true;
        };

        if (order.buyer.lastname.length === 0) {
            setError((currentValue) => ({
                ...currentValue, lastname: true,
                lastNameMessage: "El campo no puede estar vacio."
            }));
            vLastName = false;
        } else if (order.buyer.lastname.length <= 2) {
            setError((currentValue) => ({
                ...currentValue, lastname: true,
                lastNameMessage: "El campo debe tener 3 o más caracteres."
            }));
            vLastName = false;
        } else {
            setError((currentValue) => ({
                ...currentValue, lastname: false
            }));
            vLastName = true;
        };

        if (order.buyer.email.length === 0) {
            setError((currentValue) => ({
                ...currentValue, email: true,
                emailMessage: "El campo no puede estar vacio."
            }))
            vEmail = false;
        } else if (!order.buyer.email.includes("@") || !order.buyer.email.includes(".")) {
            setError((currentValue) => ({
                ...currentValue, email: true,
                emailMessage: "El campo debe incluir @ y ."
            }))
            vEmail = false;
        } else {
            setError((currentValue) => ({
                ...currentValue, email: false
            }))
            vEmail = true;
        }

        if (order.buyer.confirmEmail.length === 0) {
            setError((currentValue) => ({
                ...currentValue, confirmEmail: true,
                confirmEmailMessage: "El campo no puede estar vacio"
            }))
            vConfirmEmail = false;
        } else if (!order.buyer.confirmEmail.includes("@") || !order.buyer.confirmEmail.includes(".")) {
            setError((currentValue) => ({
                ...currentValue, confirmEmail: true,
                confirmEmailMessage: "El campo debe incluir @ y ."
            }))
            vConfirmEmail = false;
        } else {
            setError((currentValue) => ({
                ...currentValue, confirmEmail: false
            }))
            vConfirmEmail = true;
        }

        if ((order.buyer.email !== order.buyer.confirmEmail) && ((vEmail === true) &&
            (vConfirmEmail === true))) {
            setError((currentValue) => ({
                ...currentValue, email: true, confirmEmail: true,
                emailMessage: "Los correos no coinciden.",
                confirmEmailMessage: "Los correos no coinciden."
            }))
            vConfirmEmail = false;
        };

        if (order.buyer.telephone.length === 0) {
            setError((currentValue) => ({
                ...currentValue, telephone: true,
                telephoneMessage: "El campo no puede estar vacio."
            }))
            vTelephone = false;
        } else {
            setError((currentValue) => ({
                ...currentValue, telephone: false
            }))
            vTelephone = true;
        }

        if (vName && vLastName && vEmail && vConfirmEmail && vTelephone) {
            validate = true;
        } else {
            validate = false;
        }
        
        return validate;

    };

    const handleClick = () => {
        if (validateForm()) {

            const db = getFirestore();
            const ordersCollection = collection(db, "Orders");
            addDoc(ordersCollection, order)
                .then(({ id }) => {
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
                <h1> Checkout </h1>
                <form className='formCompra'>
                    <TextField variant="standard" type="text" id="name" name="name" label="Nombre" value={order.buyer.name} onChange={(e) => { handleChange(e) }} />
                    {error.name && <p className="formEmailError">{error.nameMessage}</p>}

                    <TextField variant="standard" type="text" id="lastname" name="lastname" label="Apellido" value={order.buyer.lastname} onChange={(e) => { handleChange(e) }} />
                    {error.lastname && <p className="formEmailError">{error.lastNameMessage}</p>}

                    <TextField variant="standard" type="email" id="email" name="email" label="Correo" value={order.buyer.email} onChange={(e) => { handleChange(e) }} />
                    {error.email && <p className="formEmailError">{error.emailMessage}</p>}

                    <TextField variant="standard" type="email" id="confirmEmail" name="confirmEmail" label="Repetir correo" value={order.buyer.confirmEmail} onChange={(e) => { handleChange(e) }} />
                    {error.confirmEmail && <p className="formEmailError">{error.confirmEmailMessage}</p>}

                    <TextField variant="standard" type="number" id="telephone" name="telephone" label="Teléfono" value={order.buyer.telephone} onChange={(e) => { handleChange(e) }} />
                    {error.telephone && <p className="formEmailError">{error.telephoneMessage}</p>}

                </form>
                <div id="btnContainer">
                    <Button variant="contained" onClick={() => handleClick()} >Finalizar</Button>
                </div>
            </div>
            <Footer /></>
    )
};

export default Checkout;