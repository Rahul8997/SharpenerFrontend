import React, { useContext, useRef } from 'react'
import classes from './Login.module.css'
import { useHistory } from 'react-router-dom'
import { cartContext } from '../Store/CartProvider';

const Login = () => {
    let enteredpass = useRef();
    let enteredEmail = useRef();
    let ctx = useContext(cartContext);
    let history = useHistory();
    function countSum(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum = sum + Number(arr[i].price);
        }
        return sum;
    }

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
                    console.log(ctx);
                    let responce = res.json();
                    responce.then((data) => {
                        ctx.setEmail(enteredEmail.current.value);
                        console.log(ctx);
                        console.log("idTOken:", data.idToken);
                        ctx.setToken(data.idToken);
                        localStorage.setItem("idToken", data.idToken);
                        ctx.setIsLoggedIn(true);
                        history.push('/products')
                    }).then(async () => {
                        console.log(ctx);
                        try {
                            let usermailid = enteredEmail.current.value.replace(/[^a-zA-Z0-9 ]/g, '');
                            let responce = await fetch(`https://crudcrud.com/api/c81dd2cc15514644a9e06a0abf80b10b/cart${usermailid}`, {
                                method: 'GET',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                            });
                            let data = await responce.json();
                            console.log(data);
                            ctx.setCartItems({ items: data, totalItems: data.length, totalAmount: countSum(data) })
                        } catch (e) {
                            console.log(e);
                            console.log("Something went wrong");
                        }
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

