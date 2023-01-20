import React, { useState } from 'react'

function ExpenseForm() {
    //All the states to update the title ,amount and date
    const [enteredtitle, setEnteredtitle] = useState('');
    const [enteredamount, setEnteredAmount] = useState('');
    const [entereddate, setEnteredDate] = useState('');

    //handle functions 
    const handleTitleChange = (e) => {
        console.log(enteredtitle);
        setEnteredtitle(e.target.value);
    }
    const handleAmountChange = (e) => {
        console.log(enteredamount);
        setEnteredAmount(e.target.value);
    }
    const handleDateChange = (e) => {
        console.log(entereddate);
        setEnteredDate(e.target.value);
    }

    //return function
    return (
        <>
            <form className="expense-item d-flex justify-content-center" style={{ width: "20%", backgroundColor: "black" }}>
                <div>
                    <p className='form-label text-light'>INPUT YOUR EXPENSE ITEM HERE</p>
                    <div className="mb-3">
                        <label htmlFor="exptitle" className="form-label">Expense Title</label>
                        <input type="text" className="form-control" onChange={handleTitleChange} id="Expense Title" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="expAmount" className="form-label">Expense Amount</label>
                        <input type="number" className="form-control" onChange={handleAmountChange} id="Expense Amount" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="expDate" className="form-label">Date</label>
                        <input type="date" className="form-control" onChange={handleDateChange} id="Date" />
                    </div>
                    <button type="submit" className="btn btn-primary">ADD EXPENSE</button>
                </div>
            </form>
        </>
    )
}

export default ExpenseForm;

