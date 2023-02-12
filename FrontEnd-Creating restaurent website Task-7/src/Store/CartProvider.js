

import { useState } from 'react';
import CartContext from './cart-context';

const CartProvider = (props) => {
    const [cartItems,setcartItems]=useState({items:[],totalAmount:0});

    return (
        <CartContext.Provider value={{cartItems,setcartItems}}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;