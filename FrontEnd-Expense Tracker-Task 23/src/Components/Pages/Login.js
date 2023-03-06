import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { authActions } from '../Store';
import './Login.Module.css'
let credentialModiefiedforRequest = (mail) => {
    let modifiedMail = '';
    for (let i = 0; i < mail.length; i++) {
        if (mail[i] !== '@' && mail[i] !== '.') {
            modifiedMail += mail[i];
        }
    }
    return modifiedMail;
}
const Login = () => {
    const dispatch = useDispatch();
    const login = useSelector(state => state.authentication.login)
    const token = useSelector(state => state.authentication.token)
    const user = useSelector(state => state.authentication.user)

    const handleLogin = () => {
        if (login) {
            dispatch(authActions.loginFalse())
        } else {
            dispatch(authActions.loginTrue())
        }
    }
    let enteredpass = useRef();
    let enteredEmail = useRef();
    let enteredConfirmPass = useRef();

    const history = useHistory();
    const submitHandler = async (e) => {
        e.preventDefault();

        dispatch(authActions.setuser(credentialModiefiedforRequest(enteredEmail.current.value)));
        console.log(user);
        dispatch(authActions.setuser(user));
        if (!login) {
            if (enteredEmail.current.value.length > 0 && enteredpass.current.value.length > 0 && enteredConfirmPass.current.value.length > 0) {
                if (enteredpass.current.value === enteredConfirmPass.current.value) {
                    let responce = await fetch(
                        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAVT99-GK2zBUOt69gM4rlulJJmZmwYgOU',
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

                    if (responce.ok) {
                        let data = await responce.json();
                        console.log("Authantication Token:", token);
                        dispatch(authActions.setToken(data.idToken))
                        dispatch(authActions.setuser(credentialModiefiedforRequest(enteredEmail.current.value)));
                        localStorage.setItem("user", credentialModiefiedforRequest(enteredEmail.current.value));
                        localStorage.setItem("token", data.idToken);
                        alert("User has signed Up")
                        console.log("User has signed Up");
                        dispatch(authActions.setIsloggedIn(true))
                        history.push('/profile')
                    } else {
                        let errorMessage = 'Authentication failed!';
                        alert(errorMessage);
                    }
                }
                else {
                    alert("Password and confirm passwords are not matching")
                }
            } else {
                alert("please fill all the data")
            }
        } else {
            if (enteredEmail.current.value.length > 0 && enteredpass.current.value.length > 0) {
                let responce = await fetch(
                    'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAVT99-GK2zBUOt69gM4rlulJJmZmwYgOU',
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

                if (responce.ok) {
                    let data = await responce.json();
                    console.log("Authantication Token:", data.idToken);
                    localStorage.setItem("token", data.idToken);
                    dispatch(authActions.setuser(credentialModiefiedforRequest(enteredEmail.current.value)));
                    localStorage.setItem("user", credentialModiefiedforRequest(enteredEmail.current.value));
                    alert("Logged In Successfully")
                    console.log("Logged In Successfully");
                    try {
                        let responce = await fetch(
                            'https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyAVT99-GK2zBUOt69gM4rlulJJmZmwYgOU',
                            {
                                method: 'POST',
                                body: JSON.stringify({
                                    idToken: data.idToken,
                                }),
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                            }
                        )
                        if (responce.ok) {
                            let data = await responce.json();
                            console.log(data.users[0])
                            dispatch(authActions.setProfileInfo({ myName: data.users[0].displayName, myUrl: data.users[0].photoUrl }))
                            // alert("request successfull"
                            dispatch(authActions.setToken(localStorage.getItem("token")))
                            dispatch(authActions.setIsloggedIn(true))
                        } else {
                            throw new Error("Failed")
                        }
                    } catch (error) {
                        console.log(error)
                    }
                    history.push('/profile')
                } else {
                    let errorMessage = 'Authentication failed!';
                    alert(errorMessage);
                }
            }
            else {
                alert("please fill all the data")
            }
        }
    }

    return (
        <div>
            <section className="auth">
                <h2 className='my-3 text-dark'>{!login ? "Sign Up" : "Log In"}</h2>
                <form >
                    <div className="control">
                        <input type='email' id='email' placeholder='Email' ref={enteredEmail} />
                    </div>
                    <div className="control">
                        <input
                            type='password'
                            id='password'
                            required
                            placeholder='Password'
                            ref={enteredpass}
                        />
                    </div>
                    {!login && <div className="control">
                        <input
                            type='password'
                            id='password'
                            required
                            placeholder='Confirm Password'
                            ref={enteredConfirmPass}
                        />
                    </div>}
                    <div >
                        <button className="btn btn-primary border w-100" onClick={submitHandler}>{!login ? "Sign Up" : "Login"}</button>
                        {login && <Link className='nav-link active' to="/forget">forget password?</Link>}
                    </div>
                </form>
                <div>
                    <button
                        onClick={handleLogin}
                        type="button"
                        className="btn btn-outline-success my-3 w-100">
                        {!login ? "Have an account?Login" : "Don't have an account?Sign up"}
                    </button>
                </div>
            </section>
        </div>
    )
}

export default Login

