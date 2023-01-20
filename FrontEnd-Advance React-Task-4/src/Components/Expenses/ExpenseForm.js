import React from 'react'

function ExpenseForm() {
    const handleChange=(e)=>{
        console.log(e.target.id+":"+e.target.value);
    }
    return (
        <>
            <form className="expense-item d-flex justify-content-center" style={{width:"20%",backgroundColor:"black"}}>
                <div>
                    <p className='form-label text-light'>INPUT YOUR EXPENSE ITEM HERE</p>
                    <div className="mb-3">
                        <label htmlFor="exptitle" className="form-label">Expense Title</label>
                        <input type="text" className="form-control" onChange={handleChange} id="Expense Title" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="expAmount" className="form-label">Expense Amount</label>
                        <input type="number" className="form-control"  onChange={handleChange}  id="Expense Amount" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="expDate" className="form-label">Date</label>
                        <input type="date" className="form-control"  onChange={handleChange}  id="Date" />
                    </div>
                    <button type="submit" className="btn btn-primary">ADD EXPENSE</button>
                </div>
            </form>
        </>
    )
}

export default ExpenseForm;

//Expense title, Expense Amount and Date.