import React, { Fragment } from 'react'
import classes from '../Layout/Summary.module.css'
const Summary = () => {
    return (
        <Fragment >
            <div className={classes.summary}>                   
                <h2 >Delicious food,Deliver to you</h2>
                <p>Choose your favourite meal from our broad section of available meals and emjoy delicious lunch or dinner at home</p>
                <p>All our meals are cooked with high-quality ingredients,just-in-time and of course by experienced chefs!</p>
            </div>
        </Fragment>
    )
}

export default Summary
