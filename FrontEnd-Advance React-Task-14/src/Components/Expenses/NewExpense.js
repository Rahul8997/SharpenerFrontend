import React,{useState} from 'react'
import ExpenseForm from './ExpenseForm'

function NewExpense(props) {
  const [editing,setEditing]=useState(true);
    const saveExpenseDataHandler=(enteredexpenseData)=>{
        const expenseData={
            ...enteredexpenseData,
            id:Math.random().toString()
        }
        props.onAddExpense(expenseData);
    }
    const handleAddNewExpense=(e)=>{
      e.preventDefault();
      console.log("added new expense")
      setEditing(false);
    }
    const handleForm=(data)=>{
      console.log("handled form")
      setEditing(data);
    }
  return (
    <div>
      {editing && <div style={{width:"20%" ,margin:"auto"}}>
      <button type="submit" className="btn btn-primary mx-2" onClick={handleAddNewExpense}>ADD NEW EXPENSE</button>
      </div>}
      {!editing && <ExpenseForm handleForm={handleForm} onSaveExpenseData={saveExpenseDataHandler}/>}
    </div>
  )
}

export default NewExpense;
