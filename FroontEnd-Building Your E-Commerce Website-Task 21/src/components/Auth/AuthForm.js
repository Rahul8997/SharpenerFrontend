import { useState, useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { appContext } from '../../Store/Context';

import classes from './AuthForm.module.css';

const AuthForm = () => {

  let history=useHistory();
  let ctx=useContext(appContext);
  const [isLogin, setIsLogIn] = useState(false);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

 
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogIn((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // optional: Add validation

    setIsLoading(true);   
    if (isLogin) {
      fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyByOrvUk-TKCvmY39IHjB_EQvxRkvKF3Wc',
        {
          method: 'POST',
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      ).then((res) => {
        console.log(ctx);
        setIsLoading(false);
        if (res.ok) {
         let responce=res.json();
         responce.then((data)=>{
          console.log("idTOken:",data.idToken);
          ctx.setToken(data.idToken);
          localStorage.setItem("idToken",data.idToken);
          setTimeout(() => {
          localStorage.removeItem("idToken");
          ctx.setToken(null);
          }, 5*60*1000);
          ctx.setIsLoggedIn(true);
          history.push('/profile')
        })
        } else {
        console.log(res)
          return res.json().then((data) => {
            let errorMessage = 'Authentication failed!';
            alert(errorMessage);
          });
        }
      });

    } else {
      fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyByOrvUk-TKCvmY39IHjB_EQvxRkvKF3Wc',
        {
          method: 'POST',
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      ).then((res) => {
        setIsLoading(false);
        if (res.ok) {
          let responce=res.json();
         responce.then((data)=>{
          console.log("idTOken:",data.idToken);
          ctx.setToken(data.idToken);
          console.log(ctx);
          ctx.isLoggedin(true);
        })
        } else {
          return res.json().then((data) => {
            let errorMessage = 'Authentication failed!';
            alert(errorMessage);
          });
        }
      });
    }
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
          {isLoading && <p style={{color:"white"}}>Sending request...</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;