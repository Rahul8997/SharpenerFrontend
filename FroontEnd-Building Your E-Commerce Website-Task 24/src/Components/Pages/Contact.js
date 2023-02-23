import React, { useRef } from 'react';
import './Contact.css'

function Contact() {
    const name=useRef("");
    const mail=useRef("");
    const phone=useRef("");

    const handleSubmit= async (e)=>{
        e.preventDefault();
        let newContact={
            name:name.current.value,
            email:mail.current.value,
            phone:phone.current.value
        }

        const response=await fetch('https://react-sharpener-e-commerce-default-rtdb.firebaseio.com/contact.json',{
            method:"POST",
            body:JSON.stringify(newContact),
            headers:{
                'Content-Type':'application/json'
            }
        })
        let data=await response.json();
        alert("data has been stored successfully")
        console.log(data)
    }
  return (
    
    <form className='container border my-3 my-form'>
        <h1 className='text-center'>Contact Us</h1>
      <div className='control'>
        <label htmlFor='name'>Name</label>
        <input type='name' ref={name} id='name' placeholder='Enter your name'/>
      </div>
      <div className='control'>
        <label htmlFor='email'>Email</label>
        <input type='email' ref={mail} id='email' placeholder='Enter valid email address'></input>
      </div>
      <div className='control'>
        <label htmlFor='phone'>Phone-Number</label>
        <input type='tel' id='phone' ref={phone} placeholder='Enter valid phone number'/>
      </div>
      <div className='text-center my-3'>
      <button type="button" className="contact-btn" onClick={handleSubmit}>Submit</button>
      </div>
    </form>
  );
}

export default Contact;