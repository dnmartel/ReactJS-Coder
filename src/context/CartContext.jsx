import { createContext, useState } from "react"

export const CartContext = createContext();

const Provider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const isInCart = (id) => {
        return cart.some(
            (p => { return p.id === id })
        )
    }

    // Agrega item al carrito o suma la cantidad a existente
    const addItem = (detail, counter) => {
        if (isInCart(detail.id)) {
            //Si el item está en el array, sumo la cantidad
            let obj = cart.find(o => o.id === detail.id);
            cart[cart.indexOf(obj)].cantidad += counter;
            setCart([...cart])
        } else {
            setCart([...cart, { ...detail, cantidad: counter }])
        }
    }


    // Remueve item por ID
    const removeItem = (id) => {
        cart.length === 1
            ? setCart([])
            : setCart(cart.filter(n => n.id !== id))
    }

    //Contador de items del carrito
    const cartNum = () => {
        return cart.reduce((total, op) => total += op.cantidad, 0)
    }

    //Vacia el carrito
    const clearCart = () => {
        setCart([]);
    }

    //Precio total del carrito
    const cartTotal = () => {
        return cart.reduce((total, item) => total += item.price * item.cantidad, 0)
    }

    const logCart = () => {
        console.log(cart);
    }


    return (
        <CartContext.Provider value={{ cart, cartNum, cartTotal, addItem, removeItem, clearCart, logCart }}>
            {children}
        </CartContext.Provider>
    )
};

export default Provider;