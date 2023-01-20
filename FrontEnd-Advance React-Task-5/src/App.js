import "./App.css";
import ExpenseForm from "./Components/Expenses/ExpenseForm";
import ExpenseItems from "./Components/Expenses/ExpenseItems";
const App=()=> {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div style={{backgroundColor:"gray"}}>
      <h1>Lets get started!!</h1>
     <ExpenseForm/>
      {expenses.map((ele)=>{
        return <ExpenseItems key={ele.id} exptitle={ele.title} expamount={ele.amount} expdate={ele.date}/>
      })}
    </div>
  );
}

export default App;
