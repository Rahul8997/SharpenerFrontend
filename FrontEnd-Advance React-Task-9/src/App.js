import "./App.css";
import React,{useState} from 'react'

import NewExpense from "./Components/NewExpense/NewExpense";
import ExpenseItems from "./Components/Expenses/ExpenseItems";
import Expensefilter from "./Components/Expenses/Expensefilter";
const App=()=> {

  const [filteredYear,setFilteredYear]=useState('2020');

  const handleYear=async (year)=>{
    setFilteredYear(year);
    console.log(filteredYear);
  }
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const addExpensehandler=(expense)=>{
    console.log("In app.js");
    console.log(expense);

    expenses.push(
    { id: expense.id,
    title: expense.title,
    amount: expense.amount,
    date: expense.date});
  }

  return (
    <div style={{backgroundColor:"gray"}}>
      <h1>Lets get started!!</h1>
     <NewExpense onAddExpense={addExpensehandler}/>
     <Expensefilter currentYear={filteredYear} selectYear={handleYear}/>
      {expenses.map((ele)=>{
        return <ExpenseItems key={ele.id} exptitle={ele.title} expamount={ele.amount} expdate={ele.date}/>
      })}
    </div>
  );
}

export default App;
