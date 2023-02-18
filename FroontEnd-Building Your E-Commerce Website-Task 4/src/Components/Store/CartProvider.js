import React, { createContext, useState } from 'react'

const cartContext=createContext();

const CartProvider = (props) => {
    const [cartItems,setCartItems]=useState({items:[],totalItems:0,totalAmount:0})
  return (
    <cartContext.Provider value={{cartItems,setCartItems}}>
      {props.children}
    </cartContext.Provider>
  )
}
export {cartContext};
export default CartProvider;
