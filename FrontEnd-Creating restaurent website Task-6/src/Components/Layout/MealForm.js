import React from 'react'
import classes from './MealForm.module.css'
const MealForm = () => {

    return (
                <form className={classes.mealForm}>
                    <div>
                        <label htmlFor="amount">Amount</label>
                        <input type="number" name="amount" id="amount" />
                    </div>
                    <div>
                        <button type="submit">+Add</button>
                    </div>
                </form>
    )
}

export default MealForm
