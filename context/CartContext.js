import React , { createContext, useState } from "react"

export const CartContext = createContext()

export const CartContextProvider = ({children}) => {

    const [ items , setItems ] = useState([])
   
    const addToCart = (productName , productPrice, productImage, productQuantity) =>{
        setItems((prevState) => [...prevState , {
            productName,
            productPrice,
            productImage,
            productQuantity 
        }])
    }

    return <CartContext.Provider value={{ items , addToCart }}>{children}</CartContext.Provider>
}