import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate.js' 
import ExpenseDetail from './ExpenseDetail';
function ExpenseItems(props) {
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