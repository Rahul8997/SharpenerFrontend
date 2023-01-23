import React, { useState } from 'react'

function ExpenseForm(props) {
    //All the states to update the title ,amount and date
    const [enteredtitle, setEnteredtitle] = useState('');
    const [enteredamount, setEnteredAmount] = useState('');
    const [entereddate, setEnteredDate] = useState('');
    const [myStyle, setMyStyle] = useState({ display: "block" ,margin:"auto",width:"20%"})
    const [btnStyle,setbtnStyle]=useState({ display: "none" })
    //handle functions 
    const handleTitleChange = (e) => {
        // console.log(enteredtitle);
        setEnteredtitle(e.target.value);
    }
    const handleAmountChange = (e) => {
        // console.log(enteredamount);
        setEnteredAmount(e.target.value);
    }
    const handleDateChange = (e) => {
        // console.log(entereddate);
        setEnteredDate(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let expenseObj = {
            title: enteredtitle,
            amount: enteredamount,
            date: new Date(entereddate)
        }
        props.onSaveExpenseData(expenseObj);


        setEnteredtitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }
    const handleCancel = (e) => {
        e.preventDefault();
        console.log("Cancelled succesfully");
        setMyStyle({ display: "none" })
        setbtnStyle({display: "block"})
    }
    const handleAddNewExpense = (e) => {
        e.preventDefault();
        console.log("Added New Expense succesfully");
        setMyStyle({ display: "block" ,margin:"auto",width:"20%"});
        setbtnStyle({display: "none"})
    }

    //return function
    return (
        <>
            <div style={{background:"gray",height:"50px"}} className='d-flex justify-content-center'>
            <button type="submit" className="btn btn-primary mx-2" style={btnStyle} onClick={handleAddNewExpense}>ADD NEW EXPENSE</button>
            </div>
            <div style={myStyle}>
            <form className="expense-item d-flex justify-content-center" >
                <div>
                    <p className='form-label text-light'>INPUT YOUR EXPENSE ITEM HERE</p>
                    <div className="mb-3">
                        <label htmlFor="exptitle" className="form-label">Expense Title</label>
                        <input type="text" className="form-control" value={enteredtitle} onChange={handleTitleChange} id="Expense Title" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="expAmount" className="form-label">Expense Amount</label>
                        <input type="number" className="form-control" value={enteredamount} onChange={handleAmountChange} id="Expense Amount" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="expDate" className="form-label">Date</label>
                        <input type="date" className="form-control" value={entereddate} onChange={handleDateChange} id="Date" />
                    </div>
                    <button type="submit" className="btn btn-primary mx-2" onClick={handleCancel} >CANCEL</button>
                    <button type="submit" className="btn btn-primary mx-2" onClick={handleSubmit}>ADD EXPENSE</button>
                </div>
            </form>
            </div>
        </>
    )
}

export default ExpenseForm;

