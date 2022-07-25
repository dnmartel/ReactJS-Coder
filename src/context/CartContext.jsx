import { createContext } from "react"
import { useState } from "react";

//removeItem(itemId) // Remover un item del cart por usando su id       /////          clear()


export const CartContext = createContext();

const Provider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const isInCart = (id) => {
        return cart.some(
            (p => { return p.id === id })
        )
    }

    const addItem = (detail, counter) => {

        if (isInCart(detail.id)) {
            //Si el item está en el array, sumo la cantidad
            let obj = cart.find(o => o.id === detail.id);
            cart[cart.indexOf(obj)].cantidad = obj.cantidad + counter;

        } else {
            setCart([...cart, { ...detail, cantidad: counter }])
        }

    }

    const removeItem = (id) => {

        let obj = cart.find(o => o.id === id);
        cart.splice((cart.indexOf(obj)), 1);
        alert("Item removido")

    }

    const clearCart = () => {
        setCart([]);
        alert("Se vació el carrito")
    }

    const logCart = () => {
        console.log(cart);
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, logCart }}>
            {children}
        </CartContext.Provider>
    )
};

export default Provider;