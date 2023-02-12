import React, { useContext, useState } from 'react'
import classes from './MealForm.module.css'
import CartContext from '../../Store/cart-context';
const MealForm = () => {
    const [addedItem, setAddedItem] = useState(0);
    const cartCtx = useContext(CartContext);


    const handleAddItem = (e) => {
        e.preventDefault();
        console.log(addedItem,"added");
    }
    const handleOnchange = (e) => {
        setAddedItem(e.target.value);
        console.log(e.target.value)
    }
    return (
        <form className={classes.mealForm}>
            <div>
                <label htmlFor="amount">Amount</label>
                <input type="number" name="amount" onChange={handleOnchange} id="amount" />
            </div>
            <div>
                <button onClick={handleAddItem}>+Add</button>
            </div>
        </form>
    )
}

export default MealForm
