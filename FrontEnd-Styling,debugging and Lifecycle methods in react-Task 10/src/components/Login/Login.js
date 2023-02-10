import React, { useState, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import InputComponent from '../Input/InputComponent';


const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.includes('@') };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.includes('@') };
  }
  return { value: '', isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: '', isValid: false };
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [enteredCollege, setEnteredCollege] = useState('');
  const [collegeIsValid, setcollegeIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, { value: '', isValid: null });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, { value: '', isValid: null });

  // useEffect(()=>{
  //   setFormIsValid(
  //     enteredEmail.includes('@') && enteredPassword.trim().length > 6 && enteredCollege.trim().length>0
  //   );
  // },[enteredEmail,enteredPassword,enteredCollege]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'USER_INPUT', val: event.target.value });

    setFormIsValid(
      event.target.value.includes('@') && passwordState.value.trim().length > 6
    );
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: 'USER_INPUT', val: event.target.value });
    // setEnteredPassword(event.target.value);
    setFormIsValid(
      emailState.isValid && event.target.value.trim().length > 6 && enteredCollege.trim().length > 0
    );
  };
  const collegeChangeHandler = (event) => {
    setEnteredCollege(event.target.value);
    setFormIsValid(
      emailState.value.includes('@') && passwordState.value.trim().length > 6 && enteredCollege.trim().length > 0
    );
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'INPUT_BLUR' });
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchPassword({ type: 'INPUT_BLUR' })
  };
  const validateCollegeHandler = () => {
    setcollegeIsValid(enteredCollege.trim().length > 0);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value, enteredCollege);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>

        <InputComponent inputState={emailState} InputType="email" InputId="email" inputValue={emailState.value} onChangefun={emailChangeHandler} onBlurfun={validateEmailHandler} inputLabel="Email" />

        <InputComponent inputState={passwordState} InputType="password" InputId="password" inputValue={passwordState.value} onChangefun={passwordChangeHandler} onBlurfun={validatePasswordHandler} inputLabel="Password" />

        <InputComponent inputState={enteredCollege} InputType="text" InputId="collegeName" inputValue={enteredCollege} onChangefun={collegeChangeHandler} onBlurfun={validateCollegeHandler} inputLabel="College" />

        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;










