import React, { useContext, useState } from 'react'
import classes from './MealForm.module.css'
import CartContext from '../../Store/cart-context';
const MealForm = (props) => {
    const [addedItem, setAddedItem] = useState(0);
    const cartCtx = useContext(CartContext);

    const handleAddItem = (e) => {
        let newItemInCart = {
            mealId: props.mealitem.mealId,
            mealName: props.mealitem.mealName,
            mealPrice: props.mealitem.mealPrice,
            mealQty: Number(addedItem)
        }
        e.preventDefault();
        cartCtx.setcartItems([...cartCtx.cartItems, newItemInCart]);
        cartCtx.setTotalItems(cartCtx.totalItems + newItemInCart.mealQty)
        cartCtx.setTotal(cartCtx.total + (newItemInCart.mealQty * newItemInCart.mealPrice))
        console.log(cartCtx.cartItems);
    }
    const handleOnchange = (e) => {
        setAddedItem(e.target.value);
    }
    return (
        <form className={classes.mealForm}>
            <div>
                <label htmlFor="amount">Amount</label>
                <input type="tel" name="amount" onChange={handleOnchange} id="amount" />
            </div>
            <div>
                <button onClick={handleAddItem}>+Add</button>
            </div>
        </form>
    )
}

export default MealForm
