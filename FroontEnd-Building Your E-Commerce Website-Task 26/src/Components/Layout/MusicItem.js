import React, { useContext } from 'react'
import { cartContext } from '../Store/CartProvider';

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
        if (checkItem(newItemInCart)) {
            alert("Item is already present in cart");
        } else if(cartCtx.email==null){
            alert("Please Log in first to add the item");
        } else{
            try{
                let usermailid=cartCtx.email.replace(/[^a-zA-Z0-9 ]/g, '');
                let responce = await fetch(`https://crudcrud.com/api/2ebf37c4371348fe9e414e2868de43ea/cart${usermailid}`,{
                method: 'POST',
                body: JSON.stringify(newItemInCart),
                headers: {
                    'Content-Type': 'application/json',
                },
              } );
              let data=await responce.json();
              cartCtx.setCartItems({ items: [...cartCtx.cartItems.items,data], totalItems: cartCtx.cartItems.totalItems + 1, totalAmount: cartCtx.cartItems.totalAmount + newItemInCart.price });
              alert("item added to cart")
            } catch (e) {
              console.log("Something went wrong");
            }
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
