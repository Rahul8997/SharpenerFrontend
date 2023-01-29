import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid,setisvalid]=useState(true);

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length>0){
      setisvalid(true);
    }
    setEnteredValue(event.target.value);
    
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length===0){
      setisvalid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid?"invalid":""}`}>

        {/* //inline style to change apply conditional style
        <label style={{color:!isValid?"red":"black"}}>Course Goal</label>
        <input style={{borderColor:!isValid?"red":"black",backgroundColor:!isValid?"salmon":"transparent"}} type="text" onChange={goalInputChangeHandler} /> */}
        {/* //dynamic styling using template literals to apply conditional style */}

        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button className={`form-control ${!isValid?"invalid":""}`} type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
