import React from 'react'
import "../components/User-Input.css";
const ErrorMessage = (props) => {
    let handleOnclick=(e)=>{
        props.close();
    }
  return (
    <div >
    <div style={{width:"30%",display:"flex",flexDirection:"column",margin:"auto",border:"2px sloid black",textAlign:"center",background:"#fae7e7"}}>
        <div style={{backgroundColor:"purple",color:"white"}} >Invalid Input</div>
      <p>{props.data}</p>
      <button style={{width:"100px",alignItems:"end"}} onClick={handleOnclick}>Okay</button>
    </div>
    </div>
  )
}

export default ErrorMessage
// width: 50%;
// display: flex;
// flex-direction: column;
// border: 2px solid purple;
// margin: auto;