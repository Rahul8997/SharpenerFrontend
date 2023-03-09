import React from 'react'
import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom'
const DummyScreen = () => {
  const token = useSelector(state => state.authentication.token);
 
  return (
    <div className='my-2  mx-2 row'>
      <h1 className="fst-italic col-md-8" >
        Welcome to your mail box!!!
      </h1>
      <hr/>
    </div>
  )
}

export default DummyScreen
