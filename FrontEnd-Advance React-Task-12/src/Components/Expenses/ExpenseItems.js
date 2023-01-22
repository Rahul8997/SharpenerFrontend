import React,{useState} from 'react';
import '../Expenses/ExpenseItem.css'
import ExpenseDate from '../Expenses/ExpenseDate' 
import ExpenseDetail from '../Expenses/ExpenseDetail.js';
const ExpenseItems=(props)=> {
  const [title,setTitle]=useState(props.exptitle);
  const [expense,setExpense]=useState(props.expamount);

  const clickHandler=()=>{
    setTitle("Updated");
    console.log(title);
  }
  const clickUpdateExpense=()=>{
    setExpense("100");
  }
  return (
    <>
      <div className="expense-item">
        <ExpenseDate expdate={props.expdate}/>
        <ExpenseDetail exptitle={title} expamount={expense}/>
        <button onClick={clickUpdateExpense}>Update Expense</button>
        <button onClick={clickHandler}>Update Title</button>
      </div>
    </>
  )
}
export default ExpenseItems;