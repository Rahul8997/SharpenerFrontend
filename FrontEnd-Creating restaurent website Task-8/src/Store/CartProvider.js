import { useState } from 'react';
import CartContext from './cart-context';

const CartProvider = (props) => {
    const [cartItems,setcartItems]=useState([]);
    // const [cartItems,setcartItems]=useState({items:[],totalAmount:0,totalQty:0});
    // const [cartContent,setCartContent]=useState([]);
    const [totalItems,setTotalItems]=useState(0);
    const [total,setTotal]=useState(0);

    return (
        // <CartContext.Provider value={{cartItems,setcartItems,cartContent,setCartContent,total,setTotal}}>
        //     {props.children}
        // </CartContext.Provider>
        <CartContext.Provider value={{cartItems,setcartItems,total,setTotal,totalItems,setTotalItems}}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;