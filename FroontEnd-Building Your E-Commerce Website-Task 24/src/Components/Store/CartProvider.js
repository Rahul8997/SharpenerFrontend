import React, { createContext, useState } from 'react'


const cartContext=createContext();
const CartProvider = (props) => {
  const [cartItems,setCartItems]=useState({items:[],totalItems:0,totalAmount:0})
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  const [token,setToken]=useState(null);
  const [email,setEmail]=useState(null);
  return (
    <cartContext.Provider value={{isLoggedIn,setIsLoggedIn,cartItems,setCartItems,token,setToken,email,setEmail}}>
      {props.children}
    </cartContext.Provider>
  )
}
export {cartContext};
export default CartProvider;
