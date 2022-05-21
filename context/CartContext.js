import React , { createContext, useState } from "react"

export const CartContext = createContext()

export const CartContextProvider = ({children}) => {

    const [ items , setItems ] = useState([])
    const [ totalCost , updateTotal ] = useState(0)
   
    const addToCart = (productName , productPrice, productImage, productQuantity) =>{
        setItems((prevState) => [...prevState , {
            productName,
            productPrice,
            productImage,
            productQuantity 
        }])
        updateTotal( (prevValue) => prevValue + Number(productPrice) )
    }

    return <CartContext.Provider value={{ items , addToCart , totalCost , updateTotal }}>{children}</CartContext.Provider>
}