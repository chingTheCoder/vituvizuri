import React , { createContext, useState } from "react"

export const CartContext = createContext({})

export const CartContextProvider = ({children}) => {

    const value = {
        name : 'shagufa salim mawji'
    }
        
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}