import React,{useState} from 'react'
import ExpenseItems from './ExpenseItems'
import Expensefilter from './Expensefilter';
import ExpensesChart from './ExpensesChart';

function Expnses(props) {
  const [filteredYear,setFilteredYear]=useState('2020');
  const handleYear= (year)=>{
    setFilteredYear(year);
  }
  let filterExpenses=props.items.filter((expense)=>{
    return expense.date.getFullYear().toString()===filteredYear;
  })

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });  

  const handleFilter=(year)=>{
    return year;
  }
  let expenseContent=<p className='expense-item' style={{background:"orange",color:"black"}}>Expense not Found.</p>
  if(filterExpenses.length>0){
    expenseContent=filterExpenses.map((ele)=>{
        return <ExpenseItems key={ele.id} exptitle={ele.title} expamount={ele.amount} expdate={ele.date}/>
      })
  }
  if(filterExpenses.length===1){
    expenseContent=filterExpenses.map((ele)=>{
        return (<>
      <ExpenseItems key={ele.id} exptitle={ele.title} expamount={ele.amount} expdate={ele.date}/>
      <p className='expense-item' style={{background:"green",color:"white"}}>Only single Expense here. Please add more...</p>
        </>
        )
      })
  }
  return (

    <div>
       <Expensefilter handleFilter={handleFilter} currentYear={filteredYear} selectYear={handleYear} />
       <ExpensesChart expenses={filteredExpenses} />
       {expenseContent}
    </div>
  )
}

export default Expnses
