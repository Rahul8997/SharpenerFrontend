import './ExpenseItem.css'
// const expenseData=new Date(2021,2,28);
// const expenseTitle="car insuranse";
// const expenseAmount=294.67;
function ExpenseItems(props) {
  return (
    <>
      <div className="expense-item">
        <div className="expense-item__description">

          <div>{props.expdate}</div>
          <h2>{props.exptitle}</h2>
          <h2>{props.locationOFExpenditure}</h2>
          <div className="expense-item__price">${props.expamount}</div>
        </div>
      </div>
    </>

  )
}


export default ExpenseItems;