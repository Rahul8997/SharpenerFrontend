import React, { useContext, useEffect, useRef } from 'react'
import { expContext } from '../Store/ExpenseContext';



const Expenses = () => {
    const ctx = useContext(expContext);
    useEffect( () => {
        async function fetchData(){
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
                    console.log(data);
                    let finaldata = [];
                    for (const key in data) {
                        finaldata.push(data[key])
                    }
                    ctx.setExpenses(finaldata)
                } else {
                    throw new Error("Failed to load previous expense")
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
        return () => { }
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
            console.log(newAddedExpense);
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
                    console.log(data);
                    alert("added expanse successfully");
                    ctx.setExpenses([...ctx.expenses, newAddedExpense])
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
            {ctx.expenses.length > 0 && <h1 className='text-center'>Expenses</h1>}
            <div className='row text-center '>{ctx.expenses.map((expense) => {
                return <div key={Math.random()} className="card w-25 col-4 mx-3 my-3">
                    <div className="card-body">
                        <h5 className="card-title">Amount:<span className='text-primary'>{expense.expenseAmount}    </span></h5>
                        <h5 className="card-title">Description:<span className='text-primary'>{expense.expenseDesc} </span></h5>
                        <h5 className="card-title">Catagory:<span className='text-primary'>{expense.expenseCatagory}</span> </h5>
                    </div>
                </div>
            })}</div>
        </div>
    )
}

export default Expenses

