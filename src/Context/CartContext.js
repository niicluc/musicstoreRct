import { createContext, useState, useContext } from "react";

//que va llevar el Context
export const CartContext = createContext ();

export const UseContext = () => useContext(CartContext);

//definimos que va hacer cada funcion y variable
export default function CartProvider ({children}) {
    const [cart, setCart] = useState ([]);

    const getFromCart = (id) => {
        return cart.find(ord => ord.id === id);
    }
    
    const isInCart = (id) => {
        return id !== undefined ? getFromCart(id) : undefined;
    }

//en esta función se evita la repetición de id
    const addToCart = (object) => {
        if (isInCart(object && object.id)) {
            console.log("Error: ¡el id ya existe!")
        }
//si no existe el elemento con su id
        setCart([...cart], object);
    };
    
    const removeItem = (id) => {
        setCart(cart.filter(e => e.id !== id))
    };

    const clear = () => setCart([]) ; //esta vacio, lo estoy dejando como lo declare en la linea 17

    const totalPrice = cart.reduce((acc, total)=> {
        return acc + (total.price*total.cantidad)
    },0);
    
    return (
    <CartContext.Provider value = {{cart, addToCart, isInCart, removeItem, clear, totalPrice}}>
        <div> {children} </div>
    </CartContext.Provider>
    );

}
