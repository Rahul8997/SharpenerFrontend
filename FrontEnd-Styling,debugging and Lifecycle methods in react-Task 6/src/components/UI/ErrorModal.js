import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';
// import { getByTestId } from '@testing-library/react';

let Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />
}
let Overlaydrop = (props) => {
  return <Card className={classes.modal}>
    <header className={classes.header}>
      <h2>{props.title}</h2>
    </header>
    <div className={classes.content}>
      <p>{props.message}</p>
    </div>
    <footer className={classes.actions}>
      <Button onClick={props.onConfirm}>Okay</Button>
    </footer>
  </Card>
}

const ErrorModal = (props) => {
  return (
   
    <React.Fragment>
    {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm}/>,document.getElementById('backed-drop'))
    }
    {ReactDOM.createPortal(<Overlaydrop title={props.title} message={props.message} onConfirm={props.onConfirm}/>,document.getElementById('overlay-drop'))
    }
    </React.Fragment>
   
  );
};

export default ErrorModal;
