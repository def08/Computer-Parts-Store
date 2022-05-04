import { createContext, useContext, useEffect, useState } from "react";


const ContextProvider = createContext();

export const useCart = () => useContext(ContextProvider);

export const CartWrapper = ({children}) => {
    const [Cart, setCart] = useState([]);

    useEffect(()=> {
        const CartPart = window.localStorage.getItem('Cart');
        if (CartPart) {
            setCart(JSON.parse(CartPart))
        }
    }, []);

    useEffect(()=>{
        if (Cart.length){
            window.localStorage.setItem('Cart', JSON.stringify(Cart));
        }
    }, [Cart])

    const values = {
        Cart, 
        setCart
    }

    return(
        <ContextProvider.Provider value={values}>
            {children}
        </ContextProvider.Provider>
    )
}