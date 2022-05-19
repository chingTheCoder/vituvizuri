import React , { createContext, useState } from "react"

export const CartContext = createContext()

export const CartContextProvider = ({children}) => {

    const [ items , setItems ] = useState([])
   
    const addToCart = (productName , productPrice, productImage) =>{
        setItems((prevState) => [...prevState , {
            productName,
            productPrice,
            productImage
        }])
    }

    return <CartContext.Provider value={{ items , addToCart }}>{children}</CartContext.Provider>
}