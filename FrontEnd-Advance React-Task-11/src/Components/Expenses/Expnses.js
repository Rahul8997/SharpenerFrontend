import React,{useState} from 'react'
import ExpenseItems from './ExpenseItems'
import Expensefilter from './Expensefilter';

function Expnses(props) {
  const [filteredYear,setFilteredYear]=useState('2020');
  const handleYear= (year)=>{
    setFilteredYear(year);
  }
  const filterExpenses=props.items.filter((expense)=>{
    return expense.date.getFullYear().toString()===filteredYear;
  })

  const handleFilter=(year)=>{
    return year;
  }

  return (

    <div>
       <Expensefilter handleFilter={handleFilter} currentYear={filteredYear} selectYear={handleYear} />
       {filterExpenses.map((ele)=>{
        return <ExpenseItems key={ele.id} exptitle={ele.title} expamount={ele.amount} expdate={ele.date}/>
      })}
    </div>
  )
}

export default Expnses
