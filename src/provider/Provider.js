import { createContext, useContext, useEffect, useState } from "react";


const ContextProvider = createContext();

export const useCart = () => useContext(ContextProvider);

export const CartWrapper = ({Children}) => {
    const [Cart, setCart] = useState([]);

    useEffect(()=> {
            if (Cart.length){
                window.localStorage.setPart('Cart', JSON.stringify(Cart))
                const CartPart = window.localStorage.getItem('Cart')
                if (CartPart) {
                    setCart(JSON.parse(CartPart))
                    
                }
            }
    }, [Cart]);

    const values = {
        Cart, 
        setCart
    }

    return(
        <ContextProvider.Provider value={values}>
            {Children}
        </ContextProvider.Provider>
    )
}