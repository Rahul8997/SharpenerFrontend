import React from 'react'
import classes from '../Layout/MealItem.module.css'
const mealsList = [{
    mealName: "Sushi",
    mealdesc: "Finest Fish and veggie",
    mealPrice: 22
}, {
    mealName: "Schnitzel",
    mealdesc: "A german specially",
    mealPrice: 16.5
}, {
    mealName: "Barbecue berger",
    mealdesc: "American,row,meaty",
    mealPrice: 12.99
}, {
    mealName: "Green bowl",
    mealdesc: "Healthy...and green",
    mealPrice: 10
}]
const MealItem = () => {
    return (
        <div className={classes.mealItemDIv}>
            {mealsList.map((element) => {
                return (
                    <div className={classes.mealItem}>
                        <h5>{element.mealName}</h5>
                        <span>{element.mealdesc}</span>
                        <h6>${element.mealPrice}</h6>
                        <hr />
                    </div>)
            })}
        </div>
    )
}

export default MealItem
