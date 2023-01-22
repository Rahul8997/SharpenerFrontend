import React from 'react'
import ExpenseItems from './ExpenseItems'
function Expnses(props) {
  return (
    <div>
       {props.items.map((ele)=>{
        return <ExpenseItems key={ele.id} exptitle={ele.title} expamount={ele.amount} expdate={ele.date}/>
      })}
    </div>
  )
}

export default Expnses
