import React from 'react'
import "../components/Users.css"
const User = (props) => {
  return (
    <div>
       <div className="goal-item">
      {`${props.username}  (${props.age} years old)`}
    </div>
    </div>
  )
}

export default User
