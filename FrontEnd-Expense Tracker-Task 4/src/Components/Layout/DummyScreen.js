import React from 'react'
import { Link } from 'react-router-dom'

const DummyScreen = () => {
  return (
    <div className='my-2  mx-2'>
      <h1 className="fst-italic" >
        Welcome to expanse tracker!!!
      </h1>
      <span className='fst-italic bg-warning'>Your profie is incomplete<Link className='text-primary' to="/details">Complete now</Link></span>
      <hr/>
    </div>
  )
}

export default DummyScreen
