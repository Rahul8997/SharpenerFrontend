import React,{useState} from 'react';

import './App.css';
import ErrorMessage from './components/ErrorMessage';
import Form from './components/Form';
import User from './components/User';

const App = () => {
  const [getuser, setGetuser] = useState([
    { Username: 'hari', Age: 25 ,id:Math.random()},
    { Username: 'ram', Age: 30 ,id:Math.random() }
  ]);

  const [msg,setMsg]=useState("");

let addData=(user,age)=>{
  let newObj={
    Username: user, Age: age ,id:Math.random()
  }
  setGetuser([...getuser,newObj]);
}

let close=()=>{
  setMsg("");
}

let handleError=(data)=>{
setMsg(<ErrorMessage data={data} close={close}/>);
}


  return (
    <div>
      {msg}
      <section id="goal-form">
       <Form addData={addData} handleError={handleError}/>
      </section>
      <section id="goals">
        {getuser.map((user)=>{
          return <User username={user.Username} age={user.Age} key={user.id}/>
        })}
      </section>
    </div>
  );
};

export default App;
