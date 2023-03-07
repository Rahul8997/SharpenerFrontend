import React, { useEffect, useRef } from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux';
import store, { expenseActions, themeActions } from '../Store';

function CalculateTotalExpense(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum + parseInt(array[i].expenseAmount);
    }
    return sum;
}


const Expenses = () => {
    const expenses = useSelector(state => state.expense.expenses);
    const user = useSelector(state => state.authentication.user);
    const dispatch = useDispatch();


    let data = [];
    expenses.map((item) => {
        data = [...data, ["Amount", item.expenseAmount], ["Description", item.expenseDesc], ["Catagory", item.expenseCatagory]];
        return null;
    })
    // var csvFileData = data;

    function download_csv_file() {
        //define the heading for each row of the data  
        var csv = 'Expense Detail,Value\n';

        //merge the data with CSV  
        data.forEach(function (row) {
            csv += row.join(',');
            csv += "\n";
        });

        //display the created CSV data on the web browser   
        document.write(csv);

        var hiddenElement = document.createElement('a');
        hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
        hiddenElement.download = 'Expenses.csv';
        hiddenElement.click();
    }

    const handleActive = (e) => {
        e.preventDefault();
        dispatch(themeActions.setShow());
    }
    const handleDelete = async (expense) => {
        console.log(expense)
        try {
            let responce = await fetch(
                `https://react-expense-tracker-34c17-default-rtdb.firebaseio.com/expenses/${user}/${expense.Name}.json`,
                {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            )
            if (responce.ok) {
                const newExpenses = expenses.filter((item) => {
                    return item.Name !== expense.Name
                })
                dispatch(expenseActions.setExpenses(newExpenses))
                // dispatch(expenseActions.setTotalExpense(CalculateTotalExpense(expenses)));
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
        if (enteredaAmount.current.value.length > 0 && enteredaDesc.current.value.length > 0 && enteredaCatagory.current.value.length > 0) {
            try {
                let responce = await fetch(
                    `https://react-expense-tracker-34c17-default-rtdb.firebaseio.com/expenses/${user}/${expense.Name}.json`,
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
                    let data = await responce.json();
                    console.log(data);
                    try {
                        let responce = await fetch(
                            `https://react-expense-tracker-34c17-default-rtdb.firebaseio.com/expenses/${user}.json`,
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
                            dispatch(expenseActions.setExpenses(finaldata));
                            // dispatch(expenseActions.setTotalExpense(CalculateTotalExpense(expenses)));
                        } else {
                            throw new Error("Failed to load previous expense")
                        }
                    } catch (error) {
                        console.log(error)
                    }

                } else {
                    throw new Error("Failed to Edit expense")
                }
            } catch (error) {
                console.log(error)
            }
        } else {
            alert("Please fill all the data")
        }


    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                let responce = await fetch(
                    `https://react-expense-tracker-34c17-default-rtdb.firebaseio.com/expenses/${user}.json`,
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
        }
        fetchData();
        return () => { }
    }, [user, dispatch])


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
                    `https://react-expense-tracker-34c17-default-rtdb.firebaseio.com/expenses/${user}.json`,
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
                    dispatch(expenseActions.setExpenses([...expenses, addedItem]))
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
        <Provider store={store}>
            <div className='container'>
                <div>
                    {expenses.length > 0 && <button onClick={download_csv_file} className='btn btn-primary float-end'>Download Expenses</button>}
                </div>
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
                            <button type="submit" className="btn btn-primary mx-1" id="onSubmit" onClick={handleSubmitExpense}>Submit</button>
                        </div>
                    </form>
                </div>

                {expenses.length > 0 && <h1 className='text-center'>Expenses</h1>}
                <div className='row text-center '>{expenses.map((expense) => {
                    return <div key={Math.random()} className="card w-25 col-3">
                        <div className="card-body">
                            <h5 className="card-title"><span className='text-primary'>Amount:{expense.expenseAmount}    </span></h5>
                            <h5 className="card-title"><span className='text-primary'>Description:{expense.expenseDesc} </span></h5>
                            <h5 className="card-title"><span className='text-primary'>Catagory:{expense.expenseCatagory}</span> </h5>
                            <span>
                                <button className='btn btn-danger mx-1 my-1' onClick={() => handleDelete(expense)}>DELETE</button>
                                <button className='btn btn-secondary mx-1 my-1' onClick={() => handleEdit(expense)}>EDIT</button>
                            </span>
                        </div>
                    </div>
                })}</div>
                {expenses.length > 0 && <h1 className='text-center'>Total Expense Amount:{CalculateTotalExpense(expenses)} Rs.</h1>}
                {CalculateTotalExpense(expenses) >= 10000 && <div className='text-center'><button className='btn btn-primary' onClick={handleActive}>Active Premium</button></div>}

            </div>
        </Provider>

    )
}

export default Expenses

