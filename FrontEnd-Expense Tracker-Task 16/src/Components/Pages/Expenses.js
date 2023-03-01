import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { expenseActions } from '../Store';



const Expenses = () => {
    const expenses=useSelector(state=>state.expense.expenses);
    const dispatch=useDispatch();
    const handleDelete = async (expense) => {
        console.log(expense)
        try {
            let responce = await fetch(
                `https://react-expense-tracker-34c17-default-rtdb.firebaseio.com/expenses/${expense.Name}.json`,
                {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            )
            if (responce.ok) {
                // alert("Deleted successfully")
                const newExpenses = expenses.filter((item) => {
                    return item.Name !== expense.Name
                })
                // ctx.setExpenses(newExpenses);
                dispatch(expenseActions.setExpenses(newExpenses))
            } else {
                throw new Error("Failed to delete expense")
            }
        } catch (error) {
            console.log(error)
        }

    }
    const handleEdit = async (expense) => {
        console.log(expense);
        const editedExpense = {
            expenseAmount: enteredaAmount.current.value,
            expenseDesc: enteredaDesc.current.value,
            expenseCatagory: enteredaCatagory.current.value
        }
        try {
            let responce = await fetch(
                `https://react-expense-tracker-34c17-default-rtdb.firebaseio.com/expenses/${expense.Name}.json`,
                {
                    method: 'PUT',
                    body: JSON.stringify(editedExpense),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            )
            if (responce.ok) {
                alert("Edited successfully");
                let data=await responce.json();
                console.log(data);

            } else {
                throw new Error("Failed to Edit expense")
            }
        } catch (error) {
            console.log(error)
        }

    }
    // const ctx = useContext(expContext);
    useEffect(async () => {
            try {
                let responce = await fetch(
                    'https://react-expense-tracker-34c17-default-rtdb.firebaseio.com/expenses.json',
                    {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }
                )
                if (responce.ok) {
                    let data = await responce.json();
                    let finaldata = [];
                    for (const key in data) {
                        finaldata.push({ Name: key, ...data[key] })
                    }
                    dispatch(expenseActions.setExpenses(finaldata))
                } else {
                    throw new Error("Failed to load previous expense")
                }
            } catch (error) {
                console.log(error)
            }
        return ()=>{}
    }, [])


    const enteredaAmount = useRef();
    const enteredaDesc = useRef();
    const enteredaCatagory = useRef();
    const handleSubmitExpense = async (e) => {
        e.preventDefault();
        const newAddedExpense = {
            expenseAmount: enteredaAmount.current.value,
            expenseDesc: enteredaDesc.current.value,
            expenseCatagory: enteredaCatagory.current.value
        }

        if (enteredaAmount.current.value.length > 0 && enteredaDesc.current.value.length > 0 && enteredaCatagory.current.value.length > 0) {
           
            try {
                let responce = await fetch(
                    'https://react-expense-tracker-34c17-default-rtdb.firebaseio.com/expenses.json',
                    {
                        method: 'POST',
                        body: JSON.stringify(newAddedExpense),
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }
                )
                if (responce.ok) {
                    let data = await responce.json();
                    // console.log("Added Item",data);
                    alert("added expanse successfully");
                    let addedItem = { Name: data.name, ...newAddedExpense }
                    console.log(addedItem)
                    // console.log("Added Item",{Name:data.name,...newAddedExpense})
                    // ctx.setExpenses([...expenses, addedItem])
                    dispatch(expenseActions.setExpenses([...expenses,addedItem]))
                } else {
                    throw new Error("Failed to add expense")
                }
            } catch (error) {
                console.log(error)
            }
        } else {
            alert("please fill all the data")
        }
    }
    return (
        <div className='container'>
            <div className="row gx-3 gy-2 align-items-center mx-5 my-5">
                <h1>Enter your expense</h1>
                <form className="row gy-2 gx-3 align-items-center">
                    <div className="col-auto">
                        <label className="visually-hidden" htmlFor="expenseamount">expenseamount:</label>
                        <div className="input-group">
                            <div className="input-group-text">Choose expenseamount:</div>
                            <input type="text" className="form-control" ref={enteredaAmount} id="expenseamount" />
                        </div>
                    </div>
                    <div className="col-auto">
                        <label className="visually-hidden" htmlFor="description">description:</label>
                        <div className="input-group">
                            <div className="input-group-text">Choose description:</div>
                            <input type="text" className="form-control" ref={enteredaDesc} id="description" />
                        </div>
                    </div>
                    <div className="col-auto">
                        <label className="visually-hidden" htmlFor="catagory">description:</label>
                        <div className="input-group">
                            <select className="form-select" ref={enteredaCatagory} id="catagory">
                                <option value="choose a catagory">Choose a catagory</option>
                                <option value="movie">movie</option>
                                <option value="food">food</option>
                                <option value="electricity">electricity</option>
                                <option value="fuel">fuel</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-auto">
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-primary" id="onSubmit" onClick={handleSubmitExpense}>Submit</button>
                    </div>
                </form>
            </div>
            {expenses.length > 0 && <h1 className='text-center'>Expenses</h1>}
            <div className='row text-center '>{expenses.map((expense) => {
                return <div key={Math.random()} className="card w-25 col-3">
                    <div className="card-body">
                        <h5 className="card-title">Amount:<span className='text-primary'>{expense.expenseAmount}    </span></h5>
                        <h5 className="card-title">Description:<span className='text-primary'>{expense.expenseDesc} </span></h5>
                        <h5 className="card-title">Catagory:<span className='text-primary'>{expense.expenseCatagory}</span> </h5>
                        <span>
                            <button className='btn btn-danger mx-1 my-1' onClick={() => handleDelete(expense)}>DELETE</button>
                            <button className='btn btn-secondary mx-1 my-1' onClick={() => handleEdit(expense)}>EDIT</button>
                        </span>
                    </div>
                </div>
            })}</div>
        </div>
    )
}

export default Expenses

