import React, { useContext } from 'react'
import { cartContext } from '../Store/CartProvider';

const MusicItem = (props) => {
    const cartCtx=useContext(cartContext);
    function checkItem(elememt) {
        let flag=false;
        for (let i = 0; i < cartCtx.cartItems.items.length; i++) {
            if (cartCtx.cartItems.items[i].title===elememt.title) {
                flag=true;
                break;
            }
        }
        return flag;
    }
    const handleAddItem=(e)=>{
        e.preventDefault();
        let newItemInCart={...props.product};
        console.log(newItemInCart,cartCtx.cartItems.items);
        if (checkItem(newItemInCart)) {
            alert("Item is already present in cart");
        } else {
            let addedCartItems=[...cartCtx.cartItems.items,newItemInCart]
            cartCtx.setCartItems({items:addedCartItems,totalItems:cartCtx.cartItems.totalItems+1,totalAmount:cartCtx.cartItems.totalAmount+newItemInCart.price});
        }
    }
    return (
        <div className="card my-3 mx-3 border-0">
            <div>
                <h4 className="text-center">{props.title}</h4>
                <img src={props.imageUrl} className="card-img-top" alt="..." />
                <div className="card-body d-flex justify-content-between">
                    <span className="card-title">${props.price}</span>
                    <button type="button" className="btn btn-info text-light fw-bold" onClick={handleAddItem}>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default MusicItem
