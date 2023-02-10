import React,{useState} from 'react'
import ExpenseItems from './ExpenseItems'
import Expensefilter from './Expensefilter';

function Expnses(props) {
  const [filteredYear,setFilteredYear]=useState('2020');
  const handleYear= (year)=>{
    setFilteredYear(year);
    console.log(filteredYear);
  }
  return (

    <div>
       <Expensefilter currentYear={filteredYear} selectYear={handleYear}/>
       {props.items.map((ele)=>{
        return <ExpenseItems key={ele.id} exptitle={ele.title} expamount={ele.amount} expdate={ele.date}/>
      })}
    </div>
  )
}

export default Expnses
