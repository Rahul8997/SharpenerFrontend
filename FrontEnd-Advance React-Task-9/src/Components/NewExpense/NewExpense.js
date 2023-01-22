import React from 'react'
import ExpenseForm from '../Expenses/ExpenseForm'

function NewExpense(props) {
    const saveExpenseDataHandler=(enteredexpenseData)=>{
        const expenseData={
            ...enteredexpenseData,
            id:Math.random().toString()
        }
        props.onAddExpense(expenseData);
    }
  return (
    <div>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  )
}

export default NewExpense;
