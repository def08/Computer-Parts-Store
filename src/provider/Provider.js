import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Parts } from "./Parts";


const ContextProvider = createContext();

export const useCart = () => useContext(ContextProvider);

export const CartWrapper = ({children}) => {
    const [Cart, setCart] = useState([]);
    const [partsList, setpartsList] = useState(Parts)
    const location = useLocation()

    useEffect(()=> {
        
        const CartPart = window.localStorage.getItem('Cart');
        if (CartPart) {
            setCart(JSON.parse(CartPart))
        }
    }, [location]);

    useEffect(()=>{
            window.localStorage.setItem('Cart', JSON.stringify(Cart));
    }, [Cart])

    const values = {
        Cart, 
        setCart,
        partsList, 
        setpartsList
    }

    return(
        <ContextProvider.Provider value={values}>
            {children}
        </ContextProvider.Provider>
    )
}