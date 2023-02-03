import React, { useState ,Fragment,useRef} from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';
// import Wrapper from '../Helper/Wrapper';

const AddUser = (props) => {
  // const [enteredUsername, setEnteredUsername] = useState('');
  // const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  let nameInputref=useRef();
  let ageInputref=useRef();
  let collegeNameref=useRef();

  const addUserHandler = (event) => {
    event.preventDefault();
    // console.log(nameInputref.current.value,ageInputref.current.value,collegeNameref.current.value);
    const enteredUsername=nameInputref.current.value;
    const enteredAge=ageInputref.current.value;
    const enteredCollege=collegeNameref.current.value;

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0 || enteredCollege.trim().length===0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge,enteredCollege);
    nameInputref.current.value="";
    ageInputref.current.value=""
    collegeNameref.current.value=""
  };

  // const usernameChangeHandler = (event) => {
  //   setEnteredUsername(event.target.value);
  // };

  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            ref={nameInputref}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            ref={ageInputref}
          />
          <label htmlFor="college">College Name</label>
          <input
            id="college"
            type="text"
            ref={collegeNameref}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
      </Fragment>
  );
};

export default AddUser;
