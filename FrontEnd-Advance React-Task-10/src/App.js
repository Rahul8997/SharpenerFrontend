import "./App.css";
import React, { useState } from 'react'

import NewExpense from "./Components/Expenses/NewExpense";
import Expnses from "./Components/Expenses/Expnses";
const App=()=> {

  const dummy_expenses = [
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
  const [expense,setExpenses]=useState(dummy_expenses);

  const addExpensehandler=(expense)=>{
    // console.log("In app.js");
    // console.log(expense);
    setExpenses((prevExpenses)=>{
      return [expense,...prevExpenses];
    })
  }

  return (
    <div style={{backgroundColor:"gray"}}>
      <h1>Lets get started!!</h1>
     <NewExpense onAddExpense={addExpensehandler}/>
     <Expnses items={expense}/>
    </div>
  );
}

export default App;
