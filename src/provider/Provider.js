import { createContext, useContext, useState } from "react";


const ContextProvider = createContext();

export const useCart = () => useContext(ContextProvider)

export const CartWrapper = ({Children}) => {
    const [Cart, setCart] = useState([]);
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