import './ExpenseItem.css'
const expenseData=new Date(2021,2,28);
const expenseTitle="car insuranse";
const expenseAmount=294.67;
const locationOfExpenditure="Insurance expenditure";
function ExpenseItems() {
    return (
        <>
        <h2>{locationOfExpenditure}</h2>
        <div className="expense-item">
      <div>{expenseData.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
        </div>
        </>
  
    )
}


export default ExpenseItems;