import '../Expenses/ExpenseItem.css'
import ExpenseDate from '../Expenses/ExpenseDate' 
import ExpenseDetail from '../Expenses/ExpenseDetail.js';
const ExpenseItems=(props)=> {
  return (
    <>
      <div className="expense-item">
        <ExpenseDate expdate={props.expdate}/>
        <ExpenseDetail exptitle={props.exptitle} expamount={props.expamount}/>
      </div>
    </>
  )
}
export default ExpenseItems;