import React, { useContext } from 'react'
import { cartContext } from '../Store/CartProvider';

// function removeSpecialChar(str) {
//     let newmail="";
//     for (let i = 0; i < str.length; i++) {
//      if(str[i]!=="@" && str[i]!=="."){
//          newmail=newmail+str[i];
//      } 
//     } 
//     return newmail;
//  }
const MusicItem = (props) => {
    const cartCtx = useContext(cartContext);
    function checkItem(elememt) {
        let flag = false;
        for (let i = 0; i < cartCtx.cartItems.items.length; i++) {
            if (cartCtx.cartItems.items[i].title === elememt.title) {
                flag = true;
                break;
            }
        }
        return flag;
    }
    const handleAddItem =async (e) => {
        e.preventDefault();
        let newItemInCart = { ...props.product };
        if (checkItem(newItemInCart) || cartCtx.email==null) {
            alert("Item is already present in cart");
        } else {
            let addedCartItems = [...cartCtx.cartItems.items, newItemInCart]
            try{
                let usermailid=cartCtx.email.replace(/[^a-zA-Z0-9 ]/g, '');
                let responce = await fetch(`https://crudcrud.com/api/ee9c163cdc0c4f8a8e27612ed0b8ddfe/cart${usermailid}`,{
                method: 'POST',
                body: JSON.stringify(newItemInCart),
                headers: {
                    'Content-Type': 'application/json',
                },
              } );
              console.log(responce.json());
              alert("item added to cart")
            } catch (e) {
              console.log("Something went wrong");
            }
            cartCtx.setCartItems({ items: addedCartItems, totalItems: cartCtx.cartItems.totalItems + 1, totalAmount: cartCtx.cartItems.totalAmount + newItemInCart.price });
        }
    }
        
        return (
            <div className='row d-flex justify-content-between'>
                <div className="card col-md-3 mx-3 border-0" style={{ width: "18rem" }}>
                    <div style={{ height: "3.5rem" }}><h5>{props.title}</h5></div>
                    <img src={props.imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <span className="card-title">${props.price}</span>
                        <button type="button" className="btn btn-info text-light fw-bold float-end" onClick={handleAddItem}>Add to cart</button>
                    </div>
                </div>
            </div>
        )
    }


export default MusicItem
