import React, { useContext, useRef } from 'react'
import classes from './Login.module.css'
import { useHistory } from 'react-router-dom'
import { cartContext } from '../Store/CartProvider';

const Login = () => {
    let enteredpass = useRef();
    let enteredEmail = useRef();
    let ctx = useContext(cartContext);
    let history = useHistory();

    const submitHandler = (e) => {
        e.preventDefault();
        fetch(
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB6cX21zeYABpzin7kuVAkvK583neKmfsY',
            {
                method: 'POST',
                body: JSON.stringify({
                    email: enteredEmail.current.value,
                    password: enteredpass.current.value,
                    returnSecureToken: true,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
            .then((res) => {
                if (res.ok) {
                    let responce = res.json();
                    responce.then((data) => {
                        console.log(ctx);
                        ctx.setIsLoggedIn(true);
                        console.log("idTOken:", data.idToken);
                        ctx.setToken(data.idToken);
                        localStorage.setItem("idToken", data.idToken);
                        history.push('/products')
                    })
                } else {
                    console.log(res)
                    return res.json().then((data) => {
                        let errorMessage = 'Authentication failed!';
                        alert(errorMessage);
                    });
                }
            });
    }

    return (
        <section className={classes.auth}>
            <h1>Login</h1>
            <form >
                <div className={classes.control}>
                    <label htmlFor='email'>Your Email</label>
                    <input type='email' id='email' ref={enteredEmail} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='password'>Your Password</label>
                    <input
                        type='password'
                        id='password'
                        required
                        ref={enteredpass}
                    />
                </div>
                <div className={classes.actions}>
                    <button onClick={submitHandler}>Login</button>
                </div>
            </form>
        </section>
    )
}

export default Login

