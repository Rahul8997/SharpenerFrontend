import '../Expenses/ExpenseItem.css'
import ExpenseDate from '../Expenses/ExpenseDate' 
import ExpenseDetail from '../Expenses/ExpenseDetail.js';
const ExpenseItems=(props)=> {
  const handleDelete=(e)=>{
    let exp=e.target.parentElement;
    exp.style.display='none';
    console.log("Deleted successfully!!");
  }
  return (
    <>
      <div className="expense-item">
        <ExpenseDate expdate={props.expdate}/>
        <ExpenseDetail exptitle={props.exptitle} expamount={props.expamount}/>
        <button onClick={handleDelete}>Delete Expanse</button>
      </div>
    </>
  )
}
export default ExpenseItems;