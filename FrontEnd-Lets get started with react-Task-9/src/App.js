import "./App.css";
import ExpenseItems from "./Components/ExpenseItems";
function App() {
 function repeat (x){
    let arr=[];
    for (let index = 1; index <=100; index++) {
      arr.push(<ExpenseItems exptitle={"New TV"} expamount={index} expdate={new Date().toISOString()} locationOFExpenditure="Subscription Cost"/>);
    }
    return arr;
  };
  return (
    <>
      <h1>Lets get started!!</h1>
      {repeat()}
    </>
  );
}

export default App;
