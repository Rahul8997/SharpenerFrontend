import '../Expenses/ExpenseItem.css';
const expenseDetails=(props)=> {
    let month = props.expdate.toLocaleString('en-US', { month: 'long' });
    let day = props.expdate.toLocaleString('en-US', { day: '2-digit' });
    let year = props.expdate.getFullYear();
    return (
        <div className="expense-item">
        <div>
          <div>{month}</div>
          <div>{day}</div>
          <div>{year}</div>
        </div>
        </div>
    )
}

export default expenseDetails;
