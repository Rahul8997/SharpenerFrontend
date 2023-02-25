import React, { useRef } from 'react'
import './Login.Module.css'

const Login = () => {
    let enteredpass = useRef();
    let enteredEmail = useRef();
    let enteredConfirmPass = useRef();

    const submitHandler = async(e) => {
        e.preventDefault();
        if (enteredpass.current.value===enteredConfirmPass.current.value) {
           let responce=await  fetch(
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
                 let data=await responce.json();
                 console.log("Authantication Token:",data.idToken);
                 alert("User has signed Up")
                 console.log("User has signed Up");
                } else {
                    let errorMessage = 'Authentication failed!';
                    alert(errorMessage);
                }
            }
            else{
                alert("Password and confirm passwords are not matching")
            }
        }
            
    return (
        <div>
            <section className="auth">
                <h2 className='my-3'>Sign Up</h2>
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
                    <div className="control">
                        <input
                            type='password'
                            id='password'
                            required
                            placeholder='Confirm Password'
                            ref={enteredConfirmPass}
                        />
                    </div>
                    <div >
                        <button className="btn btn-primary border w-100" onClick={submitHandler}>Sign Up</button>
                    </div>
                </form>
            <div>
                <button type="button" className="btn btn-outline-success my-3 w-100">Have an account?Login</button>
            </div>
            </section>
        </div>
    )
}

export default Login

