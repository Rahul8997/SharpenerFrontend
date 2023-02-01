import React, { useState } from 'react'
import "../components/User-Input.css"
const Form = (props) => {
    let [user,setUser]=useState("");
    let [age,setAge]=useState("");

    let handleOnsubmit=(e)=>{
        e.preventDefault();
        if(user.length===0 || age.length===0){
            props.handleError("please fill all the data");
        }else if(age<0){
            props.handleError("please enter a valid name & age(age>0)");
        }else{
            props.addData(user,age);
        }
    }
    let handleUserchange=(e)=>{
        e.preventDefault();
        setUser(e.target.value);
    }
    let handleAgechange=(e)=>{
        e.preventDefault();
        setAge(e.target.value);
    }

  return (
    <>
      <form onSubmit={handleOnsubmit} className="form-control">
        <div>
        <label htmlFor="username">Username</label>
        <input type="text" className="txt" id="username" onChange={handleUserchange}/>
        </div>
       
        <div>
        <label htmlFor="age">Age(years)</label>
        <input type="number" className="txt" id="age"onChange={handleAgechange}/>
        </div>
        <button type="submit">Add User</button>
      </form>
    </>
  )
}

export default Form
