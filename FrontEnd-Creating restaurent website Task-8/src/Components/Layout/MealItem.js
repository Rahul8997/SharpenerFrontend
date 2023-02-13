import React from 'react'
// import CartContext from '../../Store/cart-context';
import classes from '../Layout/MealItem.module.css'
import MealForm from './MealForm'
const mealsList = [{
    mealId:1,
    mealName: "Sushi",
    mealdesc: "Finest Fish and veggie",
    mealPrice: 22
}, {
    mealId:2,
    mealName: "Schnitzel",
    mealdesc: "A german specially",
    mealPrice: 16.5
}, {
    mealId:3,
    mealName: "Barbecue berger",
    mealdesc: "American,row,meaty",
    mealPrice: 12.99
}, {
    mealId:4,
    mealName: "Green bowl",
    mealdesc: "Healthy...and green",
    mealPrice: 10
}]
const MealItem = () => {
    // const cartCtx = useContext(CartContext);
    return (
        <>
        <div className={classes.mealItemDIv}>
            {mealsList.map((element) => {
                return (
                    <div className={classes.mealItem} key={element.mealName}>
                        <h5>{element.mealName}</h5>
                        <span>{element.mealdesc}</span>
                        <h6>${element.mealPrice}</h6>
                        <MealForm mealitem={element}/>
                        <hr />
                    </div>)
            })}
        </div>
            
        </>
    )
}

export default MealItem
